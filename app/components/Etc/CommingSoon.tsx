import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function CommingSoon() {
  return (
    <div className="comming-soon">
      <span className="icon">
        <i>
          <ExclamationTriangleIcon />
        </i>
      </span>
      <div className="txt f-bd2">추후 공개 예정입니다.</div>
    </div>
  );
}

export default CommingSoon;
