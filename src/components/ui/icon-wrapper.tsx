import { cn } from "@/lib/utils";

const IconWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("p-3 rounded-full bg-accent/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300", className)}>
      {children}
    </div>
  );
};

export default IconWrapper;
