import {DatabaseConnection} from "./database-connection";

export class DatabaseInitializer {

    connectToDatabase() {
        return new DatabaseConnection();
    }
}

export const databaseInitializer = new DatabaseInitializer();