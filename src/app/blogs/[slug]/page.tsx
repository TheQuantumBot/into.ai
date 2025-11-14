import BlogData from "@/components/BlogData";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { blogsData, generateSlug } from "../page";

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: generateSlug(blog.title),
  }));
}

export default function BlogCardDetails({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogsData.find((b) => generateSlug(b.title) === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <main className="min-h-screen bg-[#ECE9E6] relative overflow-hidden">
      <img
        src="/Pricing-Bg.png"
        alt="Background"
        className="absolute inset-0 w-full h-[1024px] object-cover"
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Blog Detail Component */}
        <BlogData blog={blog} />

        <Footer />
      </div>
    </main>
  );
}
