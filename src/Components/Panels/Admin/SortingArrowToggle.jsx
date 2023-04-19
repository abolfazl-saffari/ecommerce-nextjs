import { useState } from "react";

import ChevronUp from "@/Components/Icons/ChevronUpIcon";
import ChevronDown from "@/Components/Icons/ChevronDownIcon";

const SortingArrowToggle = ({ children, className, scope }) => {
  const [arrowToggle, setArrowToggle] = useState("upside");

  return (
    <th scope={scope} className={className}>
      {arrowToggle === "upside" ? <ChevronDown /> : <ChevronUp />}
      <p>{children}</p>
    </th>
  );
};

export default SortingArrowToggle;
