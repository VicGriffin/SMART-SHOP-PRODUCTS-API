export const GetAllProducts = (req, res)=>{
    res.send(`getting all products`)
}
export const GetOneProduct = (req,res) =>{
    res.send(`getting a single product ${req.params.id}`)
}
export const UpdateProduct = (req, res) => {
    res.send(`updating product with id ${req.params.id}`);
}
export const DeleteProduct = (req, res) => {
    res.send(`deleting product with id ${req.params.id}`);
}
export const CreateNewProduct = (req, res) => {
    res.send('creating a new product');
}