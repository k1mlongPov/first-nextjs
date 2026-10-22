import { ProductProps } from "@/lib/product";

export const ProductCardComponent = (props: ProductProps) => {
  // declare variable
  const image =
    "https://i.pinimg.com/736x/5c/79/a2/5c79a2c0e72f4fba9ecab2fe9b605f74.jpg";
  const name = "Patrick the Greate";

  const desc =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque tempora magni, quisquam aspernatur earum, quas dolore nihil asperiores porro iusto, et numquam optio? Rerum quisquam magni ducimus quia id suscipit.";
  const version = 67;
  return (
    <section>
      <img
        src={props.image}
        alt="patrick"
        className="w-100 h-80 object-cover "
      />
      <h2 className="text-2xl font-bold ">Name : {props.name}</h2>
      <p className="text-sm font-light text-gray-400 ">
        Description: {props.desc}
      </p>
      <h4 className="text-lg font-bold ">
        Version: {props.version < 0 ? 1.0 : props.version}
      </h4>
      <button className="border-amber-400 border-2 cursor-pointer p-5 mt-1.5">
        Add to favorite
      </button>
    </section>
  );
};
