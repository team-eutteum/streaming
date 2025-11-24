import { Button, Modal } from '@/components';

function ModalOneClickGenie({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="genie">GENIE</Modal.Title>
      <Modal.Body>
        <div className="list-wrap">
          <p className="list-tit f-bd3">ANDROID</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/4k6jh8a6'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">IOS</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/3xyyzpu3'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/ejywnd2k'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalOneClickGenie;
