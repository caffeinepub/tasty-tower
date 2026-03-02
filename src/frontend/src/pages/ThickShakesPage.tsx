import MenuCard from "../components/MenuCard";
import PageHeader from "../components/PageHeader";
import { thickShakes } from "../data/menuData";

export default function ThickShakesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Thick Shakes"
        subtitle="350ml premium thick shakes made with rich Amul ice cream, dry fruits & seasonal fruits"
        image="/assets/generated/thickshake-dragon.dim_400x400.jpg"
        badge="⭐ Our Speciality"
      />
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {thickShakes.map((item, i) => (
            <MenuCard
              key={item.name}
              {...item}
              ocid={`thick-shakes.item.${i + 1}`}
              delay={i * 60}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
