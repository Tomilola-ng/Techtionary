import Link from "next/link";

export default function MenuLink({
  url,
  label,
}: {
  url: string;
  label: string;
}) {
  return (
    <Link
      href={url}
      title="open modal to search for nigerian properties for sale"
      className="underline hover:decoration-primary decoration-transparent transition-all"
    >
      {label}
    </Link>
  );
}
