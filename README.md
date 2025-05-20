# 💬 Gpt-discord-bot — A Customizable Conversational Discord Bot

Gpt-discord-bot is a flexible, AI-powered chatbot for Discord that lets you define your own personality and conversation style using a custom system prompt. Built with Discord.js and OpenAI’s API, it enables natural, context-aware interactions in your servers.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E=18.x-brightgreen.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blueviolet)

---

## 🌟 Features

- 💬 **Conversational AI** powered by OpenAI's GPT-4o-mini
- 🛠️ **Customizable Personality** via editable system prompt
- 📌 **Server-Based Context Memory**
- ✅ **Slash Commands** to enable or disable chatbot mode
- 🔒 **Secure Configuration** using environment variables

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gpt-chatbot.git
cd gpt-chatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Add your credentials to a `.env` file in the root folder:

```
DISCORD_TOKEN=your_discord_bot_token
OPENAI_API_KEY=your_openai_api_key
```

> 🔐 Keep this file private. Never commit it to version control.

### 4. Customize the System Prompt

Open the bot’s source file and modify the `SYSTEM_PROMPT` variable to define your bot's personality and behavior:

```js
const SYSTEM_PROMPT = {
  role: "system",
  content: "You are a friendly and helpful assistant designed to chat with users in a relaxed and engaging way.",
};
```

> 🎭 Make it anything you want — a formal assistant, a gamer buddy, a sci-fi robot, or something else entirely!

### 5. Run the Bot

```bash
node index.js
```

---

## 🛠 Slash Commands

| Command     | Description                             |
|-------------|-----------------------------------------|
| `/talk`     | Activates chat mode in your server      |
| `/stoptalk` | Deactivates chat mode                   |

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [discord.js v14](https://discord.js.org/)
- [OpenAI API](https://platform.openai.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 💡 Example Use Case

```plaintext
User: Hey, can you help me brainstorm ideas?
Bot: Absolutely! What kind of project are you working on? 😊
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome! Whether it's supporting persistent memory, multi-user threads, or logging, feel free to build on this foundation.

---

Made with 🧠 + ❤️ using OpenAI & Discord.js
