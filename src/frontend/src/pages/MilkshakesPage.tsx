import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { milkshakes } from "../data/menuData";

export default function MilkshakesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Milkshakes"
        subtitle="21 creamy, indulgent milkshakes in classic and exotic flavours"
        image="/assets/generated/category-milkshakes.dim_600x400.jpg"
        badge="Rich & Creamy"
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {milkshakes.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`milkshakes.item.${i + 1}`}
              delay={i * 40}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
