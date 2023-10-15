'use client';
import now from '../lib/helper';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();
  return (
    <div>
      <h1>About {now()}</h1>
      <button onClick={() => router.push('/', { scroll: false })}>
        Back to Home
      </button>
    </div>
  );
}
