// import { Client, Account } from 'appwrite';
//
//
//
// const client = new Client();
//
// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('660abc51b839f8c83c1a');
//
// const account = new Account(client);
// export default client;
//
//
// // export  class AuthService {
// //     client = new Client();
// //     account;
// //
// //     constructor() {
// //         this.client
// //             .setEndpoint('https://cloud.appwrite.io/v1')
// //             .setProject('660abc51b839f8c83c1a');
// //         this.account = new Account(this.client);
// //     }
// //     async create(email, password, name) {
// //         try {
// //             const userAcc = await this.account.create(email, password, name);
// //             if(userAcc) {
// //                 return this.login({email, password});
// //             } else {
// //                 return userAcc;
// //             }
// //         }
// //         catch (error) {
// //             throw error;
// //         }
// //     }
// //     async login(email, password) {
// //         try {
// //             return await this.account.createSession(email, password);
// //         }
// //         catch (error) {
// //             throw error;
// //         }
// //     }
// //     async getCurrentUser() {
// //         try {
// //             return await this.account.get();
// //         }
// //         catch (error) {
// //             console.log("Appwrite service :: getCurrentUser :: error => ", error);
// //         }
// //         return null;
// //     }
// //     async logout() {
// //         try {
// //             return await this.account.deleteSession();
// //         }
// //         catch (error) {
// //             console.log("Appwrite service :: logout :: error => ", error);
// //         }
// //     }
// // }
// //
// // const AuthServices = new AuthService();
// // export default AuthServices;
//
