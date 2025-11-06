"use client";
import React from "react";
import { Body } from "@/components/Typography";
import Button from "./Button";
import ButtonPrimary from "./Button-primary";
import BlurText from "./BlurText";
import { useRouter } from "next/navigation";

interface HeroProps {
  title?: string | any;
  className?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string | any;
  secondaryButtonHref?: string | any;
}

export default function Heros({
  title,
  className,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref = null,
  secondaryButtonHref = null,
}: HeroProps) {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="text-center max-w-[44rem] mx-auto">
          {/* Render Title if provided */}

          {title && (
            <BlurText
              text={title}
              delay={150}
              animateBy="words"
              direction="top"
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight ${className}`}
            />
          )}

          {/* Render Description if provided */}
          {description && (
            <Body className="mt-2 font-inter-tight font-medium text-[18px] leading-[24px] text-center align-middle !text-[#4C4C4C]">
              {description}
            </Body>
          )}

          {/* Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex items-center justify-center my-4 gap-2">
              {primaryButtonText && (
                <div>
                  <ButtonPrimary
                    onClick={() => {
                      if (primaryButtonHref && primaryButtonHref != "") {
                        router.push(primaryButtonHref);
                      }
                    }}
                  >
                    {primaryButtonText}
                  </ButtonPrimary>
                </div>
              )}
              {secondaryButtonText && (
                <div>
                  <Button
                    onClick={() => {
                      if (secondaryButtonHref && secondaryButtonHref != "") {
                        router.push(secondaryButtonHref);
                      }
                    }}
                  >
                    {secondaryButtonText}
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
