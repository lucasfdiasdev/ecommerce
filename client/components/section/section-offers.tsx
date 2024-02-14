import Link from "next/link";
import Image from "next/image";

const SectionOffers = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-between">
        <h6 className="font-bold">Offers of the day</h6>
        <Link href={"#"}>Ver mais</Link>
      </div>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 bg-black">
          {/* <Image
            width={480}
            height={480}
            src={"/banner1.jpg"}
            alt={"banner"}
            className="h-full w-full object-cover object-center"
          /> */}
        </div>

        <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 ">
          <Image
            width={480}
            height={480}
            src={"/banner2.jpg"}
            alt={"banner"}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
          <Image
            width={480}
            height={480}
            src={"/banner3.jpg"}
            alt={"banner"}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOffers;
