import Button from "../../components/Button";
import ChairCard from "./components/Card";
import { chairs } from "./data";

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
        {chairs.map((chair, index) => {
          return <ChairCard key={index} {...chair} />;
        })}
      </div>
    </>
  );
};

export default Home;
