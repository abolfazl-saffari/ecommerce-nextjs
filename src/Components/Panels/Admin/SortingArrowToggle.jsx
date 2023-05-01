import ChevronUp from "@/Components/Icons/ChevronUpIcon";
import ChevronDown from "@/Components/Icons/ChevronDownIcon";

const SortingArrowToggle = ({
  children,
  className,
  descending,
  onSlopingHandler,
  scope,
}) => {
  return (
    <th scope={scope} className={className} onClick={onSlopingHandler}>
      {descending ? <ChevronDown /> : <ChevronUp />}
      <p>{children}</p>
    </th>
  );
};

export default SortingArrowToggle;
