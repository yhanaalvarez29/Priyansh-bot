module.exports.config = {
\tname: 'banking',
\tversion: '1.0.0',
\tcredits: 'HungCho & Khanh Milo',
\tdescription: '',
\tusages: '',
\tcommandCategory: 'game',
\tcooldowns: 0,
\tdependencies: {
\t\t'fs-extra': ''
\t}
};

module.exports.onLoad = function () {
\tconst fs = global.nodemodule['fs-extra'];

\tif (!fs.existsSync(__dirname + '/cache/bill.json')) {
\t\tconst requestList = [];
\t\tfs.writeFileSync(__dirname + '/cache/bill.json', JSON.stringify(requestList));
\t}
};

module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
\tconst fs = global.nodemodule['fs-extra'];
\tconst dirFile = __dirname + '/cache/bill.json';

\tvar getList = fs.readFileSync(dirFile);
\tvar getData = JSON.parse(getList);

\tif (handleReply.author != event.senderID) return;
\tvar data = await Currencies.getData(handleReply.author);
\tvar exp = data.exp;
\tvar money = data.money;
\tvar d = new Date();
\tvar date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
\tvar time = d.getHours() + ':' + d.getMinutes();

\tswitch (handleReply.type) {
\t\tcase 'banking': {
"t"t\tswitch (event.body) {
"t"t\t\tcase '1': {
"t"t"t"t\treturn api.sendMessage(
"t"t"t"t\t\t'You can reply with the amount of money you want to convert to exp! 10 money = 1 exp.',
"t"t"t"t\t\tevent.threadID, (error, info) => {
"t"t"t"t"t"t\tglobal.client.handleReply.push({
"t"t"t"t"t"t\t\tname: this.config.name,
"t"t"t"t"t"t\t\tmessageID: info.messageID,
"t"t"t"t"t"t\t\tauthor: event.senderID,
"t"t"t"t"t"t\t\ttype: 'money'
"t"t"t"t"t"t\t});
"t"t"t"t\t\t}, event.messageID
"t"t"t"t\t);
"t"t\t\t}
"t"t\t\tcase '2': {
"t"t"t"t\treturn api.sendMessage(
"t"t"t"t\t\t'You can reply with the amount of exp you want to convert to money! 5 exp = 1 money.',
"t"t"t"t\t\tevent.threadID, (error, info) => {
"t"t"t"t"t"t\tglobal.client.handleReply.push({
"t"t"t"t"t"t\t\tname: this.config.name,
"t"t"t"t"t"t\t\tmessageID: info.messageID,
"t"t"t"t"t"t\t\tauthor: event.senderID,
"t"t"t"t"t"t\t\ttype: 'exp'
"t"t"t"t"t"t\t});
"t"t"t"t\t\t}, event.messageID
"t"t"t"t\t);
"t"t\t\t}
"t"t\t\tdefault:
"t"t"t"t\tbreak;
"t"t\t}
"t"t\treturn;
\t\t}
\t\tcase 'exp': {
"t"t\tvar content = event.body;
"t"t\tif (content > exp) api.sendMessage('You do not have enough exp, please interact more.', event.threadID, event.messageID);
"t"t\telse {
"t"t\t\tawait Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
"t"t\t\tvar exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
"t"t\t\tawait Currencies.setData(handleReply.author, { exp });
"t"t\t\tvar msg = 💸𝚃𝚛𝚊𝚗𝚜𝚊𝚌𝚝𝚒𝚘𝚗 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕!\𝚗𝚃𝚒𝚖𝚎: ${𝚝𝚒𝚖𝚎} - ${𝚍𝚊𝚝𝚎}\𝚗𝙳𝚎𝚝𝚊𝚒𝚕𝚜: 𝙴𝚡𝚌𝚑𝚊𝚗𝚐𝚎𝚍 ${𝚌𝚘𝚗𝚝𝚎𝚗𝚝} 𝚎𝚡𝚙 𝚏𝚘𝚛 ${𝚌𝚘𝚗𝚝𝚎𝚗𝚝 / 5} 𝚖𝚘𝚗𝚎𝚢.;
"t"t\t\tapi.sendMessage(msg, handleReply.author);
"t"t\t\tconst suggest = msg;
"t"t\t\tgetData.push(suggest);
"t"t\t\tapi.sendMessage('Your transaction has been saved in the system!', event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)), event.messageID);
"t"t\t}
"t"t\tbreak;
\t\t}
\t\tcase 'money': {
"t"t\tvar content = event.body;
"t"t\tif (content > money) api.sendMessage('You do not have enough money, please earn more!', event.threadID, event.messageID);
"t"t\telse {
"t"t\t\tawait Currencies.increaseMoney(event.senderID, parseInt('-' + content));
"t"t\t\tvar exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
"t"t\t\tawait Currencies.setData(handleReply.author, { exp });
"t"t\t\tvar msg = 💸𝚃𝚛𝚊𝚗𝚜𝚊𝚌𝚝𝚒𝚘𝚗 𝚜𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕!\𝚗𝚃𝚒𝚖𝚎: ${𝚝𝚒𝚖𝚎} - ${𝚍𝚊𝚝𝚎}\𝚗𝙳𝚎𝚝𝚊𝚒𝚕𝚜: 𝙴𝚡𝚌𝚑𝚊𝚗𝚐𝚎𝚍 ${𝚌𝚘𝚗𝚝𝚎𝚗𝚝} 𝚖𝚘𝚗𝚎𝚢 𝚏𝚘𝚛 ${𝚌𝚘𝚗𝚝𝚎𝚗𝚝 / 10} 𝚎𝚡𝚙.;
"t"t\t\tapi.sendMessage(msg, handleReply.author);
"t"t\t\tconst suggest = msg;
"t"t\t\tgetData.push(suggest);
"t"t\t\tapi.sendMessage('Your transaction has been saved in the system!', event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)), event.messageID);
"t"t\t}
"t"t\tbreak;
\t\t}
\t}
};

module.exports.run = async function({ api, event, args }) {
\tconst fs = global.nodemodule['fs-extra'];
\tconst dirFile = __dirname + '/cache/bill.json';

\tvar getList = fs.readFileSync(dirFile);
\tvar getData = JSON.parse(getList);

\tif (!args[0]) return api.sendMessage(
\t\t'◆━━◆ 🏛 BANKING ◆━━◆' +
\t\t'\n» Please enter your choice «' +
\t\t'\n
1. Convert money to exp ❄️.' +
\t\t'\n2. Convert exp to money 💦.' +
\t\t'\n3. Update later ⚒.' +
\t\t'\n
» Please reply to this message and choose by number «',
\t\tevent.threadID, (error, info) => {
"t"t\tclient.handleReply.push({
"t"t\t\tname: this.config.name,
"t"t\t\tmessageID: info.messageID,
"t"t\t\tauthor: event.senderID,
"t"t\t\ttype: 'banking'
"t"t\t});
\t\t}, event.messageID
\t);

\tif (args[0] == 'check') {
\t\tvar workList = '';
\t\tgetData.map(item => workList += \𝚗 ${𝚒𝚝𝚎𝚖});
\t\treturn api.sendMessage(${𝚠𝚘𝚛𝚔𝙻𝚒𝚜𝚝}, event.threadID, event.messageID);
\t}
} 
`

