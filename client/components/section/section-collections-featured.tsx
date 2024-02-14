import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CollectionItem from "./_components/collection-item";

const SectionCollectionFeatured = () => {
  const featuredRoutes = [
    {
      label: "Notebook",
      price: 899,
      href: "/",
      category: "Notebook",
      src: "/category1.png",
    },
    {
      label: "Notebook",
      price: 899,
      href: "/",
      category: "Notebook",
      src: "/category3.png",
    },
    {
      label: "Notebook",
      price: 899,
      href: "/",
      category: "Notebook",
      src: "/category2.png",
    },
    {
      label: "Notebook",
      price: 899,
      href: "/",
      category: "Notebook",
      src: "/category4.png",
    },
    {
      label: "Notebook",
      price: 899,
      href: "/",
      category: "Notebook",
      src: "/category6.png",
    },
  ];

  return (
    <>
      <div className="row gap-4 py-5">
        <div className="flex flex-col">
          <h6 className="font-bold">Featured Collections</h6>
          <div className="p-5">
            <Carousel>
              <CarouselContent>
                {featuredRoutes.map((route) => (
                  <CarouselItem
                    key={route.label}
                    className="sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
                  >
                    <CollectionItem
                      key={route.label}
                      src={route.src}
                      alt={route.label}
                      label={route.label}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionCollectionFeatured;
