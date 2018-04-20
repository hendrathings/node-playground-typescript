import * as Hapi from "hapi";

export class Server {
  public static run() {
    // Create a server with a host and port
    const server = new Hapi.Server({
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

module.exports = Server;
