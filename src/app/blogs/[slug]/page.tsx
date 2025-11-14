import BlogData from "@/components/BlogData";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { blogsData } from "../page";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogCardDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  console.log("Slug param:", blog);

  return (
    <main className="min-h-screen bg-[#ECE9E6] relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/Pricing-Bg.png"
        alt="Background"
        className="absolute inset-0 w-[-webkit-fill-available] h-[1024px] object-cover"
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Pass SLUG to BlogData if needed */}
        <BlogData blog={blog} />

        <Footer />
      </div>
    </main>
  );
}
