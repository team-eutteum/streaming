import { Button, Modal } from '@/components';

function ModalOneClickBugs({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="bugs">BUGS</Modal.Title>
      <Modal.Body>
        <div className="list-wrap">
          <p className="list-tit f-bd3">ANDROID & IOS</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/5fshyjfs'}>
                원클릭
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-1">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/3b36y49n'}>
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
