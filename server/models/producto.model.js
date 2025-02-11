// id: Number/String (No se manda desde el body, se autogenera para asegurar que nunca se repitan los ids).
// title: String
// description: String
// code: String
// price: Number
// status: Boolean
// stock: Number
// category: String
// thumbnails: Array de Strings (rutas donde están almacenadas las imágenes del producto).
import { v4 as uuidv4 } from 'uuid';

export class Producto {
  createProduct(producto) {
    console.log(producto)
    const id = uuidv4();
    this.id = id
    this.title = producto.title;
    this.description = producto.description;
    this.code = producto.code;
    this.price = producto.price;
    this.status = true;
    this.stock = producto.stock;
    this.category = producto.category;
    this.thumbnail = producto.thumbnail;
  }
}