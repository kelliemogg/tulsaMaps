// const {MongoClient} = require('mongodb');

// async function main() {
//     const mdb = "mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//     const client = new MongoClient(mdb);
//     try {
//         await client.connect();
//         await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     }
//     finally {
//         await client.close();
//     }
// }
// main().catch(console.error);

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };