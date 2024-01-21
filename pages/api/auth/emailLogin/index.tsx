const { google } = require('googleapis')
const nodemailer = require('nodemailer')
const { MongoClient, ObjectId } = require("mongodb");

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
        const client = await MongoClient.connect(
            "mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test",
        )
        const db = client.db('vision')
        const collection = db.collection('userProfile')
        try {
            const { email } = req.body
            console.log(email)

            if (!email) {
                res.status(400).json({ msg: 'please enter email' })
            }

            const response: any = await GenerateOTP(email)

            if (response.length == 0) {
                res.status(400).json({ msg: 'Please Try Again' })
            } else {
                let userExist = await collection.findOne({ email: email })
                if (!userExist) {
                    let user = await collection.insertOne({ email: email });
                    res.status(200).json({ msg: 'Otp send successfully', newUser: 'true', otp: response, email, user })
                } else {
                    res.status(200).json({ msg: 'Otp send successfully', newUser: 'false', otp: response, email, userExist })
                }

            }
        } catch (e) {
            console.log(e)
            res.status(400).json({ msg: 'generate otp error' })
        } finally {
            client.close()
        }
    }
}

async function GenerateOTP(email: string) {
    try {
        console.log("into the generate opts")
        var digits = '0123456789'
        var limit = 6
        let OTP = '';
        for (let i = 0; i < limit; i++) {
            OTP += digits[Math.floor(Math.random() * 10)]
        }

        // setting up mail
        const CLIENT_ID =
            "697191071858-btgo2dh9tbau4hjjbqcs8qrdn1j816co.apps.googleusercontent.com";
        const CLEINT_SECRET = "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";
        const REDIRECT_URI = "https://developers.google.com/oauthplayground";
        const REFRESH_TOKEN =
            "1//04V5egrjT55xDCgYIARAAGAQSNwF-L9IrzifkHNpQ_y9v1LoO-6QM50BaELJI6cq1rok6MEPdbeUcVS6TS8TaeU9ufradoP78Uc0";
        const oAuth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLEINT_SECRET,
            REDIRECT_URI
        );
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

        const accessToken = await oAuth2Client.getAccessToken();
        console.log(accessToken)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "data.science@agarwalpackers.com",
                clientId: CLIENT_ID,
                clientSecret: CLEINT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
            tls: { rejectUnauthorized: false },
        });

        console.log("before mailoptions")

        var mailOptions = {
            from: "data.science@agarwalpackers.com",
            cc: 'shivsawant1958@gmail.com',
            to: email,
            subject: "login otp",
            html: OTP
        }

        console.log("before trasporter")

        await transporter.sendMail(mailOptions, function (e: any) {
            if (e) {
                console.log(e)
            } else {
                console.log('otp send successfully')
            }
        })
        return OTP

        // return "sdfsfsf"
    } catch (e) {
        console.log(e)
    }
}