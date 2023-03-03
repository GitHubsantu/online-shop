import ProductList from "./Components/Product";

function App() {
  const productItem=[
    {
        title:'Book',
        price:'$5',
        desc:'A Book of 100 Pages.'
    },
    {
        title:'Pencil',
        price:'$3',
        desc:'Extra Dark Pencil.'
    },
    {
        title:'Pen',
        price:'$4',
        desc:'Black 0.5mm Ball pen.'
    }
]
  return (
    <div className="App">
      <ProductList title={productItem[0].title} price={productItem[0].price} desc={productItem[0].desc}/>
      <ProductList title={productItem[1].title} price={productItem[1].price} desc={productItem[1].desc}/>
      <ProductList title={productItem[2].title} price={productItem[2].price} desc={productItem[2].desc}/>
    </div>
  );
}

export default App;
