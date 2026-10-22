import { FoodProps } from "@/lib/foodpanda";

interface FoodCardProps {
  food: FoodProps;
  onAdd?: (food: FoodProps) => void;
}

export const FoodCardComponent = ({ food, onAdd }: FoodCardProps) => {
  return (
    <section className="flex justify-between border border-gray-300 rounded-2xl relative">
      <div className="p-4">
        <h1 className="font-medium text-lg">{food.name}</h1>
        <p>
          <span className="text-pink-300">{food.price}$</span>
          <span className="text-gray-400 text-sm line-through ml-2">
            {food.discount}$
          </span>
        </p>
        <p className="text-gray-400 font-thin text-sm">{food.desc}</p>
      </div>
      <img
        className="object-contain"
        width={80}
        src={food.image}
        alt={food.name}
      />

      <button
        onClick={() => onAdd!(food)}
        className="absolute bottom-3 right-3 border rounded-full w-8 h-8 cursor-pointer"
      >
        +
      </button>
    </section>
  );
};
