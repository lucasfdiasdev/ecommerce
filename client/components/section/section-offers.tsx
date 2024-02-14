import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const SectionOffers = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-between">
        <h6 className="font-bold">Offers of the day</h6>
        <Link href={"#"}>Ver mais</Link>
      </div>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <Card>
          <CardContent className="relative h-[380px] md:h-[400px] w-full overflow-hidden rounded-lg bg-black sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
            <Image
              width={320}
              height={320}
              src={"/offers1.png"}
              alt={"offer"}
              className=" object-cover object-center"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="relative h-[380px] md:h-[400px] w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
            <Image
              width={320}
              height={320}
              src={"/offers2.png"}
              alt={"banner"}
              className=" object-cover object-center"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="relative h-[380px] md:h-[400px] w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
            <Image
              width={320}
              height={320}
              src={"/offers1.png"}
              alt={"banner"}
              className=" object-cover object-center"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SectionOffers;
