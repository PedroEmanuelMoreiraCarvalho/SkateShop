import { Int32, ObjectId } from "mongodb";
import mongoose from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    _id : ObjectId,
    produto_id: Int32,
    produto_nome: String,
    produto_categorias: Array[String],
    produto_tamanhos: Array[String],
    produto_fotos_urls: Array[String],
    produto_preco: String
})

const Produto = mongoose.models.Produto || mongoose.model("Produto", ProdutoSchema)