import { HiChevronDown } from "react-icons/hi";
import { MdChevronLeft } from "react-icons/md";
import { BiConversation } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { GrBlog, GrCatalog } from "react-icons/gr";
import { LayoutDashboard, LogOut, User2 } from "lucide-react";

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
    label: "Ordens",
    icon: FaClipboardList,
    href: "/admin/orders",
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
    href: "/admin/blog",
    color: "text-sky-500",
    chevronIconLeft: MdChevronLeft,
    chevronIconDown: HiChevronDown,
    list: [
      {
        label: "Add Blog",
        href: "/admin/add-blog",
      },
      {
        label: "Blog Categoria",
        href: "/admin/add-blog-category",
      },
      {
        label: "Blog Categoria Lista",
        href: "/admin/blog-category-list",
      },
    ],
  },
  {
    label: "Perguntas",
    icon: BiConversation,
    href: "#",
    color: "text-sky-500",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "#",
    color: "text-sky-500",
  },
];
