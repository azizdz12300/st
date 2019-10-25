const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready',async () => {//TX console.log("Starting..");//TX let g = client.guilds.get("id"); // id server let c = g.channels.get("id");// id channel if(c.type === 'voice') {//TX c.join();//TX setInterval(() => {//TX if(!g.me.voiceChannel) c.join(); }, 1);//Toxic Codes } else {//TX console.log('Failed To Join: \n The Channel Type isn "Listening."') } });



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
