export default function Item(props) {
  var category = props.item.Category;

  // set color of the background depending on the category of the item
  const color = () => {
    if (category === 'Recyclable') {
      return 'bg-green-300';
    } else if (category === 'Non-burnable') {
      return 'bg-lime-200';
    } else if (category === 'Burnable') {
      return 'bg-red-300';
    } else if (
      category === 'Oversized Non-burnable' ||
      category === 'Oversized Burnable'
    ) {
      return 'bg-pink-300';
    } else if (category === "We Don't Collect") {
      return 'bg-orange-300';
    } else if (category === 'Plastic') {
      return 'bg-gray-300';
    } else if (category === 'Hazardous waste') {
      return 'bg-gray-400';
    }
  };

  return (
    // set the background color of the item card
    <div
      className={`border w-30 h-36 flex flex-col items-center justify-center ${color()}`}
    >
      <h1>{props.item.ItemName}</h1>
      <p>{props.item.Category}</p>
      <p>{props.item.Notes}</p>
    </div>
  );
}
