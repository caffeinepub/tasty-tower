import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { pureJuices } from "../data/menuData";

export default function PureJuicesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Pure Juices"
        subtitle="Cold-pressed, nothing-added pure fruit juices — straight from the fruit"
        image="/assets/generated/category-pure-juices.dim_600x400.jpg"
        badge="100% Pure"
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {pureJuices.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`pure-juices.item.${i + 1}`}
              delay={i * 40}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
