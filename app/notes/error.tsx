'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>An error occured: {error.message}</h2>
      <br />
      <p>Make sure the server is running:</p>
      <pre>npm run serve</pre>
      <br />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>

      <p>HASH: {error.digest ? error.digest : ''}</p>
    </div>
  );
}
