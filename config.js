//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZleHMzditzVEpqOU1IZTFSZmFPSjJTbGw3aEJaVHFyQk1QYkhDTFUzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlA4K2dRbEhFTDZQSkViaEFaYUNoMFBDRXNqY2JZbFIveFdwVU82NkcwQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSkVyNjdmSHNWS1g4c0NLYUl2U0ZmN09OMzMxQzlVZFBFQzRUYU9idTNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkY29wT3VTQzAra0k0SVZmT1pPcDBRbVoxR0hOR21LdEF3L2tET1RxUjNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHcDF0WjJ5V3N6UDZ0MVVwbEZBMzc3SFN2RmZtSFVkd1AyRDBVR0hGRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis3cDB1dVYwNHhiWmZTbW1FekMvdVFLN0R3UG16ZGdaL0JIdzdRdVArVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlXeUt5bTJLOVc0c0ZZNGpVQ0d3M3NSQUowWTFaT0tCU2t1dzFwVzBYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnBodmMrdy9NNGRxdytiMG4vUmQwTjU5VWJHNWRLSkg4RkZrZnZVRHp4ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZuaHlwSTY0K2tzZ0JvR0NmMThKZi9CYkR1VEhhREhNeTZuR1VDem0zTG1ZWVI0SU56RktJNlo0QWcxV2VXMzlONkh5TG5lclR1N0piRFFMTnFuMGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJJV3N6cFgza096aml2VytOcUdVNlJMY1NQTERCRUhNbVJnbGdGb203V3dBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIXzlNSkJJLVJQTzJYVEZQcXF6UmNBIiwicGhvbmVJZCI6IjBlNGMyODU0LWZkZjYtNGIxMS05NzI0LTE5OTFiYTIyNDk2ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvLzcxVGMzc3BNNEs0TVRRM2NVbEdpdW1tK1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM083NktiU1lHOXNTUm4rNjRsQisvUGRPbFpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkY0WlE5RFJDIiwibWUiOnsiaWQiOiIyMzQ5MTEzNjMwNzgyOjM1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcVZ1SWtHRVBYUjhiTUdHQklnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRTFVLWG9HNVNKSXlPSGRQQjRQcDE2QmVJRjRKZXRRVlJCOWVyaGhHczN3PSIsImFjY291bnRTaWduYXR1cmUiOiJGd2lmZzM4TDlWN0F2MTkxVUpQdkFKcDE5alZSK1RTS2ZDU3VadzdSSWhKQ1FoR0ZnOWlWakM0UFREcVQ1ejR1M0xHMkxNK2laM3c1NFRVM3NSemZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOE9EZ0EzZFZLOFVSK0RYRUJ3d2JIUWthc2NDSlFDaVhueTJFNGY2TzhFZ3R4dThjS1VQQVRsL2kySk1NYUxkZVpobmNPeVQ2MmNLQTc3aWpIclhjaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTEzNjMwNzgyOjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVDMUNsNkJ1VWlTTWpoM1R3ZUQ2ZGVnWGlCZUNYclVGVVFmWHE0WVJyTjgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0MjkzNzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHdNIn0=";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "2348171139637,2347047885159";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349113630782";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/72acd097e69dc6c8aaa7b.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "all",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ï Â𝖒 Ã𝖉é 𝕾𝖆𝖒🗣️🤍",
  author: process.env.PACK_AUTHER || "Ï Â𝖒 Ã𝖉é 𝕾𝖆𝖒🗣️🤍",
  packname: process.env.PACK_NAME || "Ï Â𝖒 Ã𝖉é 𝕾𝖆𝖒🗣️🤍",
  botname: process.env.BOT_NAME || "Ï Â𝖒 Ã𝖉é 𝕾𝖆𝖒🗣️🤍",
  ownername: process.env.OWNER_NAME || "Ï Â𝖒 Ã𝖉é 𝕾𝖆𝖒🗣️🤍",
  errorChat: process.env.ERROR_CHAT || "An Error Occurred While Fetching your file",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
