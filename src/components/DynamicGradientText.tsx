import React from "react";
import Badge from "./Badge";
import Heros from "./Heros";
interface DynamicGradientTextProps {
  badgeText?: string;
  title: string;
  description: string;
  lineHeight?: string;
}
const DynamicGradientText = ({
  badgeText,
  title,
  description,
  lineHeight,
}: DynamicGradientTextProps) => {
  return (
    <>
      {badgeText && (
        <div className="px-4 sm:px-6 lg:px-8">
          <Badge text={badgeText} />
        </div>
      )}

      <div className="px-4 sm:px-6 lg:px-8 ">
        <Heros
          title={title}
          description={description}
          lineHeight={lineHeight}
        />
      </div>
    </>
  );
};

export default DynamicGradientText;
