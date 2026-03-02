export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  badge?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  slug: string;
  items: MenuItem[];
  image: string;
  description: string;
}

export const thickShakes: MenuItem[] = [
  {
    name: "Dragon (R or W)",
    price: 100,
    description:
      "Made with rich Amul ice cream, topped with premium cashews & chocolate drizzle.",
    badge: "🔥 Customer Favorite",
    image: "/assets/generated/thickshake-dragon.dim_400x400.jpg",
  },
  {
    name: "Kaju Banana",
    price: 70,
    description:
      "Fresh bananas blended with Amul vanilla ice cream and crunchy roasted cashews.",
    image: "/assets/generated/thickshake-kaju-banana.dim_400x400.jpg",
  },
  {
    name: "Custard Apple",
    price: 90,
    description:
      "Creamy custard apple pulp mixed with rich Amul ice cream for a royal taste.",
    image: "/assets/generated/thickshake-custard-apple.dim_400x400.jpg",
  },
  {
    name: "Avocado",
    price: 120,
    description:
      "Smooth avocado blended with sweet cream ice cream for a healthy premium shake.",
    image: "/assets/generated/thickshake-avocado.dim_400x400.jpg",
  },
  {
    name: "Sapota",
    price: 80,
    description:
      "Natural sapota fruit blended with creamy ice cream & dry fruit topping.",
    image: "/assets/generated/thickshake-sapota.dim_400x400.jpg",
  },
  {
    name: "Papaya",
    price: 70,
    description:
      "Fresh papaya blended with chilled ice cream for a smooth tropical flavor.",
    image: "/assets/generated/thickshake-papaya.dim_400x400.jpg",
  },
  {
    name: "Kit-Kat",
    price: 90,
    description:
      "Chocolate loaded shake with Kit-Kat crush & Amul chocolate ice cream.",
    badge: "🔥 Customer Favorite",
    image: "/assets/generated/thickshake-kitkat.dim_400x400.jpg",
  },
  {
    name: "Oreo",
    price: 90,
    description:
      "Oreo biscuit blended with rich chocolate ice cream and topped with choco chips.",
    image: "/assets/generated/thickshake-oreo.dim_400x400.jpg",
  },
];

export const juices: MenuItem[] = [
  {
    name: "Papaya",
    price: 30,
    description: "Fresh papaya blended to a smooth, sweet tropical delight.",
  },
  {
    name: "Banana",
    price: 30,
    description: "Creamy banana juice, naturally sweet and energy-boosting.",
  },
  {
    name: "Musk Melon",
    price: 40,
    description: "Cool and refreshing musk melon, perfect for hot days.",
  },
  {
    name: "Water Melon",
    price: 40,
    description: "Hydrating watermelon juice, naturally sweet and chilled.",
  },
  {
    name: "Grape",
    price: 40,
    description: "Rich purple grape juice, antioxidant-packed and refreshing.",
  },
  {
    name: "Pineapple",
    price: 40,
    description: "Tangy-sweet pineapple juice with tropical freshness.",
  },
  {
    name: "Sapota",
    price: 40,
    description: "Smooth sapota juice with a caramel-like natural sweetness.",
  },
  {
    name: "Pomegranate",
    price: 60,
    description: "Premium pomegranate juice, ruby red and nutrient-rich.",
  },
  {
    name: "Mango",
    price: 50,
    description: "King of fruits—rich, thick alphonso mango juice.",
  },
  {
    name: "Orange",
    price: 40,
    description: "Fresh-squeezed orange juice, vitamin C packed.",
  },
  {
    name: "Dragon (W or R)",
    price: 60,
    description: "Exotic dragon fruit juice, vibrant and refreshing.",
  },
  {
    name: "Carrot",
    price: 40,
    description: "Naturally sweet carrot juice, rich in beta-carotene.",
  },
  {
    name: "Beetroot",
    price: 40,
    description: "Deep ruby beetroot juice—earthy, sweet, and nutritious.",
  },
  {
    name: "Apple",
    price: 40,
    description: "Crisp fresh apple juice, light and naturally sweet.",
  },
  {
    name: "Custard Apple",
    price: 40,
    description: "Velvety custard apple juice with a tropical sweetness.",
  },
  {
    name: "Lassi",
    price: 40,
    description: "Classic Indian yoghurt drink, creamy and refreshing.",
  },
  {
    name: "Mixed Juices",
    price: 60,
    description: "A refreshing blend of seasonal fruits, balanced perfectly.",
  },
];

export const milkshakes: MenuItem[] = [
  {
    name: "Dragon (R or W)",
    price: 80,
    description:
      "Vibrant dragon fruit milkshake, visually stunning and delicious.",
  },
  {
    name: "Banana",
    price: 50,
    description: "Classic creamy banana milkshake with a smooth finish.",
  },
  {
    name: "Water Melon",
    price: 50,
    description: "Refreshing watermelon milkshake, sweet and summery.",
  },
  {
    name: "Musk Melon",
    price: 50,
    description: "Delicate musk melon shake, lightly sweet and creamy.",
  },
  {
    name: "Pineapple",
    price: 50,
    description: "Tangy-tropical pineapple milkshake with velvety cream.",
  },
  {
    name: "Custard Apple",
    price: 70,
    description: "Rich custard apple shake, like dessert in a glass.",
  },
  {
    name: "Papaya",
    price: 50,
    description: "Smooth papaya milkshake, tropical and indulgent.",
  },
  {
    name: "Grape",
    price: 50,
    description: "Purple grape shake, refreshing with natural sweetness.",
  },
  {
    name: "Sapota",
    price: 60,
    description: "Silky sapota shake with caramel notes and dry fruit.",
  },
  {
    name: "Mango",
    price: 60,
    description: "Thick mango milkshake—the ultimate summer indulgence.",
  },
  {
    name: "Apple",
    price: 60,
    description: "Fresh apple milkshake, lightly spiced and creamy.",
  },
  {
    name: "Chocolate",
    price: 70,
    description: "Rich Belgian chocolate milkshake, deeply indulgent.",
  },
  {
    name: "Butterscotch",
    price: 70,
    description: "Golden butterscotch shake with caramel warmth.",
  },
  {
    name: "Strawberry",
    price: 70,
    description: "Vibrant strawberry shake, sweet with a fruity tang.",
  },
  {
    name: "Vanilla",
    price: 70,
    description: "Classic vanilla shake—smooth, clean, and timeless.",
  },
  {
    name: "Dry Fruit Lassi",
    price: 70,
    description: "Thick yoghurt lassi loaded with premium dry fruits.",
  },
  {
    name: "Strawberry Shake",
    price: 70,
    description: "Extra creamy strawberry shake with whipped topping.",
  },
  {
    name: "Rasmalai Shake",
    price: 70,
    description: "Indulgent rasmalai-flavoured milkshake, festively rich.",
  },
  {
    name: "Badam Shake",
    price: 70,
    description: "Almond-rich badam shake, nourishing and aromatic.",
  },
  {
    name: "Pista Shake",
    price: 70,
    description: "Pistachio shake, nutty and luxuriously green.",
  },
  {
    name: "Black Current Shake",
    price: 70,
    description: "Intense black currant shake, bold berry flavour.",
  },
];

export const pureJuices: MenuItem[] = [
  {
    name: "Grape",
    price: 50,
    description: "Pure cold-pressed grape juice, unfiltered and rich.",
  },
  {
    name: "Carrot",
    price: 50,
    description: "Freshly pressed carrot juice, sweet and vibrant.",
  },
  {
    name: "Mosambi",
    price: 50,
    description: "Fresh sweet lime juice, cooling and vitamin-packed.",
  },
  {
    name: "Watermelon",
    price: 40,
    description: "Pure watermelon juice, nothing but the fruit.",
  },
  {
    name: "Pineapple",
    price: 60,
    description: "Cold-pressed pineapple juice with tropical brightness.",
  },
  {
    name: "Orange",
    price: 50,
    description: "Freshly squeezed orange juice, pure and pulpy.",
  },
  {
    name: "Muskmelon",
    price: 50,
    description: "Fresh muskmelon juice, lightly sweet and hydrating.",
  },
  {
    name: "Papaya",
    price: 50,
    description: "Pure papaya juice, smooth and digestive-friendly.",
  },
  {
    name: "Dragon (R or W)",
    price: 100,
    description:
      "Premium pure dragon fruit juice, exotic and antioxidant-rich.",
  },
  {
    name: "Beetroot",
    price: 50,
    description: "Pure beetroot juice, earthy and packed with iron.",
  },
];

export const fruitFlavors: MenuItem[] = [
  {
    name: "Sp Salad (5 Fruits)",
    price: 60,
    description:
      "Special fruit salad with 5 seasonal fruits—mango, papaya, dragon fruit, watermelon & pineapple, fresh and vibrant.",
  },
  {
    name: "Salad (3 Fruits)",
    price: 40,
    description:
      "A refreshing trio of seasonal fruits, freshly cut and served chilled.",
  },
  {
    name: "Salad (2 Fruits)",
    price: 30,
    description:
      "Simple two-fruit salad, light and refreshing—perfect for a quick healthy snack.",
  },
];

export const tastySpecials: MenuItem[] = [
  {
    name: "Special Lassi",
    price: 40,
    description:
      "Our signature lassi—thick creamy yoghurt with a touch of rose water and cardamom, topped with malai.",
  },
  {
    name: "Mocktails",
    price: 60,
    description:
      "Vibrant house mocktails blending fresh juices, soda & seasonal ingredients. Ask for today's creation!",
  },
];

export const menuCategories = [
  {
    title: "Juices",
    slug: "/juices",
    image: "/assets/generated/category-juices.dim_600x400.jpg",
    description: "17 fresh fruit juices",
    count: juices.length,
  },
  {
    title: "Milkshakes",
    slug: "/milkshakes",
    image: "/assets/generated/category-milkshakes.dim_600x400.jpg",
    description: "21 creamy milkshakes",
    count: milkshakes.length,
  },
  {
    title: "Pure Juices",
    slug: "/pure-juices",
    image: "/assets/generated/category-pure-juices.dim_600x400.jpg",
    description: "10 cold-pressed pure juices",
    count: pureJuices.length,
  },
  {
    title: "Thick Shakes",
    slug: "/thick-shakes",
    image: "/assets/generated/thickshake-dragon.dim_400x400.jpg",
    description: "8 premium thick shakes",
    count: thickShakes.length,
  },
  {
    title: "Fruit Flavors",
    slug: "/fruit-flavors",
    image: "/assets/generated/category-fruit-flavors.dim_600x400.jpg",
    description: "Fresh fruit salads (500ml)",
    count: fruitFlavors.length,
  },
  {
    title: "Tasty Specials",
    slug: "/tasty-specials",
    image: "/assets/generated/category-specials.dim_600x400.jpg",
    description: "Lassi & Mocktails",
    count: tastySpecials.length,
  },
];
