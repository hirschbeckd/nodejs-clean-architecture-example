import {DatabaseConnection} from "./database-connection";

export class DatabaseInitializer {

    connectToDatabase() {
        return new DatabaseConnection();
    }
}

export const createMongoDBConnection = new DatabaseInitializer().connectToDatabase();