"use client";
import { FoodCardComponent } from "@/components/FoodCardComponent";
import { foods, FoodProps } from "@/lib/foodpanda";
import { useState } from "react";

export default function FoodPage() {
  const [cart, setCart] = useState<FoodProps[]>([]);
  return (
    <main>
      <div className="grid grid-cols-2 gap-4">
        {foods.map((food) => (
          <FoodCardComponent
            key={food.id}
            food={food}
            onAdd={() => setCart((currentCart) => [...currentCart, food])}
          />
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Added Foods ({cart.length})</h2>

        {cart.length === 0 ? (
          <p className="text-gray-400">No food added yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {cart.map((food) => (
              <FoodCardComponent food={food} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
