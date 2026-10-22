import { ProductCardComponent } from "@/components/ProductCardComponent";
import { products } from "@/lib/product";

export default function ProductsPage() {
  return (
    <main className="grid grid-cols-3 grid-rows-2 gap-10 border-2">
      {products.map((product) => (
        <ProductCardComponent
          name={product.name}
          desc={product.desc}
          image={product.image}
          version={product.version}
        />
      ))}
    </main>
  );
}
