import  { MongoClient }  from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;
const dbName = 'computerStore';

async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
    return 'done.';
}

function getDB(){
    if(db){
        return db;
    }
    return null;
}


export {getDB} ;

export default main;