import { MongoClient, ObjectId } from 'mongodb'


const handler = async (req: any, res: any) => {
    const client = await MongoClient.connect(
        "mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/test",
    )
    const db = client.db('vision')
    const collection = db.collection('demands')
    if (req.method === 'POST') {
        try {
            let body = req.body
            let id = req.query.id
            const deal = await collection.insertOne({ ...body, user: id });
            return res.status(200).json({ msg: 'deal created', deal })
        } catch (e) {
            console.log(e)
            return res.status(500).json({ msg: 'deal is not created' })
        } finally {
            client.close()
        }
    }
    if (req.method === 'GET') {
        try {
            let userId = req.query.id
            let filter = { user: userId }
            const deals = await collection.find(filter).toArray()
            return res.status(200).json(deals)
        } catch (e) {
            return res.status(500).json({ msg: 'please try again' })
        }
    }
    if (req.method === 'PUT') {
        try {
            const id = req.query.id
            const query = { _id: new ObjectId(id) };
            const body = req.body;
            const update = { $set: body };
            let data = await collection.findOneAndUpdate(query, update, {
            });

            return res.status(200).json({ msg: 'update succesfully', status: 200, data })
        } catch (e) {
            return res.status(500).json({ msg: 'please try again' })
        }
    }
    if (req.method === 'DELETE') {
        try {
            const id = req.query.id
            const query = { _id: new ObjectId(id) };
            let result = await collection.findOneAndDelete(query);
            return res.status(200).json({ msg: 'deal deleted successfully', result })

        } catch (e) {
            return res.status(500).json({ msg: 'please try again' })
        }
    }
}

export default handler
