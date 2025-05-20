# 💬 GPT-FlirtyBot — Your Fun & Friendly Discord Companion

GPT-FlirtyBot is a playful, outgoing AI chatbot built using Discord.js and OpenAI's API. Designed to bring laughter, charm, and companionship to your Discord server, she flirts, jokes, compliments, and just loves hanging out with you and your friends.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E=18.x-brightgreen.svg)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blueviolet)

---

## 🌟 Features

- 💁‍♀️ **Flirty AI Personality** powered by GPT
- 💬 **Slash Commands** to toggle conversation mode
- 📌 **Guild-based Memory**: Conversations are separated by server
- 🧠 **OpenAI GPT-4o-mini Integration**
- 🔒 **Environment variable support for secure tokens**

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/gpt-flirtybot.git
cd gpt-flirtybot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file in the root folder and add the following:

```
DISCORD_TOKEN=your_discord_bot_token
OPENAI_API_KEY=your_openai_api_key
```

> 🔐 **Keep this file secret!** Never share your tokens publicly.

### 4. Run the Bot

```bash
node index.js
```

---

## 🛠 Commands

| Command     | Description                             |
|-------------|-----------------------------------------|
| `/talk`     | Starts the AI chat mode for your server |
| `/stoptalk` | Stops the AI chat mode                  |

---

## 🤖 Personality

The bot acts as a vibrant, extroverted girl who is:
- Friendly, a bit mischievous 😏
- Full of compliments and jokes 😂
- Expressive with lots of emojis ✨
- Chill, fun, and always ready to chat 💕

This personality is defined using a **system prompt** passed to OpenAI's API.

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [discord.js v14](https://discord.js.org/)
- [OpenAI API](https://platform.openai.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🧪 Example Interaction

```plaintext
User: Salut toi, tu fais quoi ?
Bot: Coucou toi 😘 ! Je traîne ici, prête à papoter~ Qu’est-ce que tu racontes de beau ? 💖
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Contributing

Feel free to open issues or submit pull requests to enhance the bot's features or personality!

---

Made with ❤️ and GPT magic.
