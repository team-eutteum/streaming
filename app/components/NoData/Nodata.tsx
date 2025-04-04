import { PhotoIcon } from '@heroicons/react/24/outline';

interface NoDataProps {
  txt: string;
}

function NoData({ txt }: NoDataProps) {
  return (
    <div className="no-data">
      <div className="img-wrap">
        <PhotoIcon />
      </div>
      <p className="txt f-bd3">{txt}</p>
    </div>
  );
}

export default NoData;
