import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className,
  titleClassName = "text-4xl font-bold text-brand-text",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-brand-cyan text-sm font-mono tracking-[4px] uppercase mb-4">
        {eyebrow}
      </p>

      <h2 className={titleClassName}>{title}</h2>
    </div>
  );
}
