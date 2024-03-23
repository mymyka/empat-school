import { Collection } from "@/types/collection";
import Image from "next/image";

export const Folder = ({ collection }: { collection: Collection }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image src={"/assets/img/folder.png"} alt={collection.title} width={100} height={150} />
        <div className=" absolute top-8 left-14">
          <Image
            src={collection.imageUrl}
            className=" object-none rounded-full"
            alt={"LOlA"}
            quality={100}
            width={30}
            height={150}
          />
        </div>
      </div>
      <p>{collection.title}</p>
    </div>
  );
};
