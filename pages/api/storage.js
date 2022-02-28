import connect from "../../utils/database"

export default async function handler(req, res){
    const {db} = await connect()
    const produtos_num = await db.collection("estoque").count({data_type:"produto"})

    const produto_id = produtos_num+1
    const produto_nome = "SHAPE MARFIM CISCO BRAZA 8.0"
    const produto_categorias = ["shape","marfim"]
    const produto_tamanho = ["8.0","8.25"]
    const produto_fotos = ["https://cd.shoppub.com.br/mkd/media/cache/37/e5/37e523a3f22add36404ab00f6888d96c.jpg",
"https://cd.shoppub.com.br/mkd/media/cache/37/e5/37e523a3f22add36404ab00f6888d96c.jpg"]
    const produto_preco = "139.90"
    const produto_tipo = "skate"
    const data_type = "produto"

    let json={
        produto_id: produto_id,
        produto_nome: produto_nome,
        produto_categorias: produto_categorias,
        produto_tamanhos: produto_tamanho,
        produto_fotos_urls: produto_fotos,
        produto_preco: produto_preco,
        produto_tipo: produto_tipo,
        data_type: data_type
    }

    const produtos = []
    for(let i=1;i<=produtos_num;i++){
        const response = await db.collection("estoque").findOne({produto_id:i})
        produtos.push(response) 
    }

    //db.collection("estoque").insertOne(json)
    res.status(200).json(produtos)
}