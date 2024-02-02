const express=require('express')
const app=express('express')
const port=3002
const User = require('./models/user');
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoose = require('mongoose');

// Example MongoDB Atlas connection string
// mongoose.connect('mongodb+srv://anumghulam38:anum11111989@cluster0.mongodb.net/users', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true });





app.get('/',(req,res)=>{
    
    res.render('pages/login',{error:null})
})

app.post('/login', async (req, res) => {
    const { name, email, phone, address } = req.body;

    // Create a new user using the User model
    const newUser = new User({
        name,
        email,
    });

    // Save the user to the database
    try {
        await newUser.save();
        res.send(newUser)
        
    } catch (error) {
        console.error(error);
        res.send('Error saving user to the database.');
    }
});

//     async function storedata(username, email) {
//         try {
//             await client.connect();
//             const db = client.db("code-girls");

//             // Insert the user information into the 'user' collection
//             await db.collection('user').insertOne({ username, email });
//             const user = await db.collection('user').findOne({ username, email });
//             res.render('pages/welcome',{user});
//         } finally {
//             await client.close();
//         }
//     }

//     storedata(username, email).catch(console.log);
// });
// app.get('/edit/:username', async (req, res) => {
//     const username = req.params.username;

//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         const db = client.db("code-girls");

//         const user = await db.collection('user').findOne({ username });
//         console.log('User:', user);

//         res.render('pages/edit', { user });
//     } finally {
//         await client.close();
//     }
// });

// app.post('/edit/:username', async (req, res) => {
//     const username = req.params.username;
//     const { newUsername, newEmail } = req.body;

//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         const db = client.db("code-girls");

//         await db.collection('user').updateOne({ username }, { $set: { username: newUsername, email: newEmail } });

//         // Redirect to the welcome page after editing
//         res.send('informationn edited succesfully');
        
//     } finally {
//         await client.close();
//     }
// });
// app.get('/delete/:username', async (req, res) => {
//     const username = req.params.username;

//     try {
//         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();

//         const db = client.db("code-girls");
//         await db.collection('user').deleteOne({ username });

//         res.send('Information deleted successfully');
//     } finally {
//         await client.close();
//     }
// });

app.listen(port,()=>{
console.log(`app listening at the ${port}`)
})


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("code-girls").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// async function findAndShowData() {
//     try {
//       // Connect to the MongoDB server
//       await client.connect();
  
//       // Specify the database and collection
//       const database = client.db('code-girls');
//       const collection = database.collection('user');
  
//       // Find documents in the collection
//       const documents = await collection.find({}).toArray();
  
//       // Display the documents in the console
//       console.log('Documents found:');
//       console.log(documents);
//     } finally {
//       // Close the MongoDB connection
//       await client.close();
//     }
//   }
//   findAndShowData();