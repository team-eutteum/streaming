import { Button, Modal } from '@/components';

function ModalOneClickVibe({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <Modal.Title className="vibe">VIBE</Modal.Title>
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
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/dtjnfkkj'} noBlank>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/y6cmm2wc'} noBlank>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/mvb6kc6j'} noBlank>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={' https://tinyurl.com/2mhy4pzs'} noBlank>
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
