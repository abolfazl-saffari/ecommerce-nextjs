import { useDispatch } from "react-redux";
import { removeImage } from "@/redux/actions/ImageAction";

const ImagePreview = ({ Image, setValue }) => {
  const dispatch = useDispatch();

  const removeImageHandler = () => {
    dispatch(removeImage());
    setValue("image", "");
  };

  return (
    <img
      className="w-[30%] border-2 aspect-[3/2] object-contain cursor-pointer border-gray-700"
      src={`http://localhost:3004/files/${Image}`}
      onClick={removeImageHandler}
    />
  );
};

export default ImagePreview;
