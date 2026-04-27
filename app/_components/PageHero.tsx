import Container from "@/app/_components/Container";
import GeometricBackdrop from "@/app/_components/GeometricBackdrop";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-surface-2 via-ink to-ink">
      <GeometricBackdrop className="opacity-60" />
      <Container className="relative py-12 sm:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-ink/50 px-4 py-2 text-xs font-semibold tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-snow sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-snow/80 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
