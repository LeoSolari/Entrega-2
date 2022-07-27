"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const anon = "anonimo";
// Configurando el archivo .env
dotenv_1.default.config();
// Creando la APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Definiendo Rutas
app.get('/', (req, res) => {
    res.send({ data: { 'message': 'Goodbye, world!' } });
});
app.get('/hello', (req, res) => {
    res.send({ data: { 'message': `hola ${anon}` } });
});
app.post('/hello', (req, res) => {
    res.send({ data: { 'message': `hola ${anon}` } });
});
// Ejecutar App y escuchar al Puerto
app.listen(port, () => {
    console.log(`Express corriendo en: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map