import Link from "next/link";
import SwiperItemBestSellers from "./_components/swiper-item-best-sellers";

const SectionCollectionBestSellers = () => {
  return (
    <div className="gap-4 pt-5">
      <div className="flex flex-col">
        <div className="flex-between">
          <h6 className="font-bold">Best Sellers Colletion</h6>
          <Link href={"#"}>Ver mais</Link>
        </div>
        <div className="py-5">
          <SwiperItemBestSellers />
        </div>
      </div>
    </div>
  );
};

export default SectionCollectionBestSellers;
