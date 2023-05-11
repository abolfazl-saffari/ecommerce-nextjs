import Modal from "@/Components/UI/Modal";

const ProductManagementItemImageFullscreenModal = ({
  showModal,
  onHideModal,
  image,
}) => {
  return (
    <Modal
      title="نمای نزدیک از محصول :"
      showModal={showModal}
      onHideModal={onHideModal}
    >
      <div className="w-full pb-10">
        <img src={image} className="w-full rounded-md" />
      </div>
    </Modal>
  );
};

export default ProductManagementItemImageFullscreenModal;
