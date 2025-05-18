import type { FC, SVGProps } from 'react';

interface NoDataProps {
  Icon?: FC<SVGProps<SVGSVGElement>>;
  txt: string;
}

function NoData({ Icon, txt }: NoDataProps) {
  return (
    <div className="no-data">
      {Icon && (
        <div className="img-wrap">
          <Icon />
        </div>
      )}
      <p className="txt f-bd3">{txt}</p>
    </div>
  );
}

export default NoData;
