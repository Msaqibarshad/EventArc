const dotenv = require("dotenv");
const connection = require("./database/db.js");
const express = require("express");
const app = express();
dotenv.config();
const port = 8080;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const Birthday = require("./modals/birthdayModal");
const Pool = require("./modals/poolModal");
const Wedding = require("./modals/weddingModal");
const Photo = require("./modals/photoModal");
const Party = require("./modals/partyModal");
const Meeting = require("./modals/meetingModal");
const HybridFirst = require("./modals/hybridFirstModal");
const HybridSecond = require("./modals/hybridSecondModal");
const HybridThird = require("./modals/hybridThirdModal");
const HybridFourth = require("./modals/hybridFourthModal");
const Contact = require("./modals/contactModal");
const usersignup = require("./modals/usersignupModal");
// const usersignin = require("./modals/userdigninModal");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var JWT_SECRET= "ewqeqeeqeqeqeeewe"
app.post(
  "/api/birthday",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      firework,
      decoration,
      dj,
      buffet,
      m_pic,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Birthday.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      firework: firework,
      decoration: decoration,
      dj: dj,
      buffet: buffet,
      m_pic: m_pic,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post(
  "/api/pool",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      parking,
      refreshment,
      camera,
      swimaccessories,
      snack_cool,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Pool.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      parking: parking,
      refreshment: refreshment,
      camera: camera,
      swimaccessories: swimaccessories,
      snack_cool: snack_cool,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post(
  "/api/wedding",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      bitems,
      ditems,
      stagechtype,
      dcolor,
      parking,
      dj,
      fireworks,
      otherdec,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Wedding.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      parking: parking,
      bitems: bitems,
      ditems: ditems,
      stagechtype: stagechtype,
      dcolor: dcolor,
      dj: dj,
      fireworks: fireworks,
      otherdec: otherdec,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post(
  "/api/photo",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      water,
      clicks,
      snack,
      drink,
      edited,
      indoor,
      outdoor,
      both,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Photo.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      water: water,
      clicks: clicks,
      snack: snack,
      drink: drink,
      edited: edited,
      indoor: indoor,
      outdoor: outdoor,
      both: both,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post(
  "/api/party",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      pizza,
      burger,
      parking,
      snack_cool,
      dj,
      camera,
      decoration,
      pool,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Party.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      pizza: pizza,
      burger: burger,
      parking: parking,
      snack_cool: snack_cool,
      dj: dj,
      camera: camera,
      decoration: decoration,
      pool: pool,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post(
  "/api/meeting",
  [body("email", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      name,
      number,
      email,
      address,
      date,
      time,
      persons,
      water,
      drink,
      projector,
      camera,
      stationary,
      table,
      whiteboard,
      refreshment,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await Meeting.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,
      persons: persons,
      water: water,
      drink: drink,
      projector: projector,
      stationary: stationary,
      table: table,
      camera: camera,
      whiteboard: whiteboard,
      refreshment: refreshment,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
app.post("/api/hybrid_first", async (req, res) => {
  console.log(req.body);
  const {
    personname,
    personemail,
    personaddress,
    personphone,
    date,
    time,
    personvalue,
    personpizza,
    personburger,
    personcooldrink,
    personfirewokrs,
    persondecoration,
    pool,
    swim,
    refresh,
    parking,
    dj,
    bottles,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await HybridFirst.create({
    personname: personname,
    personemail: personemail,
    personaddress: personaddress,

    personphone: personphone,
    date: date,
    time: time,
    personvalue: personvalue,
    personpizza: personpizza,
    personburger: personburger,
    personcooldrink: personcooldrink,
    personfirewokrs: personfirewokrs,
    persondecoration: persondecoration,
    pool: pool,
    swim: swim,
    refresh: refresh,
    parking: parking,
    dj: dj,
    bottles: bottles,
  });

  res.send({ success: "succcessfully enetered" });
});
app.post("/api/hybrid_second", async (req, res) => {
  console.log(req.body);
  const {
    personname,
    personemail,
    personaddress,
    personphone,
    date,
    time,
    personvalue,
    personpizza,
    personburger,
    personcooldrink,
    personfirewokrs,
    persondecoration,
    clicks,
    editedphoto,
    outdoorclicks,
    editedvideo,
    randomclicls,
    printed,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await HybridSecond.create({
    personname: personname,
    personemail: personemail,
    personaddress: personaddress,
    personphone: personphone,
    date: date,
    time: time,
    personvalue: personvalue,
    personpizza: personpizza,
    personburger: personburger,
    personcooldrink: personcooldrink,
    personfirewokrs: personfirewokrs,
    persondecoration: persondecoration,
    clicks: clicks,
    editedphoto: editedphoto,
    outdoorclicks: outdoorclicks,
    editedvideo: editedvideo,
    randomclicls: randomclicls,
    printed: printed,
  });

  res.send({ success: "succcessfully enetered" });
});
app.post("/api/hybrid_third", async (req, res) => {
  console.log(req.body);
  const {
    personname,
    personemail,
    personaddress,
    personphone,
    date,
    time,
    clicks,
    editedphoto,
    outdoorclicks,
    editedvideo,
    randomclicls,
    printed,
    pool,
    swim,
    refresh,
    parking,
    dj,
    bottles,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await HybridThird.create({
    personname: personname,
    personemail: personemail,
    personaddress: personaddress,
    personphone: personphone,
    date: date,
    time: time,
    clicks: clicks,
    editedphoto: editedphoto,
    outdoorclicks: outdoorclicks,
    editedvideo: editedvideo,
    randomclicls: randomclicls,
    printed: printed,
    pool: pool,
    swim: swim,
    refresh: refresh,
    parking: parking,
    dj: dj,
    bottles: bottles,
  });

  res.send({ success: "succcessfully enetered" });
});
app.post("/api/hybrid_fourth", async (req, res) => {
  console.log(req.body);
  const {
    personname,
    personemail,
    personaddress,
    personphone,
    date,
    time,
    personvalue,
    personpizza,
    personburger,
    personcooldrink,
    personfirewokrs,
    persondecoration,
    pool,
    swim,
    refresh,
    parking,
    dj,
    bottles,
    clicks,
    editedphoto,
    outdoorclicks,
    editedvideo,
    randomclicls,
    printed,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await HybridFourth.create({
    personname: personname,
    personemail: personemail,
    personaddress: personaddress,
    personphone: personphone,
    date: date,
    time: time,
    personvalue: personvalue,
    personpizza: personpizza,
    personburger: personburger,
    personcooldrink: personcooldrink,
    personfirewokrs: personfirewokrs,
    persondecoration: persondecoration,
    pool: pool,
    swim: swim,
    refresh: refresh,
    parking: parking,
    dj: dj,
    bottles: bottles,
    clicks: clicks,
    editedphoto: editedphoto,
    outdoorclicks: outdoorclicks,
    editedvideo: editedvideo,
    randomclicls: randomclicls,
    printed: printed,
  });

  res.send({ success: "succcessfully enetered" });
});
app.post("/api/contact", async (req, res) => {
  console.log(req.body);
  const { contactpname, contactpphone, contactpemail, contactpmessge } =
    req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  await Contact.create({
    contactpname: contactpname,
    contactpphone: contactpphone,
    contactpemail: contactpemail,
    contactpmessge: contactpmessge,
  });

  res.send({ success: "succcessfully enetered" });
});

app.post(
  "/api/usersignup",
  [body("signupuseremail", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const {
      signupusernamefirst,
      signupusernamelast,
      signupuserphone,
      signupuseremail,
      signupuserpassword,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
try{

  let user = await usersignup.findOne({ signupuseremail: signupuseremail});
  if (user) {
    return res.status(400).json({ error: "Sorry a user with this email already exists" })
  }
  const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(signupuserpassword, salt);
  user = await usersignup.create({
    signupusernamefirst: signupusernamefirst,
    signupusernamelast: signupusernamelast,
    signupuserphone: signupuserphone,
    signupuseremail: signupuseremail,
    signupuserpassword: secPass,
  });
  const data = {
    user: {
      email: user.signupuseremail
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);


  // res.json(user)
  res.json({ authtoken, success: "succcessfully enetered" })

  // res.send({ success: "succcessfully enetered" });
}
catch(error){
  console.log(error);
}
  }
);

app.post(
  "/api/usersignin",
  [body("signinuseremail", "please enter a valid email address ").isEmail()],
  async (req, res) => {
    console.log(req.body);
    const { signinuseremail, signinuserpassword } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await usersignup.findOne({ signupuseremail: signinuseremail});
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct Email" });
      }

      const passwordCompare = await bcrypt.compare(signinuserpassword, user.signupuserpassword);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please try to login with correct password" });
      }

      const data = {
        user: {
          email: user.signupuseremail
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({  authtoken ,  success: "succcessfully login"})

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

  }
);

app.post('/api/dashboardbirthday' , async (req, res) => {
  try {
      const birthdaydetails = await Birthday.find({ email: req.body.useremailfordashbaord });
      res.json(birthdaydetails)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})



connection(username, password);
app.listen(port, () => console.log(`EventArc app listening on port ${port}!`));