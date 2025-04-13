import Link from 'next/link';

interface LinkSelectProps {
  href?: string;
  label: string;
  onClick?: () => void;
}

function LinkSelect({ href, label, onClick }: LinkSelectProps) {
  if (href) {
    return (
      <Link className="f-bd4" href={href}>
        {label}
      </Link>
    );
  } else {
    return (
      <div className="select" onClick={onClick}>
        {label}
      </div>
    );
  }
}

export default LinkSelect;
