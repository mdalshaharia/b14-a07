<div align="center">

# 🛒 বাজার দর | BazarDor

**প্রয়োজনীয় পণ্যের দাম এক নজরে**
*Daily essential commodity prices, at a glance.*

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📖 About the Project

**বাজার দর (BazarDor)** is a Bengali-first web app that helps people in Bangladesh keep track of daily prices of essential goods such as rice, lentils, oil, vegetables, fish, meat, eggs and spices.

Instead of visiting many markets or asking around, users can see today's price, how it changed compared to yesterday, and how prices differ from market to market, all in one clean and fast interface that works well on both phones and desktops.

---

## 🧰 Technologies Used

| Category | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router, JavaScript, no TypeScript) |
| UI Library | [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Component Library | [daisyUI](https://daisyui.com/) |
| Animation | [react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee) |
| Localization | Native `Intl` API (`bn-BD`) for Bengali digits and dates |
| Font | Hind Siliguri via `next/font/google` |

---

## ✨ Key Features

1. **📈 Live price ticker** — A smooth scrolling marquee shows today's prices with up and down changes. It pauses when you hover over it.
2. **🗂️ Category pages with sorting** — Browse products by category and sort by price, biggest increase or decrease, or name in Bengali alphabetical order.
3. **🏪 Market-wise price comparison** — Each product page shows the lowest, highest and average price, with a table comparing prices across markets and divisions.
4. **🔺 Clear price-change indicators** — Red ▲ for rising prices, green ▼ for falling prices, and a neutral mark for no change, so trends are readable in a second.
5. **📱 Fully responsive, Bengali-first design** — The interface is built for phones, tablets and desktops, with Bengali digits and dates, loading skeletons and a friendly 404-style empty state.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bazardor.git

# 2. Go to the project folder
cd bazardor

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
bazardor/
├── app/
│   ├── layout.jsx              # Navbar, ticker, footer, Bengali font
│   ├── page.jsx                # Home page (hero + categories)
│   ├── category/[slug]/        # Category page + loading skeleton
│   ├── product/[id]/           # Product detail page
│   ├── profile/                # User profile page
│   └── not-found.jsx           # 404 / empty state
├── components/
│   ├── Navbar.jsx
│   ├── PriceTicker.jsx
│   ├── HeroBanner.jsx
│   ├── ProductCard.jsx
│   ├── CategoryPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── ProductSkeleton.jsx
│   ├── EmptyState.jsx
│   ├── UserMenu.jsx
│   └── Footer.jsx
└── README.md
```

---

## 🗺️ Roadmap

- [ ] Connect a real database and API for live prices
- [ ] Authentication (sign in, sign up, profile update)
- [ ] Price history charts
- [ ] Search and price filters
- [ ] Dark mode

---

## ⚠️ Disclaimer

All prices shown are approximate and may change depending on market conditions.
সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ in Bangladesh

</div>