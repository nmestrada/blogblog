const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const db = require('./db/database'); 
const session = require('express-session');
if (process.env.NODE_ENV === 'development') {
    require('./localSecrets'); // this will mutate the process.env object with your secrets.
  }
  

// configure and create our database store
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });
dbStore.sync();

app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

app.use(session({
    secret: 'winGARdium leviOHsa',
    resave: false,
    saveUninitialized: false
  }))
  

app.use(morgan('dev'));

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Any routes or other various middlewares should go here!
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'))
app.use('/auth', require('./auth'))
// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)

//User deserialization / serialization
app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      res.status(404).end()
    } else {
      next()
    }
  })

  passport.serializeUser((user, done) => {
    try {
      done(null, user.id);
    } catch (err) {
      done(err);
    }
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(done);
  });

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const port = 8080 //3000 for heroku
const server = app.listen(port, (err) => {
  if (err) throw err
  console.log('\nHTTP server patiently listening on port', port)
//   db.sync()
//     .then(() => {
//       console.log('\nOh and btw the postgres server is totally connected, too\n')
//     })
});

app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });