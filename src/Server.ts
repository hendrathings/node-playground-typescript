import * as hapi from "hapi";

export default class Server {
  public static run(): void {
    // Create a server with a host and port
    const server = new hapi.Server({
      host: "localhost",
      port: 8000
    });

    // Add the route
    server.route({
      method: "GET",
      path: "/hello",
      handler: function(request, h) {
        return "hello world";
      }
    });

    try {
      server.start();
    } catch (err) {
      console.log(err);
      process.exit(1);
    }

    console.log("Server running at:", server.info.uri);
  }
}
