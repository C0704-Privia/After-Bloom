export type Product = {
    id: string;
    name: string;
    composition: string;
    roast: "Medium" | "Medium Dark";
    weight: string;
    price: number;
    description: string;
    image: string;
    category: "Arabica" | "Robusta" | "Blend";
    notes: string;
    number: string;
};
export const products: Product[] = [
    { id: "focus-blend", number: "01", name: "Focus Blend", composition: "100% Arabica Cầu Đất", roast: "Medium", weight: "500 g", price: 150000, category: "Arabica", notes: "Cam chanh · Socola sữa · Hạnh nhân", description: "Một khởi đầu nhẹ nhàng cho những ngày cần sự rõ ràng và tập trung.", image: "/products/focus-blend-v4.png" },
    { id: "power-focus", number: "02", name: "Power Focus", composition: "100% Robusta Honey", roast: "Medium Dark", weight: "500 g", price: 170000, category: "Robusta", notes: "Socola đen · Caramel · Hạt rang", description: "Một cá tính đậm nét, dành cho những ai yêu thích chiều sâu trong từng ngụm cà phê.", image: "/products/power-focus-v4.png" },
    { id: "balance-blend", number: "03", name: "Balance Blend", composition: "80% Arabica + 20% Robusta", roast: "Medium", weight: "500 g", price: 190000, category: "Blend", notes: "Caramel · Socola sữa · Hạt rang", description: "Hai cá tính cà phê gặp nhau trong một lựa chọn hài hòa, linh hoạt cho nhiều thời điểm.", image: "/products/balance-blend-v4.png" },
    { id: "strong-focus", number: "04", name: "Strong Focus", composition: "60% Arabica + 40% Robusta Honey", roast: "Medium Dark", weight: "500 g", price: 210000, category: "Blend", notes: "Caramel · Socola đen · Mật ong", description: "Thân vị dày, cấu trúc rõ ràng và sự cân bằng cho người thích một ly cà phê đậm đà.", image: "/products/strong-focus-v4.png" },
    { id: "after-bloom-signature", number: "05", name: "After Bloom Signature", composition: "House Blend", roast: "Medium", weight: "500 g", price: 230000, category: "Blend", notes: "Quả mọng đỏ · Caramel · Socola đen", description: "Công thức đại diện cho After Bloom, đang được phát triển với một cá tính riêng.", image: "/products/after-bloom-signature-v4.png" },
];
export const money = (value: number) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
