import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-4xl m-8">Furniture in Unique Styles</h1>
        <p className="text-2xl m-8">We have different range of furniture</p>
      </div>

      <div className="flex gap-4 m-8">
        <Button className="btn">Sofa</Button>
        <Button className="btn">Chairs</Button>
        <Button className="btn">Tables</Button>
      </div>

      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5 justify-center items-center m-5">
        <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
          <img src="/1.jpg" alt="Leather Chair" className="w-4/5" />
          <p>
            <strong>Leather Chair</strong>
          </p>
          <p className="price">$50.00</p>
          <Button className="btn !bg-green-800">Add to Cart</Button>
        </div>

        <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
          <img src="/2.jpg" alt="Modern Chair" className="w-4/5" />
          <p>
            <strong>Modern Chair</strong>
          </p>
          <p className="price">$90.00</p>
          <Button className="btn !bg-green-800">Add to Cart</Button>
        </div>

        <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
          <img src="/3.jpg" alt="Castle Ray Chair" className="w-4/5" />
          <p>
            <strong>Castle Ray Chair</strong>
          </p>
          <p className="price">$80.00</p>
          <Button className="btn !bg-green-800">Add to Cart</Button>
        </div>

        <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
          <img src="/4.jpg" alt="Leatherette Chair" className="w-4/5" />
          <p>
            <strong>Leatherette Chair</strong>
          </p>
          <p className="price">$100.00</p>
          <Button className="btn !bg-green-800">Add to Cart</Button>
        </div>

        <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
          <img src="/5.jpg" alt="Two Legged Chair" className="w-4/5" />

          <p>
            <strong>Two Legged Chair</strong>
          </p>
          <p className="price">$120.00</p>
          <Button className="btn !bg-green-800">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
