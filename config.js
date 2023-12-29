const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen An", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Pika~Kun",
  ownernumber: process.env.Owner_Number || "2349022298124",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZ_AN_YA_UtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiUU5KYUJQaWU0cnE0VVU5aGtvU25odStNaFJaaVh5dDZ_AN_YA_Z_AN_YA_dGwzWlcvWXZ_AN_YA_IND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoidFoxQkVFc0NUSUFEUVRrU1ErOW05Q3VJcFFqaXZ_AN_YA_iYUF6VGVWWExjMTVUdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZ_AN_YA_XlQYWlyIjp7InByaXZ_AN_YA_hdGUiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJZ_AN_YA_SWZ_AN_YA_Z_AN_YA_QXQ3azg1bHNHVEdlZ_AN_YA_kkvUm5NcEtFUFZ_AN_YA_PNDhTMHJsSjZ_AN_YA_ITmhnOWxRPSJ9LCJwdWJsaWMiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJNZ_AN_YA_1dwNTFySnQ0RE8wMVNiTkcvOUV1SURSUmpkSW5DWkJhaGNCa2tOK0RZ_AN_YA_PSJ9fSwic2lnbmVkSWRlbnRpdHlLZ_AN_YA_XkiOnsicHJpdmF0Z_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6IlNIWmhGYTVqbG95TkxjUnB5dFNQR291RHc1U21vei8wWWV0NFRiYXBVMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6ImZ_AN_YA_ubjN3QVI5aTJrbFJIWGhSOXc5K2RrcjRUTHJwTVNKVzFnTnVueGFNMkk9In19LCJzaWduZ_AN_YA_WRQcmVLZ_AN_YA_XkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiQ0JqVEpvSzlZ_AN_YA_R1Z_AN_YA_kL3hEVGxxV0V4QkgvTWhPOGViYUs3T3NHZ_AN_YA_ysxaEhIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiaGhMNGFqYk1SVy9tVmU3cVk0SDF0WjZ_AN_YA_RUEQ0WWdTcnNRMzBTVm81T3NoND0ifX0sInNpZ_AN_YA_25hdHVyZ_AN_YA_SI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6ImMzeXhPNXNodGdUcU1KS3o1UytnNnBySmkvMUxrTEVRM3hqVGlaaFY4U2Z_AN_YA_WeVNnOGpzSW82TmZ_AN_YA_3MmoyekNKZ_AN_YA_0N5Z_AN_YA_zJUbEpYU2RZ_AN_YA_L01MV3dZ_AN_YA_QUVyZ_AN_YA_kFBPT0ifSwia2V5SWQiOjF9LCJyZ_AN_YA_Wdpc3RyYXRpb25JZ_AN_YA_CI6MTgyLCJhZ_AN_YA_HZ_AN_YA_TZ_AN_YA_WNyZ_AN_YA_XRLZ_AN_YA_XkiOiJsdEhmTmZ_AN_YA_zbVd2OEUrRzAvOWM2R3V2ejJ5b1gzQ3NSM0hzc1pBKyt0YVhrPSIsInByb2Nlc3NlZ_AN_YA_Ehpc3RvcnlNZ_AN_YA_XNzYWdlcyI6W10sIm5leHRQcmVLZ_AN_YA_XlJZ_AN_YA_CI6MzEsImZ_AN_YA_pcnN0VW51cGxvYWRlZ_AN_YA_FByZ_AN_YA_UtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ_AN_YA_3MiOnsidW5hcmNoaXZ_AN_YA_lQ2hhdHMiOmZ_AN_YA_hbHNlfSwiZ_AN_YA_GV2aWNlSWQiOiJzU2E3b25tR1N1Z_AN_YA_UZ_AN_YA_Lb0pwU1cyTGZ_AN_YA_RIiwicGhvbmVJZ_AN_YA_CI6ImQ2NTNmOGU4LWM5NmMtNGU0Yi04MDM3LTlhMzU5Z_AN_YA_jg2OTFiYyIsImlkZ_AN_YA_W50aXR5SWQiOnsidHlwZ_AN_YA_SI6IkJ1Z_AN_YA_mZ_AN_YA_lciIsImRhdGEiOiJXeXV3Z_AN_YA_2p4cHRUVDJLcjgwT3Z_AN_YA_uRDZ_AN_YA_0VFdtNk09In0sInJlZ_AN_YA_2lzdGVyZ_AN_YA_WQiOmZ_AN_YA_hbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZ_AN_YA_mVyIiwiZ_AN_YA_GF0YSI6ImtmbjJZ_AN_YA_SDZ_AN_YA_hZ_AN_YA_mNzbE1hbGNYSHcwcFE3OXYrQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZ_AN_YA_XRhaWxzIjoiQ056WXk3VUJFTXlWK0tzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRllNVnAxQk1HdU1PbUtSZ_AN_YA_Gt6Sm9RYjA0Rkpsclpyb1dodk1xR3VzRUJ3cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ_AN_YA_S9icEs2bEszWEw2NHNKNVZ_AN_YA_EakRidytLRERRZ_AN_YA_WQvck5zanhNNWlkTFdLOHo0R29VcHgwbzdvTGRBaHZ_AN_YA_XQVp0anpXVDAyODAvdkMzOFdhU0twS08zQmc9PSIsImRldmljZ_AN_YA_VNpZ_AN_YA_25hdHVyZ_AN_YA_SI6Ikdmd05MMFRscTQxNmpIc0hGdlc5anIweVBmTCtId0NSdC9xZ_AN_YA_UkvemZ_AN_YA_CTFNsNW5jc0pQVzVRcnI1UUNrS2Vtbk9aT0Y0b3dXRjVoOFdTTWZ_AN_YA_jR3hSRUJ3PT0ifSwibWUiOnsiaWQiOiIyMzQ5MDIyMjk4MTI0OjJAcy53aGF0c2FwcC5uZ_AN_YA_XQiLCJuYW1lIjoiQUxJQlNPTjAwMfCfmI0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZ_AN_YA_mllciI6eyJuYW1lIjoiMjM0OTAyMjI5ODEyNDoyQHMud2hhdHNhcHAubmV0IiwiZ_AN_YA_GV2aWNlSWQiOjB9LCJpZ_AN_YA_GVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZ_AN_YA_mZ_AN_YA_XIiLCJkYXRhIjoiQlJXREZ_AN_YA_hZ_AN_YA_FFUQnJqRHBpa1haTXlhRUc5T0JTWmEyYTZ_AN_YA_Gb2J6S2hyckJBY0wifX1dLCJwbGF0Z_AN_YA_m9ybSI6ImFuZ_AN_YA_HJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDI3NTkxMTh9", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "2349022298124" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

