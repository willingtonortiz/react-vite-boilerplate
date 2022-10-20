import axios, {
  AxiosError,
  AxiosResponse,
  CancelTokenSource,
  AxiosRequestHeaders,
} from "axios";
import { OK, UNAUTHORIZED } from "http-status";
import { Observable } from "rxjs";
import { singleton } from "tsyringe";
import { DI } from "../di/di-container";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

type CancellableRequestParams = {
  url: string;
  method: HttpMethods;
  headers: AxiosRequestHeaders;
  body?: Record<string, unknown>;
};

const isUnauthorized = (status: number = OK): boolean => {
  return status === UNAUTHORIZED;
};

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (isUnauthorized(error.response?.status)) {
      console.warn("Error to fetch. Status code: ", error.response?.status);
    }

    return Promise.reject(error);
  }
);

@singleton()
export class HttpUtils {
  static key = Symbol("HttpUtils");

  createCancellableRequest<T>(params: CancellableRequestParams): Observable<T> {
    return new Observable<T>((observer) => {
      const cancelToken = axios.CancelToken.source();

      const request = this.createAxiosRequest(params, cancelToken);

      request?.then(
        (result) => {
          observer.next(result.data);
          observer.complete();
        },
        (error) => {
          if (axios.isCancel(error)) {
            observer.complete();
          } else {
            observer.error(error);
          }
        }
      );

      return () => cancelToken.cancel();
    });
  }

  private createAxiosRequest(
    { method, headers, url, body }: CancellableRequestParams,
    cancelToken: CancelTokenSource
  ): Promise<AxiosResponse> | null {
    switch (method) {
      case "GET":
        return axios.get(url, { headers, cancelToken: cancelToken.token });

      case "POST":
        return axios.post(url, body, {
          headers,
          cancelToken: cancelToken.token,
        });

      case "PUT":
        return axios.put(url, body, {
          headers,
          cancelToken: cancelToken.token,
        });

      case "DELETE":
        return axios.delete(url, {
          headers,
          cancelToken: cancelToken.token,
        });

      default:
        return null;
    }
  }
}

DI.register(HttpUtils.key, HttpUtils);
