import styles from '../Notes.module.css';

async function getNote(noteId: string) {
  const res = await fetch(
    //`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    `http://127.0.0.1:5000/todos/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.userId}</h5>
        <p>{note.completed}</p>
      </div>
    </div>
  );
}
