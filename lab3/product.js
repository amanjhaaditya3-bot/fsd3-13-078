const products = [
    {id:1, name:'marker', qty:100, price:15},
    {id:2, name:'duster', qty:50, price:10},
    
]
let nextid = 3;
export const getAllProducts = () => {
    return products;
}