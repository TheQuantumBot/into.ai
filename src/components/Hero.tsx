// import React from "react";
// import { H1, Body } from "@/components/Typography";
// import Button from "./Button";
// import ButtonPrimary from "./Button-primary";

// interface HeroProps {
//   title?: string;
//   description?: string;
//   primaryButtonText?: string;
//   secondaryButtonText?: string;
// }

// export default function Hero({
//   title,
//   description,
//   primaryButtonText,
//   secondaryButtonText,
// }: HeroProps) {
//   return (
//     <section className="relative overflow-hidden  md:w-[564px] md:h-[296px]">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
//         <div className="text-center max-w-3xl mx-auto">
//           {/* Render Title if provided */}
//           {title && <H1 dangerouslySetInnerHTML={{ __html: title }} />}

//           {/* Render Description if provided */}
//           {description && (
//             <Body className="mt-4 max-w-2xl mx-auto">{description}</Body>
//           )}

//           {/* Buttons */}
//           {(primaryButtonText || secondaryButtonText) && (
//             <div className="flex items-center justify-center my-4">
//               {primaryButtonText && (
//                 <div className="mx-2">
//                   <ButtonPrimary>{primaryButtonText}</ButtonPrimary>
//                 </div>
//               )}
//               {secondaryButtonText && (
//                 <div className="mx-2">
//                   <Button>{secondaryButtonText}</Button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { H1, Body } from "@/components/Typography";
import Button from "./Button";
import ButtonPrimary from "./Button-primary";

interface HeroProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function Hero({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: HeroProps) {
  return (
    <section
      className="
        relative overflow-hidden 
        mx-auto
        w-[353px] h-[256px] gap-[60px] 
        sm:w-[564px] sm:h-[296px] sm:gap-[36px] 
        lg:w-[700px] lg:h-[334px] lg:gap-[36px]
        opacity-100
        top-[130px] left-[20px] sm:top-auto sm:left-auto
      "
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Render Title if provided */}
          {title && <H1 dangerouslySetInnerHTML={{ __html: title }} />}

          {/* Render Description if provided */}
          {description && (
            <Body className="mt-4 max-w-2xl mx-auto">{description}</Body>
          )}

          {/* Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex items-center justify-center my-6 gap-4 sm:my-4">
              {primaryButtonText && (
                <ButtonPrimary>{primaryButtonText}</ButtonPrimary>
              )}
              {secondaryButtonText && <Button>{secondaryButtonText}</Button>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
