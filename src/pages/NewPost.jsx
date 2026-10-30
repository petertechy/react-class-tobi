import { useState } from "react";

useState

function NewPostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body, userId: 1 }),
        },
      );
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const created = await response.json();
      onPostCreated(created); // tell the parent (callback prop, Class 4)
      setTitle("");
      setBody("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? "Saving..." : "Add post"}
      </button>
      {error && <p>Could not save: {error}</p>}
    </form>
  );
}

export default NewPostForm;