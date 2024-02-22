import { blogCategory } from "@/lib/data";

import { BlogClient } from "@/components/blog/client";
import { BlogCategoryColumn } from "@/components/blog-category/columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogCategoryListPage = () => {
  const formattedBlogCategory: BlogCategoryColumn[] = blogCategory.map(
    (item: any) => ({
      id: item.id,
      status: item.status,
      costumer: item.costumer,
      createdAt: item.createdAt,
      totalPrice: item.totalPrice,
    })
  );

  return (
    <>
      <h3 className="text-xl md:text-3xl font-bold mb-4">Blog Category List</h3>
      <div className="mt-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              <span>Blog Category List</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BlogClient data={formattedBlogCategory} />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BlogCategoryListPage;
