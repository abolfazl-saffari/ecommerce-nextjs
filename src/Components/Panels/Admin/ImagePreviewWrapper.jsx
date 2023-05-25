import { Fragment } from "react";
import ImagePreview from "./ImagePreview";

const ImagePreviewBox = ({ Image }) => {
  return (
    <Fragment>
      {Image && (
        <div className="w-full flex items-center border-2 border-dotted rounded-md mt-2 p-4">
          <ImagePreview Image={Image} />
        </div>
      )}
    </Fragment>
  );
};

export default ImagePreviewBox;
