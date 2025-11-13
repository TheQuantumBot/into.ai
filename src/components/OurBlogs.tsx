import React from "react";
import Badge from "./Badge";
import Heros from "./Heros";

export const OurBlogs = () => {
  return (
    <section className="relative overflow-hidden pt-[180px] pb-[48px]">
      <div className="text-center">
        <Badge text="Our Blogs" />
      </div>
      <div>
        <Heros
          className="font-inter-tight font-semibold text-[74px] leading-[82px] text-center align-middle text-black max-w-[577px] m-auto py-2"
          title={`Explore Insights That Drive Innovation`}
          description="Stay ahead with insights on AI, business growth, and real-world innovation. Discover trends and strategies to build smarter, grow faster, and lead with impact."
        />
      </div>
    </section>
  );
};
export default OurBlogs;
