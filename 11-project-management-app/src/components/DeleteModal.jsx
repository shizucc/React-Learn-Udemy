import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const DeleteModal = forwardRef(function DeleteModal({ onConfirmDelete }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      displayDialog() {
        modalRef.current.showModal();
      },
    };
  });

  function handleConfirmDelete() {
    onConfirmDelete(true);
  }
  return createPortal(
    <dialog ref={modalRef} className="flex flex-cols">
      <h2>Are you fucking serious to delete this project?</h2>
      <section className="flex flex-row">
        <form method="dialog" onSubmit={null}>
          <button>Cancel</button>
        </form>
        <button onClick={handleConfirmDelete}>Delete</button>
      </section>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default DeleteModal;
