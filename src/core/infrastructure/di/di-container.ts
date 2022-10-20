import { container } from "tsyringe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

export class DIContainer {
  get<T>(key: string | symbol): T {
    return container.resolve(key);
  }

  register<T>(key: string | symbol, clazz: Constructor<T>) {
    container.register(key, { useClass: clazz });
  }
}

export const DI = new DIContainer();
