export type Product = {
  id: string
  name: string
  composition: string
  roast: "Low Roast" | "Medium Roast" | "High Roast"
  weight: string
  price: number
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: "cau-dat-arabica",
    name: "Cầu Đất Arabica",
    composition: "100% Arabica",
    roast: "Medium Roast",
    weight: "500g",
    price: 190000,
    description: "Clean, bright and balanced Vietnamese Arabica from Cầu Đất.",
    image: "/products/cau-dat-arabica.png",
  },
  {
    id: "deep-work",
    name: "Deep Work",
    composition: "40% Arabica + 60% Robusta",
    roast: "High Roast",
    weight: "500g",
    price: 150000,
    description: "Bold, full-bodied and dependable for focused work sessions.",
    image: "/products/deep-work.png",
  },
  {
    id: "evening-wind",
    name: "Evening Wind",
    composition: "70% Arabica + 30% Robusta",
    roast: "Low Roast",
    weight: "500g",
    price: 170000,
    description: "Smooth and aromatic with a softer finish for winding down.",
    image: "/products/evening-wind.png",
  },
  {
    id: "morning-light",
    name: "Morning Light",
    composition: "100% Robusta Honey",
    roast: "Medium Roast",
    weight: "500g",
    price: 145000,
    description: "Rich, naturally sweet and structured with a distinctive honey-process character.",
    image: "/products/morning-light.png",
  },
  {
    id: "signature-flow",
    name: "Signature Flow",
    composition: "50% Arabica + 50% Robusta",
    roast: "Medium Roast",
    weight: "500g",
    price: 160000,
    description: "A balanced everyday blend with body and a clean finish.",
    image: "/products/signature-flow.png",
  },
]