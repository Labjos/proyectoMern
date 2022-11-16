"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuration the .env file
dotenv_1.default.config();
// Create Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first route
app.get('/', (req, res) => {
    //Send a Hello
    res.send('Welcome to API resful: Expres + TS +  Jest + Swagger + Mongoose');
});
app.get('/Hello', (req, res) => {
    //Send a Hello
    res.send('Welcome to ROUTE: Hola Caracola!');
});
//execute APP and listen Request 
app.listen(port, () => {
    console.log(`Express Server: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map