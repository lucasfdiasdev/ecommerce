import Link from "next/link";
import SwiperItemFeatured from "./_components/swiper-item-featured";

const SectionCollectionFeatured = () => {
  return (
    <div className="gap-4">
      <div className="flex flex-col">
        <div className="flex-between">
          <h6 className="font-bold">Featured Collection</h6>
          <Link href={"#"}>Ver mais</Link>
        </div>
        <div className="py-5">
          <SwiperItemFeatured />
        </div>
      </div>
    </div>
  );
};

export default SectionCollectionFeatured;
