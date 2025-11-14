import BlogData from "@/components/BlogData";
import { BolgsCard } from "@/components/BolgsCard";
import CtaCard from "@/components/CtaCard";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Heros from "@/components/Heros";
import OurBlogs from "@/components/OurBlogs";
export const blogsData = [
  {
    image: "/cardImage1.svg",
    title: "What Is SalesBot and How It’s Revolutionizing WhatsApp Sales",
    slug: "what-is-salesbot-and-how-its-revolutionizing-whatsapp-sales",
    description:
      "Ever wished your sales team could reply faster, sell smarter, and close deals around the clock - without hiring....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Innovation",
  },
  {
    image: "/cardImage2.svg",
    title: "Why Businesses Are Switching to AI-Powered Sales Agents",
    slug: "why-businesses-are-switching-to-ai-powered-sales-agents",
    description:
      "Let’s be honest, customers today don’t wait. They ask, compare, and expect instant responses....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Growth",
  },
  {
    image: "/cardImage.svg",
    title: "How SalesBot Converts Chats into Paying Customers",
    slug: "how-salesbot-converts-chats-into-paying-customers",
    description:
      "Most businesses believe that sales start the moment a rep steps in, but in reality, it starts way before when....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "AI & Tech",
  },
  {
    image: "/cardImage3.svg",
    title: "The Secret behind Salesbot’s Humanised Conversations",
    slug: "the-secret-behind-salesbots-humanised-conversations",
    description:
      "Ever chatted with a bot and forgot it wasn't a person? If you have there's a good chance you....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Industries",
  },
  {
    image: "/cardImage4.svg",
    title:
      "The Science Behind SalesBot: How It Understands and Sells Like a Human",
    slug: "the-science-behind-salesbot-how-it-understands-and-sells-like-a-human",
    description:
      "You’ve probably chatted with a bot before the kind that repeats your question, gives a wrong answer....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Marketing",
  },
  {
    image: "/cardImage5.svg",
    title:
      "How SalesBot Helps Businesses Scale Without Hiring More Salespeople",
    slug: "how-salesbot-helps-businesses-scale-without-hiring-more-salespeople",
    description:
      "Every business hits that moment leads are pouring in, inboxes are exploding, and your sales team....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "AI & Tech",
  },
  {
    image: "/cardImage6.svg",
    title: "The Rise of Agentic AI: Why It’s the Future of Sales Conversations",
    slug: "the-rise-of-agentic-ai-why-its-the-future-of-sales-conversations",
    description:
      "There was a time when businesses thought “AI in sales” just meant having a chatbot that could answer FAQs.",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Innovation",
  },
  {
    image: "/cardImage7.svg",
    title:
      "From Inquiry to Closure: How SalesBot Handles the Entire Sales Funnel",
    slug: "from-inquiry-to-closure-how-salesbot-handles-the-entire-sales-funnel",
    description:
      "Every business gets inquiries but not every business turns them into paying customers.",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "AI & Tech",
  },
  {
    image: "/cardImage8.svg",
    title: "Behind the Scenes: How SalesBot’s Agentic AI Actually Works",
    slug: "behind-the-scenes-how-salesbots-agentic-ai-actually-works",
    description:
      "Ever wondered what’s happening inside SalesBot while it’s chatting with your customers? How it always....",
    footerImg: "/ProfileImage.svg",
    personName: "Joel Keneley",
    date: "November 12, 2025",
    category: "Growth",
  },
];

export default function blogsPage() {
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
        <OurBlogs />
        <hr className="pb-8" />
        <BolgsCard />
        <CtaCard
          HeadingTitle={`Ready to <span class="gradient-text">10X</span> Your Sales?`}
          Description="Thousands of business already using INTO AI to transform their lead
                    generation and conversion."
          PrimaryButton="Watch Demo"
          secondaryButton="Experience Now"
        />
        <Footer />
      </div>
    </main>
  );
}
