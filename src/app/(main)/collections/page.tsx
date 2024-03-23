import { Folder } from "@/components/folder";
import { Collection } from "@/types/collection";

const CollectionsPage = () => {
  let collection: Collection = {
    title: "LOL",
    imageUrl:
      "https://www.merchandisingplaza.ca/482403/2/Calendars-One-Piece-One-Piece-Square-Calendar-2023-l.jpg",
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="grid gap-10 justify-self-center justify-start grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
        <Folder collection={collection} />
      </div>
    </div>
  );
};

export default CollectionsPage;
