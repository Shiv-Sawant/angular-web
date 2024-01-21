import { MongoClient } from "mongodb";

const handler = async (req: any, res: any) => {
    const client = await MongoClient.connect(
        "mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test",
    )
    const db = client.db('vision')
    const collection = db.collection('otpUsers')
    if (req.method === 'POST') {
        try {
            let userData = req.body
            let data = await collection.findOne(userData)
            if (data === null) {
                let userCreate = await collection.insertOne(userData)
                
                res.status(200).json({ msg: 'user inserted', userCreate })
            } else {
                res.status(200).json({ msg: 'user already inserted' })
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({ msg: 'internal server error' })
        } finally {
            client.close()
        }
    }
    if (req.method === 'GET') {
        try {
            let filter = { email: req.query.email }
            let data = await collection.find(filter).toArray()
            console.log(data)
            if (data.length != 0) {
                res.status(200).json({ msg: 'user already register', data })
            } else {
                res.status(200).json({ msg: 'user is not registered', data })
            }
        } catch (e) {
            console.log(e)
        } finally {
            client.close()
        }
    }
}

export default handler