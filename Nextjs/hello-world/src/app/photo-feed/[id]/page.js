import Image from "next/image";
import WonderImages from "../wonders";

export default function PhotoPage({ params }) {
  const photo = WonderImages.find((image) => image.id === params.id);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
      <button>Back</button>
        <div>
          <h1 className="text-lg font-bold">{photo?.name}</h1>
        </div>
        <Image
          alt={photo?.name}
          src={photo?.src}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-white py-4">
          <h3 className="font-semibold text-red-500" >{photo?.loaction}</h3>
        </div>
      </div>
    </div>
  );
}
