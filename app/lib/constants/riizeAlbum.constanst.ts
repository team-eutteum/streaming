import BBBCheering from 'public/images/guide/cheering/BBB.jpg';
import BeMyNextCheering from 'public/images/guide/cheering/BeMyNext.jpg';
import GetAGuitarCheering from 'public/images/guide/cheering/GetAGuitar.jpg';
import Impossible from 'public/images/guide/cheering/Impossible.jpg';
import Love119Cheering from 'public/images/guide/cheering/Love119.jpg';
import LuckyCheering from 'public/images/guide/cheering/Lucky.jpg';
import MemoriesCheering from 'public/images/guide/cheering/Memories.jpg';
import SirenCheering from 'public/images/guide/cheering/Siren.jpg';
import TalkSexyCheering from 'public/images/guide/cheering/TalkSaxy.jpg';

export const FIRST_SINGLE = {
  value: 'single1',
  albumTitle: 'Get A Guitar',
  music: [
    {
      title: 'Get A Guitar',
      hasCheering: true,
      image: GetAGuitarCheering,
    },
    {
      title: 'Memories',
      hasCheering: true,
      image: MemoriesCheering,
    },
  ],
};

export const FIRST_MINI = {
  value: 'mini1',
  albumTitle: 'RIIZING',
  music: [
    {
      title: 'Boom Boom Bass',
      hasCheering: true,
      image: BBBCheering,
    },
    {
      title: 'Siren',
      hasCheering: true,
      image: SirenCheering,
    },
    {
      title: 'Impossible',
      hasCheering: true,
      image: Impossible,
    },
    {
      title: '9 Days',
      hasCheering: false,
    },
    {
      title: 'Honestly',
      hasCheering: false,
    },
    {
      title: 'One Kiss',
      hasCheering: false,
    },
    {
      title: 'Talk Saxy',
      hasCheering: true,
      image: TalkSexyCheering,
    },
    {
      title: 'Love 119',
      hasCheering: true,
      image: Love119Cheering,
    },
  ],
};

export const JP_FIRST_SINGLE = {
  value: 'jpSingle1',
  albumTitle: 'Lucky(RIIZE)',
  music: [
    { title: 'Lucky', hasCheering: true, image: LuckyCheering },
    { title: 'Be My Next', hasCheering: true, image: BeMyNextCheering },
    { title: 'Same Key', hasCheering: false },
  ],
};

export const JP_DIGITAL_SINGLE = {
  value: 'jpDigiSingle1',
  albumTitle: 'Love 119(Japanese Ver.)',
  music: [
    {
      title: 'Love 119',
      hasCheering: false,
    },
  ],
};
