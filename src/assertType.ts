/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertType<Type>(_value: Type) {}

export namespace assertType {
  export type Equal<T, U> =
    Exclude<T, U> extends never
      ? Exclude<U, T> extends never
        ? true
        : false
      : false;
}
