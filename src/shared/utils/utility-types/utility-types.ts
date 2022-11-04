/* eslint-disable @typescript-eslint/ban-types */
export type PropertiesAndMethods<T> = {
  [P in keyof T]: T[P];
};

export type PropertyList<T> = {
  [P in keyof T]: T[P] extends Function ? never : P;
}[keyof T];

export type MethodList<T> = {
  [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

export type Properties<T> = Omit<T, MethodList<T>>;

export type Methods<T> = Omit<T, PropertyList<T>>;
