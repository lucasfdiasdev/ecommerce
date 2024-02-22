"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, EnquiresColumn } from "./columns";

interface EnquiresClientProps {
  data: EnquiresColumn[];
}

export const EnquiresClient: React.FC<EnquiresClientProps> = ({ data }) => {
  return (
    <>
      <DataTable searchKey="Cliente" columns={columns} data={data} />
    </>
  );
};
