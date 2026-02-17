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
              <Button size="lg" href={'https://tinyurl.com/bdchm2pt'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">IOS</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/5uad99fz'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/4fxn9e74'}>
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
