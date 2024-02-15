import HeaderBlog from "@/components/blog/header-blog";
import Footer from "@/components/footer";
import React from "react";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeaderBlog />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutPage;
