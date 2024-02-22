"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, OrderColumn } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <DataTable searchKey="Cliente" columns={columns} data={data} />
    </>
  );
};
