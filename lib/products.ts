export type Product = {
 id: string; number: string; name: string; composition: string; roast: string;
 weight: string; price: number | null; category: "Arabica" | "Robusta" | "Blend";
 notes: string; description: string; brew: string; image: string;
 labels: { "250": string; "500": string };
};
export const products: Product[] = [
  {
    "id": "evening-wind",
    "number": "01",
    "name": "Evening Wind",
    "composition": "100% ARABICA CẦU ĐẤT",
    "roast": "Vừa phát triển (M+)",
    "weight": "250 g",
    "price": null,
    "category": "Arabica",
    "notes": "Nền vị thanh nhẹ, chua dịu, khép lại bằng dư vị nhẹ nhàng, dễ chịu.",
    "description": "Một khoảng riêng để chậm lại cùng hương Arabica từ cao nguyên Cầu Đất, Việt Nam. Thanh nhẹ và tinh tế, dành cho phút tĩnh tại để những ý tưởng mới mở ra.",
    "brew": "Filter / pour-over · Americano",
    "image": "/products/labels/evening-wind-250.png",
    "labels": {
      "250": "/products/labels/evening-wind-250.png",
      "500": "/products/labels/evening-wind-500.png"
    }
  },
  {
    "id": "signature-flow",
    "number": "02",
    "name": "Signature Flow",
    "composition": "50% ARABICA · 50% ROBUSTA",
    "roast": "Vừa (M đến MD)",
    "weight": "250 g",
    "price": null,
    "category": "Blend",
    "notes": "Hương cacao và hạt rang hòa quyện trên nền vị tròn, cân bằng giữa hương thơm và độ đậm.",
    "description": "Dòng chảy quen thuộc cho mỗi khởi đầu. Êm, tròn vị và hài hòa khi thêm sữa, Signature Flow mang đến một gu cà phê để gắn bó mỗi ngày.",
    "brew": "Espresso · Americano · Latte",
    "image": "/products/labels/signature-flow-250.png",
    "labels": {
      "250": "/products/labels/signature-flow-250.png",
      "500": "/products/labels/signature-flow-500.png"
    }
  },
  {
    "id": "morning-light",
    "number": "03",
    "name": "Morning Light",
    "composition": "70% ARABICA · 30% ROBUSTA",
    "roast": "Vừa (M)",
    "weight": "250 g",
    "price": null,
    "category": "Blend",
    "notes": "Vị đắng nhẹ hòa trong nền cà phê rõ nét, để lại hậu vị cân bằng ngay cả khi thưởng thức với đá.",
    "description": "Đón ngày mới bằng một cảm giác sảng khoái. Morning Light giữ nét thanh nhẹ cùng nền vị vừa đủ rõ; thêm chút đá để khoảnh khắc bắt đầu thêm tươi mới.",
    "brew": "Cold brew · Americano đá",
    "image": "/products/labels/morning-light-250.png",
    "labels": {
      "250": "/products/labels/morning-light-250.png",
      "500": "/products/labels/morning-light-500.png"
    }
  },
  {
    "id": "deep-work",
    "number": "04",
    "name": "Deep Work",
    "composition": "30% ARABICA · 70% ROBUSTA",
    "roast": "Vừa đậm (M+ / MD)",
    "weight": "250 g",
    "price": null,
    "category": "Blend",
    "notes": "Nền cacao đi cùng thân vị tròn đầy, giữ hương thơm rõ nét và kết lại bằng vị đắng cân bằng.",
    "description": "Một nghi thức nhỏ trước khi bắt đầu điều bạn muốn dành tâm trí. Deep Work đậm đà, có gu và thêm phần tròn vị khi kết hợp cùng sữa tươi, để bạn biến tấu theo cách riêng.",
    "brew": "Espresso · Americano đậm · Latte",
    "image": "/products/labels/deep-work-250.png",
    "labels": {
      "250": "/products/labels/deep-work-250.png",
      "500": "/products/labels/deep-work-500.png"
    }
  },
  {
    "id": "power-focus",
    "number": "05",
    "name": "Power Focus",
    "composition": "10% ARABICA · 90% ROBUSTA",
    "roast": "Vừa đậm (M+ đến MD)",
    "weight": "250 g",
    "price": null,
    "category": "Blend",
    "notes": "Thân vị đầy, đắng rõ, kết lại bằng hậu vị sạch và dễ chịu. Nền cà phê đậm đà nổi bật qua vị béo ngọt của sữa và kem.",
    "description": "Dành cho người yêu gu cà phê Việt đậm rõ. Mạnh mẽ trong hương vị, Power Focus giữ chất cà phê làm điểm nhấn xuyên suốt từng ngụm.",
    "brew": "Phin sữa đá · Cà phê muối",
    "image": "/products/labels/power-focus-250.png",
    "labels": {
      "250": "/products/labels/power-focus-250.png",
      "500": "/products/labels/power-focus-500.png"
    }
  }
];
export const money = (value: number | null) => value === null ? "Liên hệ" : new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(value);
