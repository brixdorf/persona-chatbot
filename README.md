# Persona Chatbot

A persona-based AI chatbot that lets you have real conversations with three Scaler personalities — Kshitij Mishra, Abhimanyu Saxena, and Anshuman Singh — each with a distinct voice, style, and perspective.

## Live Demo

https://brixdorf-persona-chatbot.vercel.app/

## Tech Stack

- **Frontend** — HTML, CSS, JavaScript (deployed on Vercel)
- **Backend** — Node.js HTTP server (deployed on Render)
- **LLM** — Google Gemini via OpenAI-compatible API

## Project Structure

```
persona-chatbot/
├── index.html          # Frontend chat UI
├── server.js           # Backend API server
├── prompts.js          # System prompts for all three personas
├── .env                # Private API key (never committed)
├── .env.example        # Safe template for API key
├── images/             # Persona profile pictures and favicon
├── prompts.md          # System prompts with annotations
└── reflection.md       # Project reflection
```

## Setup Instructions

### Prerequisites

- Node.js installed
- A Gemini API key from [Google AI Studio](https://aistudio.google.com)

### Steps

**1. Clone the repository**

```
git clone git@github.com:brixdorf/persona-chatbot.git
cd persona-chatbot
```

**2. Install dependencies**

```
npm install
```

**3. Create your environment file**

```
cp .env.example .env
```

**4. Add your Gemini API key to .env**

```
GEMINI_API_KEY=your_key_here
```

**5. Start the backend server**

```
node server.js
```

**6. Open index.html in your browser**

Note: The live app uses a Render free tier backend. The first response may take up to 30 seconds if the server has been idle.

## Features

- Three distinct AI personas with unique voices and communication styles
- Persona switcher that resets the conversation on switch
- Suggestion chips for quick-start questions per persona
- Typing indicator while waiting for a response
- Graceful error handling
- Dark mode UI with Satoshi font
- Mobile responsive
