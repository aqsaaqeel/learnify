import "./lvl2.css";
export const Card = ({ item, id, handleClick }) => {
  const itemClass = item.state ? "active " + item.state : "";
  // console.log(`itemClass for card ${id}: ${itemClass}`);
  return (
    <div
      className={`card-element ${itemClass} bg-blue-50 w-32 h-32 rounded-xl`}
      onClick={() => handleClick(id)}
    >
      <img src={item.img} alt="" />
    </div>
  );
};
