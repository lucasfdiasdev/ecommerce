"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns, BlogCategoryColumn } from "./columns";

interface BlogCategoryClientProps {
  data: BlogCategoryColumn[];
}

export const BlogCategoryClient: React.FC<BlogCategoryClientProps> = ({
  data,
}) => {
  return (
    <>
      <DataTable searchKey="Cliente" columns={columns} data={data} />
    </>
  );
};
