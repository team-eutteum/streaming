import { Button, Modal } from '@/components';

function ModalOneClickVibe({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="vibe">VIBE</Modal.Title>
      <Modal.Body>
        <div className="list-wrap">
          <p className="list-tit f-bd3">ANDROID & IOS</p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/yhx8k9v3'}>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/mrxa3dsa'}>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/3dn8hwbn'}>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/5xv8sz36'}>
                원클릭4
              </Button>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalOneClickVibe;
