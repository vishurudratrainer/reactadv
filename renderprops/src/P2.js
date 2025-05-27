import ProductBase from "./ProductBase";

const P2 = () => {
  return (
    <div>
      <h1>Products from P1</h1>
      <ProductBase
        render={(products) => (
          <div>
            {products.map((product) => (
              <div>
                {" "}
                <h1>{product.id}</h1>
                <h1>{product.title}</h1>
                <h1>{product.description}</h1>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default P2;
