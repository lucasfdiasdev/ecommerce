"use client";

import { ColumnDef } from "@tanstack/react-table";

export type EnquiresColumn = {
  id: string;
  totalPrice: string;
  createdAt: string;
  status: string;
  costumer: string;
};

export const columns: ColumnDef<EnquiresColumn>[] = [
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
