const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required></input>
        <label htmlFor=""></label>
      </form>
    </div>
  );
}

export default Create;