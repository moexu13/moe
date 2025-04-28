"use client";

import Breadcrumb from "./Breadcrumb";

interface BlogBreadcrumbProps {
  title: string;
  slug: string;
}

const BlogBreadcrumb = ({ title, slug }: BlogBreadcrumbProps) => {
  return (
    <div className="mb-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title, href: `/blog/${slug}`, current: true },
        ]}
      />
    </div>
  );
};

export default BlogBreadcrumb;
