// Importing the serve function from Deno's standard library
import { serve } from "https://deno.land/std@$STD_VERSION/http/server.ts";
serve((_req) => new Response("Hello, world"), { port: 8001 });

// Function to handle requests
async function handler(req: Request): Promise<Response> {
  const { pathname, searchParams } = new URL(req.url);

  // Handling different routes
  if (pathname === "/api/greet" && req.method === "GET") {
    const name = searchParams.get("name") || "World";
    return new Response(`Hello, ${name}!`);
  }

  if (pathname === "/api/data" && req.method === "POST") {
    const body = await req.json();
    return new Response(
      JSON.stringify({ message: "Data received", data: body }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (pathname === "/api/data" && req.method === "PUT") {
    const body = await req.json();
    return new Response(
      JSON.stringify({ message: "Data updated", data: body }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (pathname === "/api/data" && req.method === "DELETE") {
    return new Response(JSON.stringify({ message: "Data deleted" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  // Default response for unknown routes
  return new Response("Not Found", { status: 404 });
}

// Start the HTTP server on port 8000
serve(handler, { port: 8001 });

console.log("Server running on http://localhost:8001");
