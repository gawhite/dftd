Cover image for Deno 2.0 REST API Explained: Faster, Secure JavaScript
Development Ashish prajapati Ashish prajapati

Posted on Oct 15 1 Deno 2.0 REST API Explained: Faster, Secure JavaScript
Development

Deno 2.0 is a major upgrade to the Deno runtime environment for JavaScript,
TypeScript, and WebAssembly. It was created by the same developer who initially
developed Node.js, and Deno aims to address some of the shortcomings found in
Node.js, such as security, modularity, and built-in tooling.

Here are the key features of Deno 2.0:

    Node.js Compatibility: Deno 2.0 is fully compatible with Node.js, meaning that you can run Node.js code and use npm packages within the Deno runtime. This eliminates the need for separate runtime environments, allowing developers to leverage Deno's modern features without abandoning the rich ecosystem of npm.

    Performance Enhancements: Deno 2.0 has improved startup times and optimized memory usage. It makes use of the V8 engine for JavaScript execution, with faster HTTP processing and more efficient handling of common tasks. This improvement makes Deno more suitable for performance-sensitive applications.

    Security: One of the most significant features of Deno is its security model. By default, Deno's runtime does not allow access to the file system, environment variables, or network without explicit permissions. This is a major improvement over Node.js, which has no such restrictions.

    Native TypeScript Support: Unlike Node.js, which requires additional tools like Babel or ts-node to compile TypeScript, Deno natively supports TypeScript out of the box. You can run TypeScript code without any configuration, making the development process smoother for TypeScript developers.

    Simplified Package Management: Deno eliminates the need for a package.json file and node_modules folder. Instead, it uses URL-based imports, making dependency management more straightforward and reducing clutter in the project folder.

    Built-in Tooling: Deno comes with integrated tools such as a linter (deno lint), formatter (deno fmt), test runner, and bundler. This reduces the need for external packages or tools that are typically required in a Node.js project.

    Edge Deployments: Deno 2.0 also supports edge computing via Deno Deploy, which enables developers to deploy their applications closer to users, resulting in reduced latency and better performance for global applications.

Basic REST API Using Deno 2.0

Here’s a basic example of creating a REST API using Deno:

1. Setting up Deno

Make sure you have Deno installed by running:

deno --version

If not installed, follow the instructions on Deno's official website. 2.
Creating the REST API

We will use Deno's built-in HTTP server to create a basic REST API that handles
GET, POST, PUT, and DELETE requests.

First, create a file named server.ts:

// Importing the serve function from Deno's standard library import { serve }
from "https://deno.land/std@0.196.0/http/server.ts";

// Function to handle requests async function handler(req: Request):
Promise<Response> { const { pathname, searchParams } = new URL(req.url);

// Handling different routes if (pathname === "/api/greet" && req.method ===
"GET") { const name = searchParams.get("name") || "World"; return new
Response(`Hello, ${name}!`); }

if (pathname === "/api/data" && req.method === "POST") { const body = await
req.json(); return new Response(JSON.stringify({ message: "Data received", data:
body }), { headers: { "Content-Type": "application/json" }, }); }

if (pathname === "/api/data" && req.method === "PUT") { const body = await
req.json(); return new Response(JSON.stringify({ message: "Data updated", data:
body }), { headers: { "Content-Type": "application/json" }, }); }

if (pathname === "/api/data" && req.method === "DELETE") { return new
Response(JSON.stringify({ message: "Data deleted" }), { headers: {
"Content-Type": "application/json" }, }); }

// Default response for unknown routes return new Response("Not Found", {
status: 404 }); }

// Start the HTTP server on port 8000 serve(handler, { port: 8000 });

console.log("Server running on http://localhost:8000");

3. Running the API

To run the server, use the following command:

deno run --allow-net server.ts

The --allow-net flag is required because Deno's security model restricts network
access by default, and you need to explicitly allow it. 4. Testing the API

    GET Request: Access http://localhost:8000/api/greet?name=Deno in your browser or via curl:

curl http://localhost:8000/api/greet?name=Deno

Response: Hello, Deno!

    POST Request: Use curl to send a POST request with JSON data:

curl -X POST http://localhost:8000/api/data -H "Content-Type: application/json"
-d '{"id": 1, "name": "Deno"}'

Response: {"message":"Data received","data":{"id":1,"name":"Deno"}}

    PUT Request: Send a PUT request to update data:

curl -X PUT http://localhost:8000/api/data -H "Content-Type: application/json"
-d '{"id": 1, "name": "Updated Deno"}'

Response: {"message":"Data updated","data":{"id":1,"name":"Updated Deno"}}

    DELETE Request: Send a DELETE request to delete data:

curl -X DELETE http://localhost:8000/api/data

Response: {"message":"Data deleted"} Conclusion

Deno 2.0 simplifies JavaScript and TypeScript development by focusing on
performance, security, and modern developer needs like TypeScript support and
edge deployment. This basic REST API example demonstrates how to get started
with Deno’s built-in HTTP server, showcasing its simplicity and efficiency in
handling common development tasks. profile mogenius Promoted

Image of Kubernets ebook Want to Build a Kubernetes Deployment Process Your
Developers Will Love?

Learn More Top comments (0) Subscribe pic Code of Conduct • Report abuse profile
mogenius Promoted

Image of Kubernets ebook Want to Build a Kubernetes Deployment Process Your
Developers Will Love?

Learn More Read next rym_michaut profile image 👋🏻Goodbye Power BI! 📊 In 2025
Build AI/ML Dashboards Entirely Within Python 🤖

Rym - Dec 17 dror_wayne_fine profile image Watch: Live Demo creating a tiptap
editor using AI

Dror Wayne - Dec 17 janeksmietanek profile image How to Add Document Generation
to Your Custom Insurance Application

Arek Krysik - Dec 17 andylawrence profile image 2024's AI Chatbot Race: Grok 2
vs. ChatGPT 4o - Who Wins?

Andy - Dec 17 Ashish prajapati

    Location
    Gujarat, India
    Joined
    Aug 26, 2024

More from Ashish prajapati "Day 7 with GSAP: Interactive Scrolling Animation
with Rotating Arrows" #gsap #javascript #beginners #tutorial Day 6: Text
Animation with GSAP – A Split Letter Magic! 🎨✨ #gsap #javascript #beginners
#tutorial 🚀 Day 5: Creating a Hamburger Menu with GSAP #gsap #javascript
#beginners #tutorial profile AWS Promoted

AWS Security LIVE! Stream Practical guidance for security practitioners

Don't miss AWS Security LIVE! Whether you're an AWS newbie or a seasoned pro,
this show has something for everyone with actionable tips, expert advice, and
security knowledge.

Learn More

// Importing the serve function from Deno's standard library import { serve }
from "https://deno.land/std@0.196.0/http/server.ts";

// Function to handle requests async function handler(req: Request):
Promise<Response> { const { pathname, searchParams } = new URL(req.url);

// Handling different routes if (pathname === "/api/greet" && req.method ===
"GET") { const name = searchParams.get("name") || "World"; return new
Response(`Hello, ${name}!`); }

if (pathname === "/api/data" && req.method === "POST") { const body = await
req.json(); return new Response(JSON.stringify({ message: "Data received", data:
body }), { headers: { "Content-Type": "application/json" }, }); }

if (pathname === "/api/data" && req.method === "PUT") { const body = await
req.json(); return new Response(JSON.stringify({ message: "Data updated", data:
body }), { headers: { "Content-Type": "application/json" }, }); }

if (pathname === "/api/data" && req.method === "DELETE") { return new
Response(JSON.stringify({ message: "Data deleted" }), { headers: {
"Content-Type": "application/json" }, }); }

// Default response for unknown routes return new Response("Not Found", {
status: 404 }); }

// Start the HTTP server on port 8000 serve(handler, { port: 8000 });

console.log("Server running on http://localhost:8000");
