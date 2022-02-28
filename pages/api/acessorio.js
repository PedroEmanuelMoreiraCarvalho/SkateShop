import connect from "../../utils/database"

export default async function handler(req, res){
    const {db} = await connect()
    const produtos_num = await db.collection("estoque").count({data_type:"produto"})
    const produtos = []
    for(let i=1;i<=produtos_num;i++){
        const response = await db.collection("estoque").findOne({produto_id:i, produto_tipo: "acessorio"})
        response && produtos.push(response)
    }
    
    res.status(200).json(produtos)
}