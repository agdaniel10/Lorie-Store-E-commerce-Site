import trouserImage from "../Images/trouser.webp"
import manSmile from "../Images/man-smile.webp"
import suite from "../Images/suite.webp"
import whiteShirt from "../Images/white shirt.webp"
import colorTea from "../Images/colorTea.webp"
import planeTea from "../Images/planeTea.webp"
import wowenWhiteTea from  "../Images/women-white-shirt.webp"
import womenBag from "../Images/women-bag.webp"
import shoes1 from "../Images/shoes.webp"
import diamondEarring from  "../Images/Diamond-earings.webp"

export const products = [
  {
    id: 1,
    name: "Premium Denim Jeans - Dark Wash",
    type: 'Men',
    price: 200,
    originalPrice: 210,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image: trouserImage,
    rating: 5,
    reviews: 5,
    stock: 23,
    description: "High-quality denim jeans perfect for casual and semi-formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Wash", "Light Wash", "Black"]
  },
  {
    id: 2,
    name: "Oxford Button-Down Shirt",
    type: 'Men',
    price: 90,
    originalPrice: 94.50,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image: manSmile,
    rating: 5,
    reviews: 5,
    stock: 17,
    description: "Classic oxford button-down shirt for professional and casual wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Light Blue"]
  },
  {
    id: 3,
    name: "Double-Breasted Suit - Navy Blue",
    type: 'Men',
    price: 280,
    originalPrice: 308,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image:suite ,
    rating: 4,
    reviews: 5,
    stock: 7,
    description: "Premium navy blue double-breasted suit for formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy Blue", "Charcoal", "Black"]
  },
  {
    id: 4,
    name: "Wool Blend Oversized Tee",
    type: 'Men',
    price: 70,
    originalPrice: 73.50,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image: whiteShirt,
    rating: 3,
    reviews: 5,
    stock: 23,
    description: "Comfortable oversized tee made from premium wool blend.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Gray", "Black"]
  },
  {
    id: 5,
    name: "Essential Slim-Fit T-Shirt",
    type: 'Men',
    price: 55,
    originalPrice: 63.50,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image: colorTea,
    rating: 5,
    reviews: 5,
    stock: 12,
    description: "Essential slim-fit t-shirt in vibrant colors.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green", "Yellow"]
  },
  {
    id: 6,
    name: "Men Tapered Pants",
    type: 'Men',
    price: 200,
    originalPrice: 265,
    category: "men",
    categoryDisplay: "MEN'S CLOTHING",
    image: planeTea,
    rating: 5,
    reviews: 7,
    stock: 56,
    description: "Modern tapered pants with contemporary fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Black"]
  },
  // Add women's clothing
  {
    id: 7,
    name: "Women's Elegant Dress",
    type: 'Women',
    price: 150,
    originalPrice: 180,
    category: "women",
    categoryDisplay: "WOMEN'S CLOTHING",
    image: wowenWhiteTea,
    rating: 5,
    reviews: 8,
    stock: 15,
    description: "Elegant dress perfect for special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Red"]
  },
  // Bags
  {
    id: 8,
    name: "Mini CrossBody Bag - Faux Leather",
    type: 'Women',
    price: 120,
    originalPrice: 132,
    category: "bags",
    categoryDisplay: "BAGS",
    image: womenBag,
    rating: 5,
    reviews: 8,
    stock: 15,
    description: "Elegant bags for illustrious women.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Red"]
  },
  // Shoes
  {
    id: 9,
    name: "Classic Leather Shoes",
    type: 'Men',
    price: 150,
    originalPrice: 180,
    category: "shoes",
    categoryDisplay: "SHOES",
    image: shoes1 ,
    rating: 5,
    reviews: 8,
    stock: 15,
    description: "Elegant leather shoes for any occasion.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Red"]
  },
  // Jewelries
  {
    id: 10,
    name: "18k Gold Plated Earrings",
    type: 'Women',
    price: 150,
    originalPrice: 180,
    category: "jewelries",
    categoryDisplay: "JEWELRIES",
    image: diamondEarring,
    rating: 5,
    reviews: 8,
    stock: 15,
    description: "Elegant 18k gold plated earrings for special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Rose Gold", "Silver"]
  }
];

export const categories = [
  { id: 'men', name: 'Men', count: 6 },
  { id: 'women', name: 'Women', count: 1 },
  { id: 'bags', name: 'Bags', count: 1 },
  { id: 'shoes', name: 'Shoes', count: 1 },
  { id: 'jewelries', name: 'Jewelries', count: 1 }
];