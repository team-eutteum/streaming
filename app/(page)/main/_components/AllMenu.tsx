import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function AllMenu() {
  return (
    <div className="modal-wrap">
      <div className="content">
        <div className="scroll-area" />
      </div>
      <button className="btn-close">
        <i>
          <CloseOutlinedIcon />
        </i>
      </button>
    </div>
  );
}

export default AllMenu;
