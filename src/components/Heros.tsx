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

export default function Heros({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="text-center max-w-[44rem] mx-auto">
          {/* Render Title if provided */}
          {title && <H1 dangerouslySetInnerHTML={{ __html: title }} />}

          {/* Render Description if provided */}
          {description && (
            <Body className="mt-7 font-inter-tight font-medium text-[18px] leading-[24px] text-center align-middle !text-[#888d96da]">
              {description}
            </Body>
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
