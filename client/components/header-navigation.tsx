"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const HeaderNavigation = () => {
  const routes = [
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "tes1",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
        {
          title: "test3",
          href: "/test3",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
    {
      title: "Notebook",
      href: "/",
      categories: [
        {
          title: "test",
          href: "/",
        },
        {
          title: "test2",
          href: "/test2",
        },
        {
          title: "test3",
          href: "/test3",
        },
      ],
    },
  ];

  const routesLink = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <NavigationMenu className="-ml-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Todas as categorias
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-4 lg:w-[600px] ">
              {routes.map((route) => (
                <li key={route.title} className="flex flex-col">
                  <NavigationMenuLink href={route.href}>
                    {route.title}
                  </NavigationMenuLink>
                  {route.categories.map((category) => (
                    <NavigationMenuLink
                      key={category.title}
                      href={category.href}
                    >
                      {category.title}
                    </NavigationMenuLink>
                  ))}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="text-md flex flex-row items-center gap-8">
          {routesLink.map((route) => (
            <NavigationMenuLink
              className=""
              key={route.title}
              href={route.href}
            >
              {route.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigation;
