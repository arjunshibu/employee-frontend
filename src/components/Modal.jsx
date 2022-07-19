import Close from '../icons/Close';

const Modal = ({ header, body, children, onClose }) => {
  return (
    <section className="modal-overlay">
      <section className="modal-content">
        <header className="modal-header">
          <h3>{header}</h3>
          <button className="btn-ghost modal-close" onClick={onClose}>
            <Close />
          </button>
        </header>
        <section className="modal-body">
          <p>{body}</p>
          <section className="modal-controls">{children}</section>
        </section>
      </section>
    </section>
  );
};

export default Modal;
