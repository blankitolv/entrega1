import { Router } from "express";
import { cartManager } from "../../cartManager.js"
import { Producto } from "../models/producto.model.js";

export const router = Router();

router.get("/", (req, res) => {
  res.status(200);
  res.json(cartManager.getAllCarritos());
});
router.post("/",(req,res)=> {
  const productos = req.body;
  if (productos.length == 0) {
    res.status(204).send();
    return
  }
  cartManager.createCarrito(productos)
  res.status(200).send();
})
router.get("/:cid",(req,res)=> {
  const { cid } = req.params;
  const carrito = cartManager.getById(cid)
  res.status(200).json(carrito);
})

// router.get("/:pid", (req, res) => {
//   const { pid } = req.params;
//   if (pid != undefined && pid != 0 && pid != null) {
//     res.status(200);
//     res.json(productManager.getById(Number(pid)));
//   } else {
//     res.status(400).send();
//   }
// });
// router.post("/", (req, res) => {
//   const r = req.body;
//   productManager.createProduct(r);
//   res.status(201).send();

//   // productManager.createProduct(raw_product)
//   // if (pid != undefined && pid != 0 && pid != null) {
//   //   res.status(200);
//   //   res.json(productManager.getById(Number(pid)));
//   // } else {
//   //   res.status(400).send();
//   // }
// });
// router.put("/:id", (req, res) => {
//   const r = req.body;
//   const { id } = req.params;
//   r.id = id;
//   productManager.putProduct(r);
//   res.status(200).send();
// });
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   productManager.deleteProduct(id);
//   res.status(200).send();
// });
