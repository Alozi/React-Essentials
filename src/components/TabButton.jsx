export default function (props) {
  console.log('TABBUTTON COMPONENT EXECUTING');

  return (
    <li>
      <button className={props.isSelected ? "active" : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
  );
}
