export const WinningModal = (props) => {
    return (
      <div className="modal" style={{display: props.show ? "block" : "none"}}>
        <div className="modal-content">
          <h1 className="text-4xl ">You won by answering everything correctly, Yayyy!!!</h1>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    );
  }
  