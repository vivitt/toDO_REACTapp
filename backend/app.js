
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo')
dotenv.config();


//const DB_SERVER = "mongodb://localhost:27017"
//const database = "simpleUserDB"
  

app.use('/', express.static('./public'));
app.use(express.urlencoded({ extended: true }))

const tasksRoutes = require('./routes/tasksRoutes')

app.use('/tasks', tasksRoutes);

const portName = 'localhost';
const port = process.env.PORT || 3000;


mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true})
.then(() => {
  console.log("Conected to DB server")
  app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server running on port ${port}...`);
 })
})

.catch((err) => console.log(err));


;
// app.use(express.static("public"))





/*===================== CORS SETUP =============================*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
  })
);
app.set("trust proxy", 1);


/*=================================================================*/



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//////////////////

