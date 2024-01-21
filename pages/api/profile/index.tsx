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
            console.log(req.body)
            console.log(id)
            let profileData = req.body
            const update = { $set: profileData };
            let data = await collection.findOneAndUpdate(query, update, {})
            res.status(200).json({ msg: 'profile data inserted', data })
        } catch (e) {
            res.status(500).json({ msg: 'internal server error' })
        } finally {
            client.close()
        }
    }
}

export default handler