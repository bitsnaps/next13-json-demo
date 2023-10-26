/*
Parallel Routes allows to simultaneously or conditionally render multiple pages within the same layout, which is useful for complex routing patterns. It is beneficial for highly dynamic sections of an app, and it provides an independent error and loading states for each route, it is also useful for conditional rendering based on conditions like authentication state. You can use them with slots (created using the '@folder' convention that doesn't affect the URL structure.
https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
*/
export default function Footer() {
  return (
    <div>
      <p>Copyright (c) 2023</p>
    </div>
  );
}
