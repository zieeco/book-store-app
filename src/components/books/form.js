const Form = () => (
  <section>
    <h3>ADD NEW BOOK</h3>
    <form className="book-form">
      <input
        className="form-input"
        type="text"
        placeholder="Book title"
        required
      />
      <select name="category" id="" required>
        <option defaultValue="Category">Category</option>
        <option value="Action">Action</option>
        <option value="Movies">Movies</option>
        <option value="Music">Music</option>
        <option value="Economy">Economy</option>
        <option value="Finance">Finance</option>
        <option value="Love & Romance">Love & Romance</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Programming">Programming</option>
      </select>
      <button type="button" className="btn submit">ADD BOOk</button>
    </form>
  </section>
);

export default Form;
