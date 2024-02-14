"use client";

import Link from "next/link";
import Image from "next/image";

import { FaRegHeart } from "react-icons/fa6";
import {
  FaEye,
  FaStar,
  FaRegStar,
  FaShareAlt,
  FaStarHalfAlt,
} from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { CiShoppingCart } from "react-icons/ci";

interface CollectionItemProps {
  src: string;
  alt: string;
  label: string;
  href: string;
  price?: number;
  category?: string;
  priceOffset?: number;
  hrefCategory: string;
  badgeDiscount?: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({
  src,
  alt,
  href,
  price,
  label,
  category,
  priceOffset,
  hrefCategory,
  badgeDiscount,
}) => {
  return (
    <Card className="group h-[400px]">
      <CardHeader className="relative">
        {badgeDiscount && (
          <Badge className="max-w-fit absolute left-5 top-5">
            {badgeDiscount}
          </Badge>
        )}
        <FaRegHeart
          size={20}
          className="absolute right-5 top-4 cursor-pointer"
        />
        {/* actionsBar */}
        <div className="absolute transform transition-transform translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 flex flex-col right-3 top-10">
          <div className="p-2 hover:bg-orange-500 rounded-full cursor-pointer">
            <FaShareAlt size={20} className="visually-hidden md:block" />
          </div>
          <div className="p-2 hover:bg-orange-500 rounded-full cursor-pointer">
            <FaEye size={20} className="visually-hidden md:block" />
          </div>
          <div className="p-2 hover:bg-orange-500 rounded-full cursor-pointer">
            <CiShoppingCart size={20} className="visually-hidden md:block" />
          </div>
        </div>
        {/* img card */}
        <Link
          href={{ pathname: href }}
          className="flex items-center justify-center"
        >
          <Image
            src={src}
            alt={alt}
            width={140}
            height={140}
            className="object-contain mt-5"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={{ pathname: hrefCategory }}>
          <p className="text-sm text-green-600">{category}</p>
        </Link>
        <Link href={{ pathname: href }}>
          <h3 className="text-sm text-muted-foreground line-clamp hover:underline">
            {label}
          </h3>
        </Link>
        <div className="flex items-center text-xs text-yellow-500 my-4">
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <FaRegStar />
          <div className="ml-2">21</div>
        </div>
        {priceOffset ? (
          <div className="flex items-center gap-2">
            <h6 className="text-sm line-through text-muted-foreground">
              R$ {price}
            </h6>
            <h6 className="text-lg font-bold">R$ {priceOffset}</h6>
          </div>
        ) : (
          <h6 className="text-lg font-bold mt-4">R$ {price}</h6>
        )}
      </CardContent>
    </Card>
  );
};

export default CollectionItem;
