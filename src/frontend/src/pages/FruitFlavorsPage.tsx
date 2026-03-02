import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { fruitFlavors } from "../data/menuData";

export default function FruitFlavorsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Fruit Flavors"
        subtitle="Fresh seasonal fruit salads — 500ml, healthy and vibrant"
        image="/assets/generated/category-fruit-flavors.dim_600x400.jpg"
        badge="Fresh & Healthy"
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {fruitFlavors.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`fruit-flavors.item.${i + 1}`}
              delay={i * 80}
            />
          ))}
        </div>

        {/* Info note */}
        <div
          className="mt-12 max-w-lg mx-auto text-center p-6 rounded-2xl"
          style={{
            background: "oklch(0.15 0.04 258 / 0.8)",
            border: "1px solid oklch(0.84 0.16 86 / 0.15)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.70 0.025 258)" }}
          >
            🍉 Our fruit salads are made with the freshest seasonal fruits
            available — mango, papaya, dragon fruit, watermelon, pineapple &
            more. Served chilled, no added sugar.
          </p>
        </div>
      </section>
    </div>
  );
}
