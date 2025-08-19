import { ChromaClient } from "chromadb";

const client = new ChromaClient({
  host: "localhost",   // your server host
  port: 8000,          // your server port
  ssl: false           // true if using HTTPS
});

export default client;
