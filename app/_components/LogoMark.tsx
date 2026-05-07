import Image from "next/image";

export default function LogoMark({
  className,
  title = "PRADA BC",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div className={[className, "relative flex items-center justify-center"].join(" ")}>
      <Image
        src="/pradabc.png"
        alt={title}
        width={180}
        height={135}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
}
