import React, { useState } from 'react';

function AddQuote({ addQuote }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() && author.trim()) {
      addQuote({ text, author });
      setText('');
      setAuthor('');
    }
  };

  return (
    <form className="add-quote" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quote"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <button type="submit">Add Quote</button>
    </form>
  );
}

export default AddQuote;
