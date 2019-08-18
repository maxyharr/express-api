"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello, mang');
});
app.get('/boogers', (req, res) => {
    res.send('These boogers are blue');
});
app.get('/somethingelse', (req, res) => {
    res.send({ my: 'my', data: 'data' });
});
app.listen(port, () => console.log(`Example API listening on port ${port}`));
//# sourceMappingURL=index.js.map