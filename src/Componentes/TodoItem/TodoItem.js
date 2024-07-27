import DeleteIcon from '../DeleteIcon/DeleteIcon';
import CompleteIcon from '../CompleteIcon/CompleteIcon';
import '../TodoItem/TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete} />
        
      <p className={`TodoItem-p ${props.
        completed && "TodoItem-p--complete"}`}>
        {props.text}</p>

      <DeleteIcon
        onDelete={props.onDelete} />
    </li>);
}


export default TodoItem;