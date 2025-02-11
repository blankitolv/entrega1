import express from 'express'
import {router as productRouter}  from './server/routes/productos.router.js'
import {router as cartRouter}  from './server/routes/carritos.router.js'

export const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productRouter);
app.use('/api/carritos', cartRouter);
