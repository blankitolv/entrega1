import { v4 as uuidv4 } from 'uuid';

export class Carrito {
  createCarro(productos) {
    console.log("llegue a createCarro")
    this.id = uuidv4();
    this.products = productos;
    this.quantity = 1;
  }
}