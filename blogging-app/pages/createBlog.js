export default function create() {
  return (
    <>
      <form action="submit">
        <h1>Create Blog</h1>
        <span>
          <label>Title</label>
          <input type="text"></input>
        </span>
        <span>
          <label>Description</label>
          <input type="text"></input>
        </span>
        <span>
          <label>Content</label>
          <input type="text"></input>
        </span>
        <span>
          <label>Upload Image</label>
          <input type="file" accept="image/*" name="image" id="file" />
        </span>
      </form>
      <button type="submit">Submit</button>
    </>
  );
}
