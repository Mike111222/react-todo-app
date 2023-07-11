import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  return <li>{itemProp.title}</li>;
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    // Add any other required properties of the `itemProp` object here
  }).isRequired,
};

export default TodoItem;
