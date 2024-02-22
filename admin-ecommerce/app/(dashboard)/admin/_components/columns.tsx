"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  totalPrice: string;
  createdAt: string;
  status: "Pending" | "Completed" | "Canceled" | "Hold";
  costumer: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "costumer",
    header: "Cliente",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Preco",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
];
