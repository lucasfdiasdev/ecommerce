import { blog } from "@/lib/data";

import { BlogClient } from "@/components/blog/client";
import { BlogColumn } from "@/components/blog/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogListPage = () => {
  const formattedBlog: BlogColumn[] = blog.map((item: any) => ({
    id: item.id,
    status: item.status,
    costumer: item.costumer,
    createdAt: item.createdAt,
    totalPrice: item.totalPrice,
  }));

  return (
    <>
      <h3 className="text-xl md:text-3xl font-bold mb-4">Blog List</h3>
      <div className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              <span>Blog List</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BlogClient data={formattedBlog} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BlogListPage;
