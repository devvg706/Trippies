import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/G%C3%B6reme_Valley_in_Cappadocia_edit1.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Colourful_mountains_of_the_Zhangye_National_Geopark.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Raja_Ampat%2C_West_Papua%2C_Indonesia.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Pink_Sands_Beach%2C_Harbour_Island%2C_Bahamas_%285279465868%29.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/8/81/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_30-34_PAN.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mesones_Street_SnMiguelAllende2019.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

function ReviewCard({ img }) {
  return (
    <div
      className={cn(
        "relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border shadow-md",
        "border-gray-700 bg-gray-900/70 hover:bg-gray-800/80"
      )}
    >
      <img
        src={img}
        alt="Tourist Spot"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* First row */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>

      {/* Second row */}
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black"></div>
    </div>
  );
}
