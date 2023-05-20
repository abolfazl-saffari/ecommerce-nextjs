import Modal from "@/Components/UI/Modal";

const ProductManagementItemImageFullscreenModal = ({
  showImageModal,
  userImageModalData,
  onHideImageModal,
}) => {
  return (
    <Modal
      title="نمای نزدیک از محصول :"
      showModal={showImageModal}
      onHideModal={onHideImageModal}
    >
      <div className="w-full pb-10">
        <img src={userImageModalData} className="w-full rounded-md" />
      </div>
    </Modal>
  );
};

export default ProductManagementItemImageFullscreenModal;
