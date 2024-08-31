import listItemCheckImage from "../assets/images/icon-list.svg";

const ListItem = ({ text }) => {
  return (
    <li className="flex items-center text-sm font-normal text-charcoalGrey my-2">
      <img
        src={listItemCheckImage}
        alt="Check icon"
        className="w-[18px] h-[18px]"
      />
      <span className="ml-3">{text}</span>
    </li>
  );
};

export default ListItem;
