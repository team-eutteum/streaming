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
              <Button size="lg" href={'https://tinyurl.com/44yfkyrs'}>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/v9khbvck'}>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/44yfkyrs'}>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/uv5krf3e'}>
                원클릭4
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">IOS</p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/22ea3469'}>
                아이폰
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/2sexa5hy'}>
                아이패드
              </Button>
            </li>
          </ul>
        </div>
        <div className="list-wrap">
          <p className="list-tit f-bd3">PC</p>
          <ul className="grid-2">
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/24t2v8cn'}>
                원클릭1
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/57skmjhw'}>
                원클릭2
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/24t2v8cn'}>
                원클릭3
              </Button>
            </li>
            <li className="list">
              <Button size="lg" href={'https://tinyurl.com/4j462zzn'}>
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
