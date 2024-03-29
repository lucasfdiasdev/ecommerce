import { HiChevronDown } from "react-icons/hi";
import { MdChevronLeft } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { GrBlog, GrCatalog } from "react-icons/gr";
import { LayoutDashboard, LogOut, User2 } from "lucide-react";

import { formatter } from "./utils";

export const sidebarRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    color: "text-sky-500",
  },
  {
    label: "Costumers",
    icon: User2,
    href: "/admin/costumers",
    color: "text-sky-500",
  },
  {
    label: "Produtos",
    icon: GrCatalog,
    href: "#",
    color: "text-sky-500",
    chevronIconLeft: MdChevronLeft,
    chevronIconDown: HiChevronDown,
    list: [
      {
        label: "Add Produto",
        href: "/admin/add-product",
      },
      {
        label: "Lista Produtos",
        href: "/admin/list-products",
      },
      {
        label: "Marca",
        href: "/admin/brand",
      },
      {
        label: "Lista Marca",
        href: "/admin/list-brand",
      },
      {
        label: "Categoria",
        href: "/admin/category",
      },
      {
        label: "Lista Categoria",
        href: "/admin/list-category",
      },
    ],
  },
  {
    label: "Blog",
    icon: GrBlog,
    href: "#",
    color: "text-sky-500",
    chevronIconLeft: MdChevronLeft,
    chevronIconDown: HiChevronDown,
    list: [
      {
        label: "Add Blog",
        href: "/admin/add-blog",
      },
      {
        label: "Blog Lista",
        href: "/admin/blog-list",
      },
      {
        label: "Blog Categoria",
        href: "/admin/add-blog-category",
      },
      {
        label: "Blog Categoria Lista",
        href: "/admin/blog-cat-list",
      },
    ],
  },
  {
    label: "Orders",
    icon: FaClipboardList,
    href: "/admin/orders",
    color: "text-sky-500",
  },
  {
    label: "Perguntas",
    icon: BiConversation,
    href: "/admin/enquires",
    color: "text-sky-500",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "#",
    color: "text-sky-500",
  },
];

export const orders = [
  {
    id: 1,
    status: "Pending",
    costumer: "Giordano Alberes",
    createdAt: "2021-01-01",
    totalPrice: formatter.format(100),
  },
];

export const enquires = [
  {
    id: 1,
    status: "Pending",
    costumer: "Giordano Alberes",
    createdAt: "2021-01-01",
    totalPrice: formatter.format(100),
  },
];

export const blog = [
  {
    id: 1,
    status: "Pending",
    costumer: "Giordano Alberes",
    createdAt: "2021-01-01",
    totalPrice: formatter.format(100),
  },
];

export const blogCategory = [
  {
    id: 1,
    status: "Pending",
    costumer: "Giordano Alberes",
    createdAt: "2021-01-01",
    totalPrice: formatter.format(100),
  },
];
