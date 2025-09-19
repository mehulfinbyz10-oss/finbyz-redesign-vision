import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg",
          variant === "primary" && [
            "bg-gradient-to-r from-accent to-accent/90",
            "text-accent-foreground",
            "hover:shadow-[0_8px_32px_hsl(var(--accent)/0.4)]",
            "active:scale-95"
          ],
          variant === "secondary" && [
            "bg-white/10 backdrop-blur-sm border border-white/20",
            "text-white hover:bg-white/20",
            "hover:shadow-[0_8px_32px_hsl(var(--primary-glow)/0.2)]"
          ],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

HeroButton.displayName = "HeroButton";