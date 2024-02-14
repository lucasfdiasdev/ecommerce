import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

interface CollectionItemProps {
  src: string;
  alt: string;
  label: string;
  href?: string;
  price?: number;
  category?: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  src,
  alt,
  href,
  price,
  label,
  category,
}) => {
  return (
    <Card className="max-w-[320px] md:max-w-[280px] h-[420px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </CardHeader>
      <CardContent>
        <p>{label}</p>
        <p>{category}</p>
      </CardContent>
      <CardFooter>
        <button>Card Footer</button>
      </CardFooter>
    </Card>
  );
};

export default CollectionItem;
