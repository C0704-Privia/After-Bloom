import Link from "next/link";
import "./recipes.css";

export const metadata = { title: "Hướng dẫn pha", description: "Bốn cách pha cho nhịp ngày của bạn: phin đen, cà phê sữa đá, cold brew và pour-over." };

const recipes = [
  { id: "phin-den", number: "01", name: "Cà phê phin đen", english: "SLOW & BOLD", intro: "Một nhịp nhỏ giọt. Một khoảng lặng đầu ngày.", time: "5–7 phút", coffee: "20 g", water: "100 ml", temperature: "92–96°C", grind: "Vừa mịn", serve: "1 ly nhỏ", tools: "Phin khoảng 150 ml, ly chịu nhiệt, cân và ấm nước.", extra: "Thêm nước nóng hoặc đá sau khi pha, tùy độ đậm bạn thích.", steps: [
    ["Làm ấm, rồi bắt đầu", "Tráng phin và ly bằng nước nóng, bỏ nước tráng. Cho 20 g cà phê vào phin, lắc nhẹ cho mặt bột phẳng và đặt nắp gài vừa chạm bột."],
    ["Dành một chút thời gian ủ", "Rót 20 ml nước ở 92–96°C, làm ướt đều bột. Chờ khoảng 30–45 giây để cà phê nở."],
    ["Để phin làm phần còn lại", "Rót chậm 80 ml nước còn lại, đậy nắp và chờ nhỏ giọt. Tổng thời gian từ lần rót đầu khoảng 5–7 phút; không ép chặt nắp gài."],
    ["Nếm trước khi thêm", "Khuấy nhẹ cà phê. Uống nóng hoặc thêm đá; nếu muốn nhẹ hơn, thêm từng chút nước và nếm lại."]
  ], tip: "Chảy quá nhanh và vị nhạt: thử xay mịn hơn một chút. Nhỏ giọt quá lâu và vị gắt: thử xay thô hơn, giữ nắp gài nhẹ tay.", product: "Power Focus", productId: "power-focus", pairing: "Gợi ý cho người thích gu đậm; hãy thử và điều chỉnh theo hạt thực tế." },
  { id: "sua-da", number: "02", name: "Cà phê sữa đá", english: "A LITTLE SWEETNESS", intro: "Đậm một chút. Ngọt vừa đủ. Mát lành quen thuộc.", time: "6–8 phút", coffee: "20 g", water: "80 ml", temperature: "92–96°C", grind: "Vừa mịn", serve: "1 ly", tools: "Phin khoảng 150 ml, ly chịu nhiệt, cân, thìa và ấm nước.", extra: "Chuẩn bị thêm 20–25 g sữa đặc và khoảng 100 g đá viên.", steps: [
    ["Chuẩn bị phần ngọt", "Cho 20 g sữa đặc vào ly. Tráng phin bằng nước nóng, thêm 20 g cà phê, dàn phẳng và đặt nắp gài nhẹ tay."],
    ["Ủ cà phê", "Đặt phin lên ly sữa. Rót 20 ml nước ở 92–96°C và chờ 30–45 giây."],
    ["Pha phần cà phê đậm", "Thêm 60 ml nước còn lại. Đậy nắp, để cà phê nhỏ xuống lớp sữa. Thời gian pha tham khảo khoảng 5–7 phút tính từ lúc ủ."],
    ["Khuấy đều, thêm đá", "Lấy phin ra, khuấy tan sữa với cà phê rồi thêm đá. Nếm và thêm tối đa khoảng 5 g sữa nếu muốn ngọt hơn."]
  ], tip: "Muốn bớt ngọt, giảm sữa trước. Nếu đá làm ly quá nhạt, dùng đá viên lớn hoặc giảm lượng đá; thay đổi từng yếu tố một.", product: "Power Focus", productId: "power-focus", pairing: "Một lựa chọn để thử cùng sữa đặc, dành cho gu cà phê đậm." },
  { id: "cold-brew", number: "03", name: "Cold brew", english: "PREPARE TONIGHT", intro: "Chuẩn bị từ tối. Sáng mai, chỉ cần rót.", time: "12 giờ ủ lạnh", coffee: "60 g", water: "600 ml", temperature: "Nước lạnh", grind: "Thô", serve: "2–3 ly", tools: "Bình sạch có nắp dung tích ít nhất 1 lít, cân, rây và giấy lọc hoặc túi lọc cà phê.", extra: "Tỷ lệ khởi đầu 1:10. Lượng cà phê thu được sẽ ít hơn lượng nước do bột giữ nước.", steps: [
    ["Xay thô, cân đủ", "Cân 60 g cà phê, xay thô. Cho vào bình sạch hoặc túi lọc đặt trong bình."],
    ["Thêm nước lạnh", "Rót 600 ml nước uống sạch, lạnh. Khuấy nhẹ để toàn bộ bột thấm nước rồi đậy kín."],
    ["Để thời gian làm việc", "Đặt bình trong ngăn mát tủ lạnh khoảng 12 giờ. Giữ lạnh trong suốt quá trình ủ."],
    ["Lọc và thưởng thức", "Lấy túi lọc ra hoặc lọc qua rây rồi giấy lọc. Rót một ít để nếm, thêm nước hoặc đá nếu cần. Đậy kín, giữ trong ngăn mát và dùng trong 3 ngày."]
  ], tip: "Nếu quá đậm, pha loãng từng ít một ngay trong ly. Nếu hơi nhạt, lần sau giảm lượng nước; đừng thay cả thời gian và tỷ lệ cùng lúc.", product: "Morning Light", productId: "morning-light", pairing: "Gợi ý khởi đầu cho một bình cà phê uống lạnh trong ngày." },
  { id: "pour-over", number: "04", name: "Pour-over", english: "POUR SLOWLY", intro: "Rót chậm. Để hương vị có thời gian mở ra.", time: "2:30–3:30 phút", coffee: "20 g", water: "320 ml", temperature: "92–96°C", grind: "Vừa", serve: "1 ly lớn", tools: "Phễu V60 cỡ 02, giấy lọc phù hợp, bình đựng, cân, đồng hồ và ấm cổ ngỗng.", extra: "Tỷ lệ khởi đầu 1:16. Các mốc nước dưới đây là tổng lượng trên cân, đã gồm nước ủ.", steps: [
    ["Làm ấm dụng cụ", "Đặt giấy vào phễu, tráng bằng nước nóng và đổ bỏ nước tráng. Thêm 20 g cà phê, dàn mặt bột và đưa cân về 0."],
    ["Ủ với 40 ml nước", "Bắt đầu bấm giờ. Rót 40 ml nước ở 92–96°C theo vòng tròn nhỏ, làm ướt đều bột. Chờ đến giây 30–45."],
    ["Rót đều, theo hai nhịp", "Rót chậm đến mốc tổng 180 ml. Khi nước hạ bớt, tiếp tục rót đến tổng 320 ml. Tránh rót trực tiếp lên thành giấy."],
    ["Chờ chảy hết, rồi nếm", "Hướng tới tổng thời gian 2 phút 30 giây đến 3 phút 30 giây. Nhấc phễu ra, xoay nhẹ bình và đợi cà phê dịu bớt nhiệt trước khi uống."]
  ], tip: "Vị chua gắt và nước chảy quá nhanh: thử xay mịn hơn. Vị đắng gắt và chảy quá chậm: thử xay thô hơn; giữ nguyên tỷ lệ để dễ so sánh.", product: "Evening Wind", productId: "evening-wind", pairing: "Gợi ý để khám phá cách pha rót với Arabica Cầu Đất." },
];

export default function Recipes() {
  return <main id="main" className="recipes-page">
    <section className="recipe-intro">
      <div className="recipe-intro-copy">
        <nav aria-label="Đường dẫn" className="recipe-breadcrumb"><Link href="/brew-guide">Nghi thức pha</Link><span aria-hidden="true"> / </span><span>Hướng dẫn pha</span></nav>
        <p className="eyebrow">THE EVERYDAY BREW · AFTER BLOOM</p>
        <h1>Một cách pha.<br />Một nhịp <em>của bạn.</em></h1>
        <p>Bốn công thức nhỏ để bắt đầu.<br />Từ chiếc phin quen đến những lần rót chậm.</p>
        <a className="text-link" href="#chon-cong-thuc">Tìm cách pha hôm nay ↓</a>
      </div>
      <figure><img src="/brand/coffee-ritual-v5.webp" width="1536" height="1024" alt="Hạt cà phê và cối xay After Bloom trong ánh sáng buổi sáng" fetchPriority="high" /><figcaption>GOOD COFFEE STARTS WITH A SMALL RITUAL.</figcaption></figure>
    </section>
    <section className="section recipe-selection" id="chon-cong-thuc">
      <div className="section-heading"><div><p className="eyebrow">01 / CHỌN MỘT CÁCH PHA</p><h2>Hôm nay, bạn thích gì?</h2></div><p className="recipe-aside">Một dụng cụ quen thuộc.<br />Một chút thời gian cho mình.</p></div>
      <nav className="recipe-cards" aria-label="Chọn công thức">{recipes.map(r => <a key={r.id} href={`#${r.id}`} className="recipe-card"><span className="recipe-card-top"><span className="eyebrow">{r.english}</span><span>{r.number}</span></span><h3>{r.name}</h3><p>{r.intro}</p><span className="recipe-card-bottom"><span>{r.time}</span><span aria-hidden="true">↘</span></span></a>)}</nav>
      <p className="recipe-start-note">Một điểm bắt đầu, không phải khuôn mẫu. Định lượng dưới đây là gợi ý; hãy tinh chỉnh theo hạt, dụng cụ và khẩu vị của bạn.</p>
    </section>
    <div className="recipe-collection">{recipes.map(r => <article key={r.id} id={r.id} className="recipe-detail">
      <header className="recipe-title"><p className="eyebrow">CÔNG THỨC {r.number} / {r.english}</p><h2>{r.name}</h2><p>{r.intro}</p></header>
      <dl className="recipe-stats">{[["Cà phê",r.coffee],["Nước pha",r.water],["Nhiệt độ",r.temperature],["Thời gian",r.time]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="recipe-body"><aside className="recipe-prep"><p className="eyebrow">TRƯỚC KHI BẮT ĐẦU</p><h3>Chuẩn bị vừa đủ.</h3><p><strong>Khẩu phần:</strong> {r.serve}<br/><strong>Cỡ xay:</strong> {r.grind}</p><p>{r.tools}</p><p>{r.extra}</p><div className="recipe-pairing"><span className="eyebrow">CÀ PHÊ GỢI Ý</span><h4>{r.product}</h4><p>{r.pairing}</p><Link className="text-link" href={`/shop/${r.productId}`}>Khám phá {r.product} ↗</Link></div></aside>
      <div><ol className="recipe-steps">{r.steps.map(([title,body],i)=><li key={title}><span aria-hidden="true">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol><details className="recipe-tip"><summary>Chỉnh một chút, gần gu hơn <span aria-hidden="true">+</span></summary><p>{r.tip}</p></details><a className="text-link recipe-back" href="#chon-cong-thuc">Chọn công thức khác ↑</a></div></div>
    </article>)}</div>
    <section className="section recipe-end"><p className="eyebrow">YOUR DAILY COFFEE RITUAL</p><h2>Không cần hoàn hảo.<br />Chỉ cần hợp với bạn.</h2><p>Ghi lại một điều bạn thích trong ly hôm nay.<br />Đó là khởi đầu cho lần pha tiếp theo.</p><Link className="button" href="/brew-guide">Trở về Nghi thức pha <span>↗</span></Link></section>
  </main>;
}

