
const madeforyouRouter = require('./madeforyou')
const playlistRouter = require('./playlist')
const artistRouter = require('./artist')
const topchartRouter = require('./topchart')
const favouritesongRouter = require('./favouritesong')
const homeRouter = require('./home')
const loginRouter = require('./login')
const signupRouter = require('./singup')
const addmin = require('./addmin')
const present = require('./present')
const songRouter = require('./song')

function route(app) {
    app.use('/madeforyou', madeforyouRouter)
    app.use('/playlist', playlistRouter)
    app.use('/artist', artistRouter)
    app.use('/topchart', topchartRouter)
    app.use('/favouritesong', favouritesongRouter)
    app.use('/login', loginRouter   )
    app.use('/signup', signupRouter)
    app.use('/admin', addmin)
    app.use('/song', songRouter)
    app.use('/', homeRouter)
    app.use('/presentplayed', present)

}

module.exports = route;