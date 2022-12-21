import "../css/App.css";
import PropTypes from "prop-types";

function ShelfChanger({ shelf, onChangeShelf }) {
  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={(e) => onChangeShelf(e.target.value)}>
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

ShelfChanger.prototype = {
  shelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
