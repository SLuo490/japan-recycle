export default function Item(props) {
  console.log(props.item.Category);
  return (
    <div className='border w-30 h-36 flex flex-col items-center justify-center'>
      <h1>{props.item.ItemName}</h1>
      <p>{props.item.Category}</p>
      <p>{props.item.Notes}</p>
    </div>
  );
}
