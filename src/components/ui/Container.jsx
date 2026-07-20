import { cn } from "@/utils/cn";

export default function Container({ children, className, as: Tag = "div", ...props }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </Tag>
  );
}
