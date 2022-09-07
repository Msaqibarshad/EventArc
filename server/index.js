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
const BeforeCustom = require("./modals/beforeCustom");
const customvaluemodal = require("./modals/customizedsetupvalues")
// const usersignin = require("./modals/userdigninModal");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var JWT_SECRET= "ewqeqeeqeqeqeeewe"

app.post(
  "/api/birthdaycustomizedsetup",
  async (req, res) => {
    console.log(req.body);
    const {
      curtainvalue,
      caketablevalue,
      dinntablevalue,
      cakevalue,
      baloonvalue

    } = req.body;


    await customvaluemodal.create({
      curtainvalue:curtainvalue,
            caketablevalue:caketablevalue,
            dinntablevalue:dinntablevalue,
            cakevalue:cakevalue,
            baloonvalue:baloonvalue,
    });

    res.send({ success: "succcessfully enetered" });
  }
);
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
  "/api/beforecustom",
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

    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await BeforeCustom.create({
      name: name,
      number: number,
      email: email,
      address: address,
      date: date,
      time: time,

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
//  api birthday for dashboard
app.post('/api/dashboardbirthday' , async (req, res) => {
  try {
      const details = await Birthday.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
//  api poo for dashboard

app.post('/api/dashboardpool' , async (req, res) => {
  try {
      const details = await Pool.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
//  api party for dashboard


app.post('/api/dashboardparty' , async (req, res) => {
  try {
      const details = await Party.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//  api meeting for dashboard

app.post('/api/dashboardmeeting' , async (req, res) => {
  try {
      const details = await Meeting.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//  api wedding for dashboard

app.post('/api/dashboardweeding' , async (req, res) => {
  try {
      const details = await Wedding.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//  api photo for dashboard


app.post('/api/dashboardphoto' , async (req, res) => {
  try {
      const details = await Photo.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
app.post('/api/dashboardcustom' , async (req, res) => {
  try {
      const details = await BeforeCustom.find({ email: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})




//  api Birthday+Pool for dashboard

app.post('/api/dashboardBirthdayPool' , async (req, res) => {
  try {
      const details = await HybridFirst.find({ personemail: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
//  api Birthday+Photo for dashboard

app.post('/api/dashboardBirthdayPhoto' , async (req, res) => {
  try {
      const details = await HybridSecond.find({ personemail: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
//  api Pool+Photo for dashboard

app.post('/api/dashboardPoolPhoto' , async (req, res) => {
  try {
      const details = await HybridThird.find({ personemail: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//  api Birth+ Pool+Photo for dashboard

app.post('/api/dashboardBirthdayPoolPhoto' , async (req, res) => {
  try {
      const details = await HybridFourth.find({ personemail: req.body.useremailfordashbaord });
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//admin dashobaord api calling

app.post('/api/admindashboardbirthday' , async (req, res) => {
  try {
      const details = await Birthday.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardpool' , async (req, res) => {
  try {
      const details = await Pool.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardwedding' , async (req, res) => {
  try {
      const details = await Wedding.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardphoto' , async (req, res) => {
  try {
      const details = await Photo.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardparty' , async (req, res) => {
  try {
      const details = await Party.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardmeeting' , async (req, res) => {
  try {
      const details = await Meeting.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardcustom' , async (req, res) => {
  try {
      const details = await BeforeCustom.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// 1

app.post('/api/admindashboardbirthdaypool' , async (req, res) => {
  try {
      const details = await HybridFirst.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardbirthdayphoto' , async (req, res) => {
  try {
      const details = await HybridSecond.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardpoolphoto' , async (req, res) => {
  try {
      const details = await HybridThird.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.post('/api/admindashboardbirthdaypoolphoto' , async (req, res) => {
  try {
      const details = await HybridFourth.find();
      res.json(details)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//delete function api

app.delete(
  "/api/deletebirthday/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let birthday = await Birthday.findById(req.params.id);
      if (!birthday) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      birthday = await Birthday.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletepool/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let pool = await Pool.findById(req.params.id);
      if (!pool) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      pool = await Pool.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletewedding/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let wedding = await Wedding.findById(req.params.id);
      if (!wedding) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      wedding = await Wedding.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletephoto/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let photo = await Photo.findById(req.params.id);
      if (!photo) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      photo = await Photo.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


app.delete(
  "/api/deleteparty/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let party = await Party.findById(req.params.id);
      if (!party) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      party = await Party.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


app.delete(
  "/api/deletemeeting/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let meeting = await Meeting.findById(req.params.id);
      if (!meeting) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      meeting = await Meeting.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletebirthpool/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let birthpool = await HybridFirst.findById(req.params.id);
      if (!birthpool) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      birthpool = await HybridFirst.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


app.delete(
  "/api/deletebirthphoto/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let birthphoto = await HybridSecond.findById(req.params.id);
      if (!birthphoto) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      birthphoto = await HybridFirst.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletepoolphoto/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let poolphoto = await HybridThird.findById(req.params.id);
      if (!poolphoto) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      poolphoto = await HybridThird.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletebirthpoolphoto/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let birthpoolphoto = await HybridFourth.findById(req.params.id);
      if (!birthpoolphoto) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      birthpoolphoto = await HybridFourth.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

app.delete(
  "/api/deletebeforecustom/:id",

  async (req, res) => {
    try {
      // Find the note to be delete and delete it
      let beforecustom = await BeforeCustom.findById(req.params.id);
      if (!beforecustom) {
        return res
          .status(404)
          .json({ success: true, message: "B order not found" });
      }

      beforecustom = await BeforeCustom.findByIdAndDelete(req.params.id);
      res.json({ Success: "B order  has been deleted"});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



connection(username, password);
app.listen(port, () => console.log(`EventArc app listening on port ${port}!`));