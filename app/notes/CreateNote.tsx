'use client';

/*export default function CreateNote() {
  return (
    <div>
      <h1>Create Note</h1>
    </div>
  );
}
*/
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  const router = useRouter();

  const create = async () => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    //await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    await fetch('http://127.0.0.1:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed,
      }),
    });

    setCompleted(false);
    setTitle('');

    router.refresh();
  };

  /*/ Using the Pocketbase endpoint:
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setCompleted(e.target.value === '')}
      />
      */

  return (
    <form onSubmit={create}>
      <h3>Create a new Todo</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          id="completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completed ?
      </label>
      <button type="submit">Create note</button>
    </form>
  );
}
