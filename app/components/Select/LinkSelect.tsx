import Link from 'next/link';

interface LinkSelectProps {
  href: string;
  label: string;
}

function LinkSelect({ href, label }: LinkSelectProps) {
  return (
    <Link className="f-bd4" href={href}>
      {label}
    </Link>
  );
}

export default LinkSelect;
