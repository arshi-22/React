import Modal from "@/app/components/modal";
import WonderImages from "@/app/photo-feed/wonders";
import Image from "next/image";

export default function PhotoModal({ params }) {
  const photo = WonderImages.find((image) => image.id === params.id);

  return (
    <Modal>
      <Image
        alt={photo?.name}
        src={photo?.src}
        className="object-cover aspect-square max-h-[70vh] w-full"
      />
      <div className="bg-white py-4">
        <h3 className="text-lg font-bold">{photo?.name}</h3>
        <h3 className="font-semibold text-red-500">{photo?.loaction}</h3>
      </div>
    </Modal>
  );
}
