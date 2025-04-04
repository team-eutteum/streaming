import BugsGuide from '@/images/id_guide/img-id-guide-bugs.jpg';
import GenieGuide from '@/images/id_guide/img-id-guide-genie.jpg';
import MelonGuide from '@/images/id_guide/img-id-guide-melon.jpg';
import { CONST } from '@/lib/constants';

import CommonGuideLayout from '../../_components/CommonGuideLayout';

function DetailList() {
  const tabs = [
    {
      label: CONST.TITLE.MELON,
      image: MelonGuide,
    },
    {
      label: CONST.TITLE.GENIE,
      image: GenieGuide,
    },
    {
      label: CONST.TITLE.BUGS,
      image: BugsGuide,
    },
    {
      label: CONST.TITLE.FLO,
      image: MelonGuide,
    },
  ];

  return (
    <CommonGuideLayout
      uniqueId="musicIdCreate"
      updateDate="2024.12.03"
      tabTitleContent={tabs}
      label={CONST.TITLE.MUSIC_ID_CREATE}
    />
  );
}

export default DetailList;
