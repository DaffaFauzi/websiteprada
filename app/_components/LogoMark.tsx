import Image from "next/image";

export default function LogoMark({
  className,
  title = "PRADA BC",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div className={[className, "flex items-center justify-center overflow-hidden bg-white rounded-[25%]"].join(" ")}>
      <Image
        src="/pradabc.png"
        alt={title}
        width={180}
        height={135}
        className="h-[90%] w-auto object-contain"
        priority
      />
    </div>
  );
}
