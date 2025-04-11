import type { CommonContentProps } from '@/types/guide';
import dontationGuide from 'public/images/support/donation/donation.jpg';
import helperGuide from 'public/images/support/helper/helper.jpg';
import idDontationGuide from 'public/images/support/id/id.jpg';

import * as TITLE from './title.constant';
export const DONATION_CONTENT: CommonContentProps = {
  label: TITLE.DONATION,
  updateDate: '2025.03.30',
  uniqueId: 'dontationList',
  content: [
    {
      label: TITLE.DONATION,
      image: dontationGuide,
    },
  ],
};

export const ID_DONATION_CONTENT: CommonContentProps = {
  label: TITLE.ID_DONATION,
  updateDate: '2025.03.30',
  uniqueId: 'dontationList',
  content: [
    {
      label: TITLE.ID_DONATION,
      image: idDontationGuide,
    },
  ],
};

export const HELPER_CONTENT: CommonContentProps = {
  label: TITLE.HELPER,
  updateDate: '2025.03.30',
  uniqueId: 'helperList',
  content: [
    {
      label: TITLE.HELPER,
      image: helperGuide,
    },
  ],
};
