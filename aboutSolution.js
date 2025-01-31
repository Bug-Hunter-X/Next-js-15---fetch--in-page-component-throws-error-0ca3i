```javascript
// pages/aboutSolution.js
import { getServerSideProps } from 'next/server';

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {data.message}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return {
    props: { data },
  };
}
```