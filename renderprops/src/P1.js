import ProductBase from "./ProductBase";

const P1 = () => {
  return (
    <div>
      <h1>Products from P1</h1>
      <ProductBase
        render={(products) => (
          <ul>
            {products.map((product) => (
              <li>{JSON.stringify(product)}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
};

export default P1
