import { Button, Modal } from '@/components';

function ModalOneClickBugs({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="bugs">BUGS</Modal.Title>
      <Modal.Body>
        <div className="list-wrap">
          <p className="list-tit f-bd3">
            ANDROID & IOS{' '}
            <span
              style={{
                fontSize: '12rem',
                fontWeight: 300,
              }}
            >
              (*크롬으로 작동 안 할 경우 사파리로 시도 부탁드립니다.)
            </span>
          </p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/6p7869yr'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/yc74w8x6'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalOneClickBugs;
