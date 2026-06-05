import GoldenThread from './GoldenThread';

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h1 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">{title}</h1>
      <p className="font-accent italic text-xl text-muted-foreground">{subtitle}</p>
      <div className="w-[90px] h-[1px] bg-[#d3a24b] mx-auto mt-7"></div>
    </div>
  );
}
