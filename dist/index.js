"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: ['http://localhost:8081', 'http://localhost:4200'], // Allow requests only from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies, if your application uses them
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on 204
    // headers: 'Content-Type, Authorization, Content-Length, X-Requested-With',
};
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)(corsOptions));
app.use(index_1.default);
app.listen(port, () => {
    console.log("Server running on port", port);
});
