"use client";

import Link from "next/link";
import Image from "next/image";

import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

import Breadcrumb from "@/components/breadcrumb";
import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectItem,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationLink,
  PaginationNext,
  PaginationItem,
  PaginationContent,
  PaginationEllipsis,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { featuredRoutes, routerRandomProduct, routerTag } from "@/lib/data";
import CollectionItem from "@/components/section/_components/collection-item";

const StorePage = () => {
  return (
    <>
      <MainLayout>
        <Breadcrumb />
      </MainLayout>
      <section className="bg-zinc-200">
        <MainLayout>
          <div className="py-5 flex flex-col md:flex-row items-start gap-2">
            {/* left */}
            <div className="flex-[1] flex flex-col gap-2">
              {/* categories */}
              <Card>
                <CardContent className="py-5">
                  <div className="space-y-8">
                    <h6 className="font-bold">Shop by categories</h6>
                    <div className="flex flex-col">
                      <Link
                        href={"#"}
                        className="text-muted-foreground text-sm"
                      >
                        Home
                      </Link>
                      <Link
                        href={"#"}
                        className="text-muted-foreground text-sm"
                      >
                        Our Store
                      </Link>
                      <Link
                        href={"#"}
                        className="text-muted-foreground text-sm"
                      >
                        Blogs
                      </Link>
                      <Link
                        href={"#"}
                        className="text-muted-foreground text-sm"
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* filters */}
              <Card>
                <CardContent className="py-5">
                  <div className="space-y-8">
                    <h4 className="font-bold">Filter by</h4>
                    {/* availability */}
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold">Availability</h5>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          In Stock
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          In Stock
                        </span>
                      </div>
                    </div>

                    {/* price */}
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold">Price</h5>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          R${" "}
                          <input
                            type="text"
                            className="border rounded-md w-full"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          R${" "}
                          <input
                            type="text"
                            className="border rounded-md w-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* color */}
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold">Color</h5>
                      <div className="flex flex-wrap">
                        <ul className="colors flex flex-wrap gap-2">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>

                    {/* size */}
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold">Size</h5>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          S (10)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          M (10)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          L (12)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          XL (4)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="cursor-pointer" />
                        <span className="text-muted-foreground text-sm">
                          XXL (8)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* tags */}
              <Card>
                <CardContent className="py-5">
                  <div className="space-y-8">
                    <h6 className="font-bold">Product Tag</h6>
                    <div className="flex flex-wrap gap-2">
                      {routerTag.map((route) => (
                        <Link
                          href={route.href}
                          key={route.label}
                          className="p-2 rounded-md bg-zinc-200 text-xs hover:bg-zinc-200/40 transition-all"
                        >
                          {route.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* random product */}
              <Card>
                <CardContent className="py-5">
                  <div className="space-y-8">
                    <h6 className="font-bold">Product Tag</h6>
                    <div className="flex flex-wrap space-y-4">
                      {routerRandomProduct.map((route) => (
                        <Link
                          key={route.label}
                          href={route.href}
                          className="flex items-start gap-2"
                        >
                          <Image
                            src={route.src}
                            alt={route.label}
                            width={60}
                            height={60}
                            className="object-contain object-center"
                          />
                          <div className="flex flex-col space-y-2">
                            <div>
                              <h5 className="text-xs font-semibold line-clamp">
                                {route.label}
                              </h5>
                              <div className="flex items-center text-xs text-yellow-500">
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <FaRegStar />
                              </div>
                            </div>
                            <span className="font-semibold">
                              {" "}
                              R$ {route.price}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* right */}
            <div className="flex-[3] flex flex-col gap-2">
              {/* sort  */}
              <Card>
                <CardContent className="flex-between py-2">
                  <div className="flex items-center gap-4">
                    <span className="flex flex-nowrap ">Sort by:</span>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Ordenar por..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="best-selling">
                            Best Selling
                          </SelectItem>
                          <SelectItem value="title-ascending">
                            Alphabetically, A-Z
                          </SelectItem>
                          <SelectItem value="title-descending">
                            Alphabetically, Z-A
                          </SelectItem>
                          <SelectItem value="price-ascending">
                            Price, low to high
                          </SelectItem>
                          <SelectItem value="price-descending">
                            Price, high to low
                          </SelectItem>
                          <SelectItem value="created-ascending">
                            Date, old to new
                          </SelectItem>
                          <SelectItem value="created-descending">
                            Date, new to old
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">21 products</p>
                  </div>
                </CardContent>
              </Card>

              {/* cards item */}
              <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full">
                {featuredRoutes.map((route) => (
                  <CollectionItem
                    src={route.src}
                    key={route.label}
                    href={route.href}
                    alt={route.label}
                    label={route.label}
                    price={route.price}
                    category={route.category}
                    priceOffset={route.priceOffset}
                    hrefCategory={route.hrefCategory}
                    badgeDiscount={route.badgeDiscount}
                  />
                ))}
              </div>
              {/* pagination */}
              <div className="flex items-center justify-between">
                <div className="max-w-fit w-full bg-zinc-100 p-2 rounded-md">
                  <p className="text-muted-foreground text-xs flex-nowrap">
                    Showing 15 of 21.
                  </p>
                </div>
                <Pagination className="flex items-center justify-end">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </MainLayout>
      </section>
    </>
  );
};

export default StorePage;
