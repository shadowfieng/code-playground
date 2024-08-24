export const createReadonlyProxyObject = <T extends object>(obj: T) => {
  return new Proxy(obj, {
    set() {
      throw new Error("Cannot set property value for an object");
    }
  });
};
