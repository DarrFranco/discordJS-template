const { Client, GatewayIntentBits, Partials, Guild, WebhookClient, MessageManager } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
})
webhook1 = ' webhook link goes here'
const webbhookClient = new WebhookClient({ url: webhook1})


// reads channel messages , can send messages to channel if conditions met
client.on("messageCreate", async (message) => {
    // 
    if (message.content === 'hello bot') {
        // won't cause a loop
        if (message.author.bot) {
            return
        }
        else {
            message.reply('hello')
        }
    }
});
client.login(' client Log in Key goes here');
