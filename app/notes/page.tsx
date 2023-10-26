// import PocketBase from 'pocketbase';
import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

/*/ This allows you to genearte static pages for dynamic routes
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
*/

async function getTodos(topN: number = 10) {
  //const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
  const res = await fetch('http://127.0.0.1:5000/todos', {
    cache: 'no-store',
  }); /*
    .then((r) => r.json())
    .then((data) => {
      return data.slice(0, topN);
    });*/
  const data = await res.json();
  return data?.slice(0, topN) as any[];
}

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  //const notes = await getNotes();
  const notes = await getTodos();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, userId, completed } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{userId}</h5>
        <p>{completed}</p>
      </div>
    </Link>
  );
}
