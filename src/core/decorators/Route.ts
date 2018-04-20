import Server from "../../Server";

const server = Server.getInstance();

export function Route<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

export function HttpGet(path: string) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    server.mapRoute.push({
      method: "GET",
      path: path,
      handler: target[propertyKey]
    });
  };
}

export function HttpPost(path: string) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    server.mapRoute.push({
      method: "POST",
      path: path,
      handler: target[propertyKey]
    });
  };
}

export function HttpDelete(path: string) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    server.mapRoute.push({
      method: "DELETE",
      path: path,
      handler: target[propertyKey]
    });
  };
}

export function HttpPut(path: string) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    server.mapRoute.push({
      method: "PUT",
      path: path,
      handler: target[propertyKey]
    });
  };
}

export function HttpPatch(path: string) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    server.mapRoute.push({
      method: "PATCH",
      path: path,
      handler: target[propertyKey]
    });
  };
}
