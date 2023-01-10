export default function Item(props) {
  console.log(props);
  return (
    <div>
      <div className='info'>
        <h1>{props.item.ItemName} </h1>
        <h3>{props.item.Category}</h3>
        <p>{props.item.Notes}</p>
      </div>
    </div>
  );
}
