// use helpers.getUser(req) to replace req.user
// use helpers.ensureAuthenticated(req) to replace req.isAuthenticated()

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const express = require('express')
const exhbs = require('express-handlebars')
const bodyPaser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('./config/passport')
const middleware = require('./config/middleware')
const helpers = require('./_helpers')
const socket = require('socket.io')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exhbs({ defaultLayout: 'main', helpers: require('./config/handlebars-helpers') }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyPaser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({ secret: 'twittercat', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(middleware.topUsers)
app.use(middleware.setLocals)

const server = app.listen(PORT, () => console.log(`Alphitter is listening on port ${PORT}!`))
const io = socket(server)

let username = ''
let useraccount = ''
let userid = ''
let useravatar = ''
app.use((req, res, next) => {
  if (helpers.getUser(req)) {
    username = helpers.getUser(req).name
    useraccount = helpers.getUser(req).account
    userid = helpers.getUser(req).id
    useravatar = helpers.getUser(req).avatar
  }
  next()
})

const users = [
  {
    userId: '1',
    name: 'carey',
    account: 'xxx'
  },
  {
    userId: '2',
    name: 'lala',
    account: '123'
  }
]
io.on('connection', socket => {
  // const socketId = socket.id

  // server message
  socket.emit('message', {
    message: `Hello, ${username}`,
    users
let onlineUser =[]
io.on('connection', socket => {
      // 在線的使用者，一連線就加進onlineUser陣列裡
      onlineUser.push({
        username: username,
        useraccount: useraccount,
        userid: userid,
        useravatar: useravatar,
      })
      io.emit('onlineUser', onlineUser)

      // server message
      socket.emit('message', `Hello, ${username}`)

      socket.broadcast.emit('message', `${username} join chatroom`)

      // user message
      socket.on('chat', data => {
        let now = new Date()
        let time = now.toLocaleString('zh-TW', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })

        io.emit('chat', {
          message: data,
          name: username,
          time: time
        })
      })

      // listen typing
      socket.on('typing', data => {
        data.name = username
        socket.broadcast.emit('typing', data)
      })

      // user leave room
      socket.on('disconnect', () => {
        //過濾掉離線使用者，並傳值給前端
        onlineUser = onlineUser.filter(function (user, index, array) {
          return user.userid !== userid
        })
        io.emit('onlineUser', onlineUser)
        socket.broadcast.emit('typing', { isExist: false })
        socket.broadcast.emit('message', `${username} left chatroom`)
      })

    })

require ('./routes/index')(app, passport)

module.exports = app