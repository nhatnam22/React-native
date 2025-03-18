const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const db = require('../api/database/connectMogoDB')
const bodyParser = require('body-parser')
const bosyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const crypto = require('crypto')

const app = express()
const port = 8000

app.use(cors({
    origin:'http://192.168.11.8:8081',
    credentials: true
}))

app.listen(port)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bosyParser.json())

db.connect()

const User = require('./models/Users')

const Order = require('../api/models/Order')

app.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already registered." });
        }

        const newUser = new User({ email, name, password });
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");
        await newUser.save();
        sendVerificationEmail(newUser.email, newUser.verificationToken);
        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed." });
    }
});

//send verificationToken
const sendVerificationEmail = async (email, verificationToken) => {
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "nanana2a4e@gmail.com",
            password: "abws xaqh feph hof"
        }
    })
    const mailOptions = {
        from: 'amazon.com',
        to: email,
        subject: "Verification Token",
        text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`
    };
    try {
        await transporter.sendMail(mailOptions)
    } catch (err) { console.log(err) }
}


app.get('/verify/:token', async (res, req) => {
    try {
        const token = req.params.token;
        const user = await User.findOne({ verificationToken: token })
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" })
        }
        user.verified = true;
        user.verificationToken = undefined
        await user.save()
        res.status(200).json({ message: "Verry successfuly" })
    } catch (err) {
        res.status(500).json({
            message: "Email verification failed"
        })
    }
})

const secretKey = crypto.randomBytes(64).toString('hex');

app.post('login', async (res, req) => {
    const { email, password } = req.body
    const response = await User.findbyOne({ email: email })
    if (!response) {
        res.status(404).json(
            { message: "User not found" })
        if (password !== password) {
            res.status(404).json(
                { message: "Password is valid" })
        }
        const token = jwt.sign(user9Name = User_id, secretKey)
        return res.status(200).json({
            token: token,
            message: "login successfuly"
        })




    }

})