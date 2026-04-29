import "dotenv/config";
import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

async function main() {
  const response = await client.chat.completions.create({
    model: "gemini-2.5-flash-lite",
    messages: [
      {
        role: "user",
        content: "Say hello and tell me your name and what you can do.",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
