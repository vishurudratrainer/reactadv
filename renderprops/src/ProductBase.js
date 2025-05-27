const products = [
  { id: 1, title: "Lux", description: "Soap" },
  { id: 2, title: "Colgate", description: "Toothpaste" },
  { id: 3, title: "Dabur", description: "Honey" },
];


const ProductBase =({render})=>{
    return(<div>{render(products)}</div>)
}


export default ProductBase