module.exports.config = {
    name: 'casino',
    version: '0.0.1',
    hasPermssion: 0,
    credits: 'tdunguwu',
    description: 'Play casino games',
    commandCategory: 'game',
    usages: '',
    cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {

    const request = require('request');
    const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream, fs } = require('fs-extra');
    const { threadID, messageID, senderID } = event;
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    const choose = args[0];
    const kqua = args[1];
    const tiencuoc = args[2];
    if (!existsSync(__dirname + '/cache/casio.jpg')) {
        request('https://raw.githubusercontent.com/tdunguwu/key/main/roulette.jpg').pipe(createWriteStream(__dirname + '/cache/casio.jpg'));
    }
    if (!choose) {
        var msg = {body: `[ CASINO ]\n=> 1.Over/Under
=> 2.Even/Odd
=> 3.Lottery
=> 4.Difference
=> 5.Slot
Reply to this message to see instructions on how to play`, attachment : [
            require('fs').createReadStream(__dirname + '/cache/casio.jpg')
        ]}
        return api.sendMessage(msg, threadID, (error, info) => {

            global.client.handleReply.push({
                type: 'choosee',
                name: this.config.name,
                author: senderID,
                messageID: info.messageID
            })
        })
    }
    const z = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    const dap_an = y - z;
    const x = Math.floor(Math.random() * 100);
    const typ2 = ['even', 'odd'];
    const random2 = typ2[Math.floor(Math.random() * typ2.length)];
    var even = [0, 2, 4, 6, 8];
    var odd = [1, 3, 5, 7, 9];
    if (random2 == 'even') {
        var defl_number2 = even[Math.floor(Math.random() * even.length)];
    }
    if (random2 == 'odd') {
        var defl_number2 = odd[Math.floor(Math.random() * odd.length)];
    }
    const typ = ['over', 'under'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    var over = [4,5,6,7,8,9,10];
    var under = [11,12,13,14,15,16,17];
    if (random == 'over') {
        var defl_number = over[Math.floor(Math.random() * over.length)];
    }
    if (random == 'under') {
        var defl_number = under[Math.floor(Math.random() * under.length)];
    }
    if (choose == 'over' || choose == 'under') {
        if (kqua < 50 || isNaN(kqua)) return api.sendMessage('Your bet is not valid or is less than $50!!!', threadID, messageID);
        if (moneyUser < kqua) return api.sendMessage(𝚈𝚘𝚞𝚛 𝚋𝚊𝚕𝚊𝚗𝚌𝚎 𝚒𝚜 𝚗𝚘𝚝 𝚎𝚗𝚘𝚞𝚐𝚑 ${𝚔𝚚𝚞𝚊}$ 𝚝𝚘 𝚙𝚕𝚊𝚢, threadID, messageID);
        if (choose == random) {
            await Currencies.increaseMoney(senderID, parseInt(kqua * 2));
            return api.sendMessage(𝚈𝚘𝚞 𝚠𝚒𝚗! 𝙱𝚘𝚝 𝚛𝚘𝚕𝚕𝚎𝚍 ${𝚛𝚊𝚗𝚍𝚘𝚖} ${𝚍𝚎𝚏𝚕_𝚗𝚞𝚖𝚋𝚎𝚛} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚛𝚎𝚌𝚎𝚒𝚟𝚎 ${𝚔𝚚𝚞𝚊 * 2},event.threadID, event.messageID)
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(kqua ));
            return api.sendMessage(𝚈𝚘𝚞 𝚕𝚘𝚜𝚎! 𝙱𝚘𝚝 𝚛𝚘𝚕𝚕𝚎𝚍 ${𝚛𝚊𝚗𝚍𝚘𝚖} ${𝚍𝚎𝚏𝚕_𝚗𝚞𝚖𝚋𝚎𝚛} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚕𝚘𝚜𝚎 ${𝚔𝚚𝚞𝚊},event.threadID, event.messageID)}
    }
    if (choose == 'odd' || choose == 'even') {
        if (kqua < 50 || isNaN(kqua)) return api.sendMessage('Your bet is not valid or is less than $50!!!', threadID, messageID);
        if (moneyUser < kqua) return api.sendMessage(𝚈𝚘𝚞𝚛 𝚋𝚊𝚕𝚊𝚗𝚌𝚎 𝚒𝚜 𝚗𝚘𝚝 𝚎𝚗𝚘𝚞𝚐𝚑 ${𝚔𝚚𝚞𝚊}$ 𝚝𝚘 𝚙𝚕𝚊𝚢, threadID, messageID);
        if (choose == random2) {
            await Currencies.increaseMoney(senderID, parseInt(kqua * 2 ));
            return api.sendMessage(𝚈𝚘𝚞 𝚠𝚒𝚗! 𝙱𝚘𝚝 𝚛𝚘𝚕𝚕𝚎𝚍 ${𝚛𝚊𝚗𝚍𝚘𝚖2} ${𝚍𝚎𝚏𝚕_𝚗𝚞𝚖𝚋𝚎𝚛2} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚛𝚎𝚌𝚎𝚒𝚟𝚎 ${𝚔𝚚𝚞𝚊 * 2},event.threadID, event.messageID)
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(kqua ));
            return api.sendMessage(𝚈𝚘𝚞 𝚕𝚘𝚜𝚎! 𝙱𝚘𝚝 𝚛𝚘𝚕𝚕𝚎𝚍 ${𝚛𝚊𝚗𝚍𝚘𝚖2} ${𝚍𝚎𝚏𝚕_𝚗𝚞𝚖𝚋𝚎𝚛2} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚕𝚘𝚜𝚎 𝚊𝚕𝚕 𝚢𝚘𝚞𝚛 𝚋𝚎𝚝 ${𝚔𝚚𝚞𝚊},event.threadID, event.messageID)}
    }
    if (choose == 'lottery' || choose == 'lo' || choose == 'de') {
        if (kqua < 50 || isNaN(kqua)) return api.sendMessage('Your bet is not valid or is less than $50!!!', threadID, messageID);
        if (moneyUser < kqua) return api.sendMessage(𝚈𝚘𝚞𝚛 𝚋𝚊𝚕𝚊𝚗𝚌𝚎 𝚒𝚜 𝚗𝚘𝚝 𝚎𝚗𝚘𝚞𝚐𝚑 ${𝚔𝚚𝚞𝚊}$ 𝚝𝚘 𝚙𝚕𝚊𝚢, threadID, messageID);
        api.sendMessage(𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚕𝚘𝚝𝚝𝚎𝚛𝚢 𝚛𝚎𝚜𝚞𝚕𝚝 𝚒𝚗 𝚊 𝚏𝚎𝚠 𝚖𝚒𝚗𝚞𝚝𝚎𝚜 𝚑𝚎𝚑𝚎, event.threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 120 * 1000));
            api.unsendMessage(info.messageID)
            if(kqua == x){
                await Currencies.increaseMoney(senderID, parseInt(kqua * 2));
                return api.sendMessage(𝚈𝚘𝚞 𝚠𝚒𝚗 𝚋𝚎𝚌𝚊𝚞𝚜𝚎 𝚢𝚘𝚞 𝚌𝚑𝚘𝚜𝚎 ${𝚊𝚛𝚐𝚜[1]} 𝚊𝚗𝚍 𝚝𝚘𝚍𝚊𝚢'𝚜 𝚕𝚘𝚝𝚝𝚎𝚛𝚢 𝚛𝚎𝚜𝚞𝚕𝚝 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚒𝚜 ${𝚡}. 𝙻𝚞𝚌𝚔 𝚒𝚜 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚜𝚒𝚍𝚎 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚛𝚎𝚌𝚎𝚒𝚟𝚎 ${𝚔𝚚𝚞𝚊 * 2} 𝚑𝚎𝚑𝚎, threadID, messageID)
            } else {
                await Currencies.decreaseMoney(senderID, parseInt(kqua ));
                return api.sendMessage(𝚈𝚘𝚞 𝚕𝚘𝚜𝚎 𝚋𝚎𝚌𝚊𝚞𝚜𝚎 𝚢𝚘𝚞 𝚌𝚑𝚘𝚜𝚎 ${𝚊𝚛𝚐𝚜[1]} 𝚊𝚗𝚍 𝚝𝚘𝚍𝚊𝚢'𝚜 𝚕𝚘𝚝𝚝𝚎𝚛𝚢 𝚛𝚎𝚜𝚞𝚕𝚝 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚋𝚘𝚝 𝚒𝚜 ${𝚡}. 𝙻𝚞𝚌𝚔 𝚏𝚘𝚛𝚐𝚘𝚝 𝚢𝚘𝚞 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚕𝚘𝚜𝚎 ${𝚔𝚚𝚞𝚊}, threadID, messageID)
            }
        })
    }
    if (choose == 'difference' || choose == 'Difference' || choose == 'Hiệu') {
        if(isNaN(kqua)){return api.sendMessage('Invalid input', threadID, messageID)}
        if(kqua == dap_an){
            await Currencies.increaseMoney(senderID, parseInt(tiencuoc * 2));
            return api.sendMessage(𝚈𝚘𝚞 𝚠𝚒𝚗! 𝚈𝚘𝚞𝚛 𝚌𝚑𝚘𝚒𝚌𝚎: ${𝚔𝚚𝚞𝚊}\𝚗𝙵𝚒𝚛𝚜𝚝 𝚗𝚞𝚖𝚋𝚎𝚛 𝚋𝚘𝚝 𝚌𝚑𝚘𝚜𝚎: ${𝚣}\𝚗𝚂𝚎𝚌𝚘𝚗𝚍 𝚗𝚞𝚖𝚋𝚎𝚛 𝚋𝚘𝚝 𝚌𝚑𝚘𝚜𝚎: ${𝚢}\𝚗𝙳𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚌𝚎 𝚒𝚜 ${𝚍𝚊𝚙_𝚊𝚗} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚛𝚎𝚌𝚎𝚒𝚟𝚎 ${𝚝𝚒𝚎𝚗𝚌𝚞𝚘𝚌 * 2},threadID, messageID)
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(tiencuoc ));
            return api.sendMessage(𝚈𝚘𝚞 𝚕𝚘𝚜𝚎! 𝚈𝚘𝚞𝚛 𝚌𝚑𝚘𝚒𝚌𝚎: ${𝚔𝚚𝚞𝚊}\𝚗𝙵𝚒𝚛𝚜𝚝 𝚗𝚞𝚖𝚋𝚎𝚛 𝚋𝚘𝚝 𝚌𝚑𝚘𝚜𝚎: ${𝚣}\𝚗𝚂𝚎𝚌𝚘𝚗𝚍 𝚗𝚞𝚖𝚋𝚎𝚛 𝚋𝚘𝚝 𝚌𝚑𝚘𝚜𝚎: ${𝚢}\𝚗𝙳𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚌𝚎 𝚒𝚜 ${𝚍𝚊𝚙_𝚊𝚗} 𝚊𝚗𝚍 𝚢𝚘𝚞 𝚕𝚘𝚜𝚎 ${𝚝𝚒𝚎𝚗𝚌𝚞𝚘𝚌},threadID, messageID)
        }
    }
    if (choose == 'slot') {
        const slotItems = ['🍇', '🍉', '🍊', '🍏', '🥭', '🍓', '🍒', '🍌', '🥝', '🥑', '🌽'];
        var number = [], win = false;
        for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
        if (number[0] == number[1] && number[1] == number[2]) {
            moneyBet *= 9;
            win = true;
        }
        else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
            moneyBet *= 2;
            win = true;
        }
        switch (win) {
            case true: {
                api.sendMessage(🎰 ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[0]]} | ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[1]]} | ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[2]]} 🎰\𝚗𝚈𝚘𝚞 𝚠𝚒𝚗!, event.threadID, event.messageID);
                break;
            }
            case false: {
                api.sendMessage(🎰 » ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[0]]} | ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[1]]} | ${𝚜𝚕𝚘𝚝𝙸𝚝𝚎𝚖𝚜[𝚗𝚞𝚖𝚋𝚎𝚛[2]]} « 🎰\𝚗𝚈𝚘𝚞 𝚕𝚘𝚜𝚎!, event.threadID, event.messageID);
                break;
            }
        }
    }
}

module.exports.handleReply = async function ({
    args, event, Users, api, handleReply, Currencies
}) {
    const { threadID, messageID } = event;
    var { author } = handleReply;
    if (event.senderID != author) return api.sendMessage('You are not allowed to reply to this message', event.threadID, event.messageID);
    switch (handleReply.type) {
        case 'choosee': {
            switch (event.body) {
                case '1': {
                    return api.sendMessage(𝙹𝚞𝚜𝚝 𝚞𝚜𝚎 ${𝚐𝚕𝚘𝚋𝚊𝚕.𝚌𝚘𝚗𝚏𝚒𝚐.𝙿𝚁𝙴𝙵𝙸𝚇}𝚌𝚊𝚜𝚒𝚗𝚘 [ 𝚘𝚟𝚎𝚛 𝙾𝚁 𝚞𝚗𝚍𝚎𝚛 ], threadID, messageID )
                }
                case '2': {
                    return api.sendMessage(𝙹𝚞𝚜𝚝 𝚞𝚜𝚎 ${𝚐𝚕𝚘𝚋𝚊𝚕.𝚌𝚘𝚗𝚏𝚒𝚐.𝙿𝚁𝙴𝙵𝙸𝚇}𝚌𝚊𝚜𝚒𝚗𝚘 [ 𝚎𝚟𝚎𝚗 𝙾𝚁 𝚘𝚍𝚍 ], threadID, messageID )
                }
                case '3': {
                    return api.sendMessage(𝙹𝚞𝚜𝚝 𝚞𝚜𝚎 ${𝚐𝚕𝚘𝚋𝚊𝚕.𝚌𝚘𝚗𝚏𝚒𝚐.𝙿𝚁𝙴𝙵𝙸𝚇}𝚌𝚊𝚜𝚒𝚗𝚘 [ 𝚕𝚘𝚝𝚝𝚎𝚛𝚢 𝙾𝚛 𝚕𝚘 𝙾𝚛 𝚍𝚎 ] [ 𝚈𝚘𝚞𝚛 𝚝𝚛𝚞𝚜𝚝𝚎𝚍 𝚗𝚞𝚖𝚋𝚎𝚛 ], threadID, messageID )
                }
                case '4': {
                    return api.sendMessage(𝙹𝚞𝚜𝚝 𝚞𝚜𝚎 ${𝚐𝚕𝚘𝚋𝚊𝚕.𝚌𝚘𝚗𝚏𝚒𝚐.𝙿𝚁𝙴𝙵𝙸𝚇}𝚌𝚊𝚜𝚒𝚗𝚘 [ 𝚍𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚌𝚎 𝙾𝚛 𝙳𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚌𝚎 𝙾𝚛 𝙷𝚒ệ𝚞 ] [ 𝚈𝚘𝚞𝚛 𝚝𝚛𝚞𝚜𝚝𝚎𝚍 𝚗𝚞𝚖𝚋𝚎𝚛 ], event.threadID, event.messageID )
                }
                case '5': {
                    return api.sendMessage(𝙹𝚞𝚜𝚝 𝚞𝚜𝚎 ${𝚐𝚕𝚘𝚋𝚊𝚕.𝚌𝚘𝚗𝚏𝚒𝚐.𝙿𝚁𝙴𝙵𝙸𝚇}𝚌𝚊𝚜𝚒𝚗𝚘 [ 𝚂𝚕𝚘𝚝 ], event.threadID, event.messageID )}
            }
        }
    }
}
`
