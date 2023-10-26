/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import type { Metadata } from 'next';
import './globals.css';
//import Footer from './@footer/page';

export const metadata: Metadata = {
  title: 'Next Notes',
  description: 'A simple Next App to save notes.',
};

export default function Layout(props: {
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <main>
          <nav>
            <Link href="/" className="red">
              Home
            </Link>
            |<Link href="/notes">Notes</Link> |
            <Link href="/about" replace={true}>
              About
            </Link>
          </nav>
          <div id="container">{props.children}</div>
        </main>
        {props.footer}
      </body>
    </html>
  );
}
