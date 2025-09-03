import { Client, Account, ID } from "appwrite";
import config from "../environmentImport/cofig";

export class AuthService {
    client = new Client;
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            console.log("Calling Appwrite with:", { email, password, name });

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login direct if account exists
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error
        }
    }

    // to check if the user is logged in or not 
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService