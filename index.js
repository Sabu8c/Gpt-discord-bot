require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Events,
  REST,
  Routes,
  SlashCommandBuilder,
} = require("discord.js");
const OpenAI = require("openai");

// === Configuration OpenAI ===
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// === Configuration du bot Discord ===
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const { MessageFlags } = require("discord-api-types/v10");

const SYSTEM_PROMPT = {
  role: "system",
  content: "INSERT PROMPT"   
};

const conversations = {}; // { guildId: [messages] }
const talkMode = new Set(); // guilds où le mode talk est actif

// === Commandes Slash ===
const commands = [
  new SlashCommandBuilder()
    .setName("talk")
    .setDescription("Active la discussion avec le bot."),
  new SlashCommandBuilder()
    .setName("stoptalk")
    .setDescription("Désactive la discussion avec le bot."),
].map((cmd) => cmd.toJSON());

client.once(Events.ClientReady, async () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);

  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
  const applicationId = client.application.id;

  for (const guild of client.guilds.cache.values()) {
    try {
      await rest.put(Routes.applicationGuildCommands(applicationId, guild.id), {
        body: commands,
      });
      console.log(`✅ Commandes enregistrées pour ${guild.name}`);
    } catch (err) {
      console.error(
        `❌ Erreur lors de l'enregistrement des commandes pour ${guild.name}:`,
        err
      );
    }
  }
});

// === Réception des commandes ===
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const guildId = interaction.guildId;
  if (interaction.commandName === "talk") {
    talkMode.add(guildId);
    conversations[guildId] = [SYSTEM_PROMPT];
    await interaction.reply({
      content: "🟢 Le mode discussion est activé !",
      flags: MessageFlags.Ephemeral,
    });
  }

  if (interaction.commandName === "stoptalk") {
    talkMode.delete(guildId);
    delete conversations[guildId];
    await interaction.reply({
      content: "🔴 Le mode discussion est désactivé.",
      flags: MessageFlags.Ephemeral,
    });
  }
});

// === Réponses aux messages ===
client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot || !talkMode.has(message.guildId)) return;

  const guildId = message.guildId;
  const userMessage = { role: "user", content: message.content };
  conversations[guildId] = conversations[guildId] || [SYSTEM_PROMPT];
  conversations[guildId].push(userMessage);

  try {
    const completion = await openai.chat.completions.create({
      //model: "gpt-4o-mini",
      model: "gpt-3.5-turbo",
      messages: conversations[guildId],
      temperature: 0.8,
    });

    const reply = completion.choices[0].message;
    conversations[guildId].push(reply);

    await message.reply(reply.content);
  } catch (error) {
    console.error("❌ Erreur OpenAI:", error);
    await message.reply("Une erreur est survenue en contactant ChatGPT.");
  }
});

client.login(process.env.DISCORD_TOKEN);
