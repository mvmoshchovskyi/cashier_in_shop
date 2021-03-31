"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const router = require('./routes/index');
const PORT = process.env.PORT || 5000;
const app = express_1.default();
app.use(express_1.default.json());
app.use('/api', router);
const start = async () => {
    try {
        // await sequelize.authenticate()
        // await sequelize.sync()
        app.listen(PORT, () => console.log(`server  started on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
};
start();
//# sourceMappingURL=app.js.map