import { cn } from '../../lib/cn';

type GoldenThreadProps = {
  className?: string;
};

export default function GoldenThread({ className }: GoldenThreadProps) {
  return <div className={cn('golden-thread', className)} aria-hidden />;
}
