import "dotenv/config";
import { OpenAI } from "openai";
import http from "http";
import { kshitijPrompt, abhimanyuPrompt, anshumanPrompt } from "./prompts.js";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const prompts = {
  kshitij: kshitijPrompt,
  abhimanyu: abhimanyuPrompt,
  anshuman: anshumanPrompt,
};

const server = http.createServer(async (req, res) => {
  // Allow requests from any origin (needed for frontend to talk to backend)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/chat") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { persona, messages } = JSON.parse(body);

        // Validate persona
        if (!prompts[persona]) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid persona" }));
          return;
        }

        const response = await client.chat.completions.create({
          model: "gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: prompts[persona],
            },
            ...messages,
          ],
        });

        const reply = response.choices[0].message.content;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ reply }));
      } catch (error) {
        console.error(error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ error: "Something went wrong. Please try again." }),
        );
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
