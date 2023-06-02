import Image from "next/image";
import Modal from "@/Components/UI/Modal";

const ProductManagementItemImageFullscreenModal = ({
  showImageModal,
  userImageModalData,
  onHideImageModal,
}) => {
  const src = userImageModalData;

  return (
    <Modal
      title="نمای نزدیک از محصول :"
      showModal={showImageModal}
      onHideModal={onHideImageModal}
    >
      <div className="w-full pb-10">
        <Image
          src={src}
          alt={src}
          width={100}
          height={100}
          loader={() => src}
          className="w-full rounded-md"
        />
      </div>
    </Modal>
  );
};

export default ProductManagementItemImageFullscreenModal;
