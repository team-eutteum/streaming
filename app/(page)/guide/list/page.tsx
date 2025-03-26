import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

function ListPage() {
  return (
    <>
      <PageTitle label={CONST.TITLE.STREAMING_LIST} />
      <div>ListPage</div>
    </>
  );
}

export default ListPage;
