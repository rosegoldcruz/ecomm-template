"use client";

import Link from "next/link";
import Image from "next/image";

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left - Big Image */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          <Image
            src="/jp%20assets/ANTONIO%20AMATO%20di%20Salerno%20-%20NO.4%20Spaghetti%20-%20pack%20of%205-%20front.png"
            alt="Antonio Amato Pasta"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right - CTA */}
        <div className="flex flex-col items-center justify-center px-6 py-20 md:px-12 lg:px-20 bg-secondary/30">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground text-center mb-6">
            Shop the
            <br />
            Collection
          </h2>
          <p className="text-muted-foreground text-center max-w-md mb-10 text-lg">
            24 authentic Italian products from Antonio Amato and Chicago Style, delivered to your door.
          </p>
          <Link
            href="/store"
            className="px-12 py-5 text-lg font-medium bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
          >
            Enter Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
