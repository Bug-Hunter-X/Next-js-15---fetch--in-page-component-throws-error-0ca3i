```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because `fetch` is not available in the browser context.
  const data = await fetch('/api/data');
  const json = await data.json();
  
  return (
    <div>
      <h1>About Page</h1>
      <p>Some data: {json.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default async function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API!' });
}
```