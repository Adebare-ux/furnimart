import Button from "../../../components/Button";

function ChairCard({ image, alt, title, price }) {
  return (
    <div className="shadow-md flex flex-col items-center text-center w-4/5 m-2.5">
      <img src={image} alt={alt || "Chair"} className="w-4/5" />
      <p>
        <strong>{title}</strong>
      </p>
      <p className="price">${price}</p>
      <Button className="btn !bg-green-800">Add to Cart</Button>
    </div>
  );
}

export default ChairCard;
