import PropTypes from 'prop-types';
import TodoItem from '@/components/TodoItem';

const TodosList = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add any other required properties of the `todo` object here
    })
  ).isRequired,
};

export default TodosList;
