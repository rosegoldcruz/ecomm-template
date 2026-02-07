"use client";

import Link from "next/link";
import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Spaghetti No.4",
    description: "Antonio Amato",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.4%20Spaghetti%20-%20pack%20of%205-%20front.png",
  },
  {
    title: "Penne Rigate No.80",
    description: "Antonio Amato",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.80%20Penne%20Rigate.png",
  },
  {
    title: "Rigatoni No.18",
    description: "Antonio Amato",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-NO.18%20Rigatoni%20-%20Pack%20of%205.png",
  },
  {
    title: "Fusilli No.114",
    description: "Antonio Amato",
    image: "/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.114%20Fusilli%20-%20(Pack%20of%205%2C%205lb%20total%20weight)%20-%20pasta%20di%20semola%20di%20grano%20duro%20-%20durum%20wheat%20semolina%20pasta%20macaroni%20product%20-%20Authentic%20Italain%20Pasta%20-%20PRODUCT%20OF%20ITALY.png",
  },
  {
    title: "Pizza Sauce With Basil",
    description: "Chicago Style",
    image: "/jp%20assets/Chicago%20Style%20Pizza%20Sauce%20With%20Basil%2C%20106oz.png",
  },
  {
    title: "Mild Giardiniera",
    description: "Chicago Style",
    image: "/jp%20assets/Chicago%20Style%20Mild%20Giardiniera%2C%2016oz.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Crafted in Salerno.
          <br />
          Delivered to Your Table.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Our Product Line
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        <Link
          href="/store"
          className="px-8 py-4 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
        >
          Shop All Products
        </Link>
      </div>
    </section>
  );
}
