import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeImage } from "@/redux/actions/ImageAction";

const ImagePreview = ({ Image: ImageFileName, setValue }) => {
  const dispatch = useDispatch();
  const src = `http://localhost:3004/files/${ImageFileName}`;

  const removeImageHandler = () => {
    dispatch(removeImage());
    setValue("image", "");
  };

  return (
    <Image
      className="w-[30%] border-2 aspect-[3/2] object-contain cursor-pointer border-gray-700"
      src={src}
      width={300}
      height={100}
      alt={ImageFileName}
      loader={() => src}
      onClick={removeImageHandler}
    />
  );
};

export default ImagePreview;
