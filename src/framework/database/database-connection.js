import {connect, connection} from 'mongoose';

export class DatabaseConnection {

    constructor() {

        connect('mongodb://localhost:27017/test_db',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        const db = connection;
        db.on("error", console.error.bind(console, "DatabaseConnection: connection error: "));
        db.once("open", function () {
            console.log("DatabaseConnection: Connected successfully");
        });
    }

    onConnect(callback) {
        connection.once("open", callback);
    }
}