import React from "react";
import { H1, Body } from "@/components/Typography";
import Button from "./Button";
import ButtonPrimary from "./Button-primary";

interface HeroProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

export default function Hero({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  className = "",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="text-center max-w-[44rem] mx-auto">
          {/* Render Title if provided */}
          {title && <H1 dangerouslySetInnerHTML={{ __html: title }} className={className} />}

          {/* Render Description if provided */}
          {description && (
            <Body className="mt-4 max-w-[43rem] mx-auto !text-[#808080] font-inter-tight font-medium text-[18px] leading-[24px] text-center align-middle   md:text-sm [@media(max-width:375px)]:text-[16px] [@media(max-width:375px)]:font-[500] [@media(max-width:375px)]:leading-[24px]  ">{description}</Body>
          )}

          {/* Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex items-center justify-center my-4 gap-4">
              {primaryButtonText && (
                <div>
                  <ButtonPrimary>{primaryButtonText}</ButtonPrimary>
                </div>
              )}
              {secondaryButtonText && (
                <div>
                  <Button>{secondaryButtonText}</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
