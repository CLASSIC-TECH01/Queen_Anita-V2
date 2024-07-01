//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0V4OG1ieGw3VmlPRnpQRmhPMmp1ZmpnM2h5Z3l1d0pXTE9FeXlZTUZsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2x3UmVIWkUzSU1aV3hLUUxVakt5Y3VTQmNDRlZMUnpJT2doNEIvRVYwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TVZ5ZTk4SjJSV0MrNm4zMzFlQzhocUkzd2NUQjlPM2QrbldNcnVxdjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFOVNFWTd0ZERuRWpZWjJQZnRoSzJLTzBYWnFuMFVCUWE0a3pxYS9JRUQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBeEVnM0F4Nm5IbVNuTElPL0FtSGhhSHJyQXBwK1pabTA1bUtUQXE5bHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFUUZVRkR1R1UzUTMySHZFS1k4WGV4YUwxT1Z3d21kcVNKMVNudGFVbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUk1UW9OZngvOUZudEduTE8zY3JQbHNqaWdTR2N5S2JCT0RDNWNyaXJuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pMckd4cTd0RkZpdjN4NG12aldXNjNhb3VYVEZqUzZFc2R3c1Y5UDMxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFqQjNPNld2OE85OEZ1akJMWllYTXliU00wd0Uzd3VpUnVEZkI3V3FqcjM0ZjJJWkdEVDR2YnA2Q0Y2N2M3ajdhTVFsSkN5NHZmeWpCUGdZRTVnaUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IlVXR1YwU0oraDMveFB6Vm0xaENnZS92YXMxeHhYZ2hNVGFNRWxkcTF1blU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9qcUxWeWU0UUpXWFFMbmNOcU1zRGciLCJwaG9uZUlkIjoiMGU1OGI2YjMtYzY4ZC00YjIyLWI3YzEtMDRmZGNlM2Q4ZDg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZmU2pqWHZJa1JPdGt1RURscjV2eVRDdzR5UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUlZzRVFlaGRsZHgwWHQxOTIzN1NXdytCcjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1lFNVZaUUYiLCJtZSI6eyJpZCI6IjI2MDk3NTQwODAwMDo2NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0R3b3N3R0VLREFoclFHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNy9sUUlOdjhzUDVwWll1YUFMWEhKNzI0M2tyZTVFRGFvWDFtTTBJUlVsdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaWxuc1NnK2N5L3FxRGg0UXZCK1BzT2JvakpLUDZzV0dTYUpUeUtzaUM3MWpWdy9EMHhXQnhQMmhGbHYwei9yN2xsSEo2WnhTMkc1NStiempnUy9sQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpaZ0NySllmU0VIQXZhcXV0MFM1dHlFMTdGR1diQ29yTjJzb2RUMm9ib1hlb2pFWllZd1diNllYN1ZVcGtZWXVtb2Q1SmlhOWJWekl3bzRwVUo5b0FBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYwOTc1NDA4MDAwOjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUvNVVDRGIvTEQrYVdXTG1nQzF4eWU5dU41SzN1UkEycUY5WmpOQ0VWSmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3NzExODF9";
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
