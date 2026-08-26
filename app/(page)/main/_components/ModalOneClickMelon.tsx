import { Button, Modal } from '@/components';

function ModalOneClickMelon({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="melon">MELON</Modal.Title>
      <Modal.Body>
        <div className="list-wrap">
          <p className="list-tit f-bd3">ANDROID</p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/2s3p2szm'} noBlank>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/bdedxsw9'} noBlank>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/2s4fxj6k'} noBlank>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/3ph5ncvy'} noBlank>
                원클릭4
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">
            IOS{' '}
            <span
              style={{
                fontSize: '12rem',
                fontWeight: 300,
              }}
            >
              (*크롬으로 작동 안 할 경우 사파리로 시도 부탁드립니다.)
            </span>
          </p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/472p2mf3'}>
                아이폰
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/3bukhted'}>
                아이패드
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/j79eekbn'}>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/ysnp9f2t'}>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/56686jdn'}>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/bdfdf4vh'}>
                원클릭4
              </Button>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalOneClickMelon;
