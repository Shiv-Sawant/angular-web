import { MongoClient, ObjectId } from "mongodb";

const handler = async (req: any, res: any) => {
    const client = await MongoClient.connect(
        "mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test",
    )
    const db = client.db('vision')
    const collection = db.collection('userProfile')
    if (req.method === 'PUT') {
        try {
            const id = req.query.id;
            const query = { _id: new ObjectId(id) };
            const body = req.body;
            const update = { $set: body };
            let updateEnrol = await collection.findOneAndUpdate(query, update, {
            })
            res.status(200).json({ msg: 'enrolled successfull', updateEnrol })
        } catch (e) {
            console.log(e)
            res.status(200).json({ msg: 'user not found' })
        }
    }
    if (req.method === 'GET') {
        try {
            // console.log(req.query.email,JSON.parse(req.query.email))
            let data = await collection.findOne({ email: req.query.email })
            res.status(200).json({ success: true, data })
        } catch (e) {
            res.status(500).json({ msg: 'internal server error' })
            console.log(e)
        }
    }
}

export default handler