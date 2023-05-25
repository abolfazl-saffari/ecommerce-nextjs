import { Fragment } from "react";

const ImagePreview = ({ Image }) => {
  return (
    <Fragment>
      {/* <RemoveIcon /> */}
      <img
        className="w-[30%] border-2 aspect-[3/2] object-contain border-gray-700"
        src={`http://localhost:3004/files/${Image}`}
      />
    </Fragment>
  );
};

export default ImagePreview;
