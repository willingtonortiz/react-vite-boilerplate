import { AxiosRequestHeaders } from "axios";
import { stringify } from "querystringify";
import { Observable } from "rxjs";
import { inject, singleton } from "tsyringe";
import { DI } from "../di/di-container";
import { HttpUtils } from "./http-utils";

export interface RequestOptions {
  host?: string;
  params?: object;
  data?: object;
  customHeader?: AxiosRequestHeaders;
  isPublicRequest?: boolean;
}

@singleton()
export class HttpClient {
  static key = Symbol("HttpClient");
  host?: string;
  headers: AxiosRequestHeaders = {};

  constructor(
    @inject(HttpUtils.key)
    private readonly httpUtils: HttpUtils
  ) {
    this.host = import.meta.env.VITE_API_URL;
  }

  get<T>(url: string, options: RequestOptions): Observable<T> {
    const {
      host = "",
      params = {},
      customHeader = {},
      isPublicRequest = true,
    } = options;
    const endpoint = this.buildEndpoint({ host, url, params });
    const headers = this.buildHeaders(customHeader);

    return this.httpUtils.createCancellableRequest({
      url: endpoint,
      method: "GET",
      headers,
    });
  }

  public buildHeaders(customHeaders: AxiosRequestHeaders): AxiosRequestHeaders {
    return customHeaders ? { ...this.headers, ...customHeaders } : this.headers;
  }

  public buildEndpoint({
    host,
    url,
    params,
  }: {
    host: string | undefined;
    url: string;
    params: object;
  }): string {
    const hasParams = this.hasParams(params);
    const apiHost = host ? host : this.host;
    const apiParams = hasParams ? stringify(params, true) : "";

    return `${apiHost}/${url}${apiParams}`;
  }

  public hasParams(params: object): boolean {
    return Object.keys(params).length > 0;
  }
}

DI.register(HttpClient.key, HttpClient);
