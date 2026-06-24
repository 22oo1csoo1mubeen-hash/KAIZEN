import { cn } from '../utils/cn';

interface GlowOrbProps {
  color?: 'coral' | 'amber' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string; transform?: string };
}

export function GlowOrb({ 
  color = 'coral', 
  size = 'md', 
  className,
  position 
}: GlowOrbProps) {
  const colorMap = {
    coral: 'bg-[#FF6B6B]',
    amber: 'bg-[#FF8A65]',
    emerald: 'bg-[#34D399]',
  };

  const sizeMap = {
    sm: 'w-32 h-32 blur-2xl',
    md: 'w-64 h-64 blur-3xl',
    lg: 'w-96 h-96 blur-[100px]',
    xl: 'w-[600px] h-[600px] blur-[150px]',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full opacity-20 var(--animate-breathe)',
        colorMap[color],
        sizeMap[size],
        className
      )}
      style={{
        ...position,
        zIndex: 0,
        pointerEvents: 'none',
        mixBlendMode: 'screen'
      }}
    />
  );
}
