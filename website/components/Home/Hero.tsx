import Image from "next/image";
import bgImage from "/public/bg.webp";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[400px] bg-red-700 flexCenter">
      <div className="deadCenter w-full bg-black bg-opacity-80">
        <Image
          src={bgImage}
          alt="bg-image tech table"
          className="w-full h-full"
        />
      </div>
      <h1 className="text-center text-4xl font-bold z-[1]">
        Find definitions to every strange technical words.
      </h1>
    </section>
  );
}
//   <Image
//     src={bgImage}
//     alt="bg-image"
//     className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2"
//   />
