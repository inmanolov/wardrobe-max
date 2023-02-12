import mongoose from "mongoose";

const connection = {};

const connect = async () => {
    if(connection.isConnected) {
        console.log('Already connected');
        return;
    }
    if(mongoose.connections.lenght > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1) {
            console.log('Use previous conection');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log('New conection');
    connection.isConnected = db.connections[0].readyState;
}

const disconnect = async () => {
    if(connection.isConnected) {
        await mongoose.disconnect();
        connection.isConnected = false;
        console.log('Disconected');
    } else {
        console.log('Not disconected');
    }
}

const db = { connect, disconnect };
export default db;