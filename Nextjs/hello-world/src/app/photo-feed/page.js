import Link from "next/link";
import Image from "next/image";
import WonderImages from "./wonders";

export default function PhotofeedHome() {
  return (
    <main className="container mx-auto">
      <h2 className="text-center text-3xl font-bold my-4 text-green-700">
        7 Wonders of the world
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {WonderImages.map(({ id, src, name }) => (
          <div className="">
            <Link key={id} href={`/photo-feed/${id}`}>
              <Image
                alt={name}
                src={src}
                className="w-full object-cover aspect-square"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
