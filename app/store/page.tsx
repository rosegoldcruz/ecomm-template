"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeImage } from "@/components/fade-image";

const categories = ["All", "Pasta", "Giardiniera", "Sauces", "Canned Goods"];

const products = [
  {
    id: 1,
    name: "Spaghetti No.4 — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Durum wheat semolina pasta from Salerno, Italy",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.4%20Spaghetti%20-%20pack%20of%205-%20front.png",
    href: "https://www.amazon.com/dp/B0DDG5FVXP",
  },
  {
    id: 2,
    name: "Rigatoni No.18 — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Authentic Italian rigatoni, perfect for hearty sauces",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-NO.18%20Rigatoni%20-%20Pack%20of%205.png",
    href: "https://www.amazon.com/dp/B0DDG5KCRB",
  },
  {
    id: 3,
    name: "Penne Rigate No.80 — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Classic penne rigate, ideal for baked dishes",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.80%20Penne%20Rigate.png",
    href: "https://www.amazon.com/dp/B0DDG6FCT7",
  },
  {
    id: 4,
    name: "Fusilli No.114 — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Spiral pasta that holds sauce in every twist",
    price: "$20.99",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.114%20Fusilli%20-%20(Pack%20of%205%2C%205lb%20total%20weight)%20-%20pasta%20di%20semola%20di%20grano%20duro%20-%20durum%20wheat%20semolina%20pasta%20macaroni%20product%20-%20Authentic%20Italain%20Pasta%20-%20PRODUCT%20OF%20ITALY.png",
    href: "https://www.amazon.com/dp/B0DM7M4NWB",
  },
  {
    id: 5,
    name: "Fettuccine No.20 — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Wide ribbon pasta, perfect with creamy sauces",
    price: "$20.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.20%20Fettuccine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DDFYXLJY",
  },
  {
    id: 6,
    name: "Linguine — Pack of 5",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Flat pasta from Salerno, pairs with seafood & pesto",
    price: "$20.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Linguine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B09DRK1RHY",
  },
  {
    id: 7,
    name: "Spaghetti 10 LB Bag",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Bulk restaurant-grade spaghetti",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Spaghetti%2010%20LB%20Bag%20-%20front.png",
    href: "https://www.amazon.com/dp/B0DFL1YR5L",
  },
  {
    id: 8,
    name: "Linguine 10 LB Bag",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Bulk restaurant-grade linguine",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.18%20Linguine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DFKWRQ5V",
  },
  {
    id: 9,
    name: "Fettuccine 10 LB Bag",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Bulk restaurant-grade fettuccine",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.20%20Fettuccine%2010%20LB%20Bag-front.png",
    href: "https://www.amazon.com/dp/B0DFKPY42W",
  },
  {
    id: 10,
    name: "Penne Rigate 10 LB Bag",
    brand: "Antonio Amato",
    category: "Pasta",
    description: "Bulk restaurant-grade penne rigate",
    price: "$34.99",
    image: "/jp%20assets/Antonio%20Amato%20NO.80%20Penne%20Rigate%2010%20LB%20Bag-back.png",
    href: "https://www.amazon.com/dp/B0DFKRKWZK",
  },
  {
    id: 11,
    name: "Hot Giardiniera 8oz",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "Chicago Style spicy Italian relish",
    price: "$12.99",
    image: "/jp%20assets/Chicago%20Style%20Hot%20Giardiniera%2C%208oz.png",
    href: "https://www.amazon.com/dp/B0DJDY6MZ1",
  },
  {
    id: 12,
    name: "Hot Giardiniera 16oz",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "Chicago Style spicy Italian relish",
    price: "$16.99",
    image: "/jp%20assets/Chicago-Style%20Hot%20Giardiniera-16oz.png",
    href: "https://www.amazon.com/dp/B0DJDZ5P2C",
  },
  {
    id: 13,
    name: "Mild Giardiniera 8oz",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "Chicago Style mild Italian relish",
    price: "$12.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%208oz.png",
    href: "https://www.amazon.com/dp/B0DGS3S5FQ",
  },
  {
    id: 14,
    name: "Mild Giardiniera 16oz",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "Chicago Style mild Italian relish",
    price: "$16.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%2016oz.png",
    href: "https://www.amazon.com/dp/B0DJDZNXFY",
  },
  {
    id: 15,
    name: "Mild Giardiniera 1 Gallon",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "Foodservice-sized for Italian beef & more",
    price: "$34.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%201%20Gallon.png",
    href: "https://www.amazon.com/dp/B0DJDZPLS7",
  },
  {
    id: 16,
    name: "Mild Giardiniera — 100 Count Packets",
    brand: "Chicago Style",
    category: "Giardiniera",
    description: "1.5oz individual packets, perfect for catering",
    price: "$134.99",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardinier-100%20Count-1.5oz%20Pouch%20Packets.png",
    href: "https://www.amazon.com/dp/B0DJF1WHJ8",
  },
  {
    id: 17,
    name: "Plain Pizza Sauce 106oz",
    brand: "Chicago Style",
    category: "Sauces",
    description: "Chicago Style pizza sauce for authentic pies",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Plain%20Pizza%20Sauce%2C%20106oz.png",
    href: "https://www.amazon.com/dp/B0DGRZ3SNH",
  },
  {
    id: 18,
    name: "Pizza Sauce With Basil 106oz",
    brand: "Chicago Style",
    category: "Sauces",
    description: "Chicago Style pizza sauce with fresh basil",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Pizza%20Sauce%20With%20Basil%2C%20106oz.png",
    href: "https://www.amazon.com/dp/B0DM76L3PK",
  },
  {
    id: 19,
    name: "Crushed Tomatoes 102oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style crushed tomatoes for sauces",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Crushed%20Tomatoes%2C%20102oz.png",
    href: "https://www.amazon.com/dp/B0DM7BPXJ1",
  },
  {
    id: 20,
    name: "Ground Peeled Tomatoes 105oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style ground peeled tomatoes",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Ground%20Peeled%20Tomatoes%2C%20105oz.png",
    href: "https://www.amazon.com/dp/B0DM79SHL2",
  },
  {
    id: 21,
    name: "Tomato Paste 111oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style concentrated tomato paste",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Tomato%20Paste%2C%20111oz.png",
    href: "https://www.amazon.com/dp/B0DM7D893D",
  },
  {
    id: 22,
    name: "Tomato Puree Extra Heavy 107oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style extra heavy tomato puree",
    price: "$23.99",
    image: "/jp%20assets/Chicago%20Style%20Tomato%20Puree%20Extra%20Heavy%2C%20107oz.png",
    href: "https://www.amazon.com/dp/B0DM76HRWC",
  },
  {
    id: 23,
    name: "Mushrooms Pieces & Stems 68oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style canned mushrooms",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Mushrooms%20Pieces%20%26%20Stems%2C%2068oz.png",
    href: "https://www.amazon.com/dp/B0DM7DGN5T",
  },
  {
    id: 24,
    name: "Green Pepper Strips 102oz",
    brand: "Chicago Style",
    category: "Canned Goods",
    description: "Chicago Style green pepper strips",
    price: "$29.99",
    image: "/jp%20assets/Chicago%20Style%20Green%20Pepper%20Strips%2C%20102oz.png",
    href: "https://www.amazon.com/dp/B0DM7FDN36",
  },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Store Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/jp%20assets/logo.png"
              alt="JP Distribution"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/store" className="text-sm font-medium text-foreground">
              Store
            </Link>
          </nav>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 md:px-12">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Shop
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Authentic Italian pasta from Antonio Amato and Chicago Style sauces & condiments. Click any product to order on Amazon.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-12">
          {filtered.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary mb-4">
                <FadeImage
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {product.brand}
              </p>
              <h3 className="text-sm font-medium text-foreground leading-snug md:text-base">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground hidden md:block">
                {product.description}
              </p>
              <p className="mt-2 text-lg font-medium text-foreground">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Store Footer */}
      <footer className="border-t border-border px-6 py-8 md:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 JP Distribution. All rights reserved.
          </p>
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}
