"use client";

import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
};

type OfflineSectionProps = {
  number: string;
  title: string;
  description: string;
  images: ImageItem[];
  layout: "coffee" | "film" | "clothes";
};

export default function OfflineSection({
  number,
  title,
  description,
  images,
  layout,
}: OfflineSectionProps) {
  return (
    <section>
      {/* Section header */}
      <div className="mb-8 flex items-end justify-between border-b border-neutral-200 pb-4">
        <div className="flex items-baseline gap-4">
          <span className="text-xs text-neutral-400">{number}</span>

          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>

        <p className="hidden max-w-xs text-right text-sm text-neutral-400 md:block">
          {description}
        </p>
      </div>

      {/* Mobile description */}
      <p className="mb-8 text-sm leading-relaxed text-neutral-500 md:hidden">
        {description}
      </p>

      {layout === "coffee" && (
        <CoffeeCollage images={images} />
      )}

      {layout === "film" && (
        <FilmCollage images={images} />
      )}

      {layout === "clothes" && (
        <ClothesCollage images={images} />
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* COFFEE                                                                     */
/* -------------------------------------------------------------------------- */

function CoffeeCollage({ images }: { images: ImageItem[] }) {
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-5">
      {/* Main image */}
      <div className="relative col-span-12 aspect-[16/10] overflow-hidden md:col-span-7 md:aspect-[4/3]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Small vertical image */}
      <div className="relative col-span-5 aspect-[4/5] overflow-hidden md:col-span-3 md:mt-20">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          sizes="(max-width: 768px) 42vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Small square */}
      <div className="relative col-span-7 aspect-square overflow-hidden md:col-span-2 md:mt-56">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          sizes="(max-width: 768px) 58vw, 17vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Bottom image */}
      <div className="relative col-span-12 aspect-[16/9] overflow-hidden md:col-span-6 md:ml-[8%] md:mt-8">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* FILM                                                                       */
/* -------------------------------------------------------------------------- */

function FilmCollage({ images }: { images: ImageItem[] }) {
  return (
    <div className="grid grid-cols-12 items-start gap-3 md:gap-5">
      {/* Vertical photograph */}
      <div className="relative col-span-7 aspect-[3/4] overflow-hidden md:col-span-4 md:ml-[5%]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 768px) 58vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Wide photograph */}
      <div className="relative col-span-5 mt-12 aspect-[4/3] overflow-hidden md:col-span-5 md:mt-24">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          sizes="(max-width: 768px) 42vw, 42vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Small photograph */}
      <div className="relative col-span-5 aspect-[4/5] overflow-hidden md:col-span-3 md:mt-10">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          sizes="(max-width: 768px) 42vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Camera */}
      <div className="relative col-span-7 aspect-[4/3] overflow-hidden md:col-span-4 md:ml-[12%] md:mt-[-5%]">
        <Image
          src={images[4].src}
          alt={images[4].alt}
          fill
          sizes="(max-width: 768px) 58vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Last photograph */}
      <div className="relative col-span-12 aspect-[16/8] overflow-hidden md:col-span-6 md:ml-auto md:mt-16">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CLOTHES                                                                    */
/* -------------------------------------------------------------------------- */

function ClothesCollage({ images }: { images: ImageItem[] }) {
  return (
    <div className="grid grid-cols-12 items-start gap-3 md:gap-5">
      {/* Large hero */}
      <div className="relative col-span-12 aspect-[16/10] overflow-hidden md:col-span-8 md:aspect-[4/3]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 768px) 100vw, 67vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Small image */}
      <div className="relative col-span-6 aspect-[4/5] overflow-hidden md:col-span-3 md:mt-24">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Detail */}
      <div className="relative col-span-6 aspect-square overflow-hidden md:col-span-2 md:mt-64">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          sizes="(max-width: 768px) 50vw, 17vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>

      {/* Bottom wide image */}
      <div className="relative col-span-12 aspect-[16/9] overflow-hidden md:col-span-7 md:ml-[8%] md:mt-12">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}