import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { juices } from "../data/menuData";

export default function JuicesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Fresh Juices"
        subtitle="17 varieties of fresh-blended fruit juices made to order"
        image="/assets/generated/category-juices.dim_600x400.jpg"
        badge="Fresh & Natural"
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {juices.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`juices.item.${i + 1}`}
              delay={i * 40}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
