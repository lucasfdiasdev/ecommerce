"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, BlogColumn } from "./columns";

interface BlogClientProps {
  data: BlogColumn[];
}

export const BlogClient: React.FC<BlogClientProps> = ({ data }) => {
  return (
    <>
      <DataTable searchKey="Cliente" columns={columns} data={data} />
    </>
  );
};
