import fs from "fs"
import fsp from "fs/promises"
// import {Producto} from "../server/models/producto.model";
import { Producto } from "./server/models/producto.model.js";
class ProductManager {
  constructor() {
    this.filename = "productosDB.json";
    this.productDB = [];
    fsp.access(this.filename)
      .then(() => {
        return fsp.readFile(this.filename, "utf8");
      })
      .then((data) => {
        this.productDB = JSON.parse(data);
      })
      .catch((err) => {
        return fsp.writeFile(this.filename, JSON.stringify(this.productDB));
      });
  }
  getAllProducts() {
    return this.productDB;
  }
  getById(id){
    return this.productDB.find(prod => prod.id == id)
  }
  save() {
    fsp.writeFile(this.filename, JSON.stringify(this.productDB));
  }
  createProduct(prod) {
    const p = new Producto();
    console.log(prod)
    p.createProduct(prod);
    this.productDB.push(p);
    this.save();
  }
  putProduct(newProd){
    // const old = this.productDB.find(pro => pro.id == newProd.id)
    const oldProdIndex = this.productDB.findIndex(prod => prod.id == newProd.id)
    console.log(newProd)
    console.log(oldProdIndex)
    Object.keys(newProd).forEach(eachKey => {
      if (eachKey == "id") return;
      this.productDB[oldProdIndex][eachKey] = newProd[eachKey];
    }) 
    this.save();
  }
  deleteProduct(id) {
    const allProds = this.productDB.filter(pr => pr.id != id);
    this.productDB = allProds;
    this.save();
  }
}

export const productManager = new ProductManager();