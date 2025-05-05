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
              <Button size="lg" href={'https://tinyurl.com/2yv3tnhf'}>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/bde2rk52'}>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/29nw6t39'}>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/4428yduj'}>
                원클릭4
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">IOS</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/ysxyf2b4'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalOneClickMelon;
