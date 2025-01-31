# Next.js 15 Fetch Error in Page Component

This repository demonstrates a common error encountered in Next.js 15 applications when using the `fetch` API within a page component.  The `fetch` call works correctly in an API route but throws an error when called directly from a page component. This is because the page components run in the browser, while API routes run on the server.

## Bug

The `about.js` file contains a `fetch` call that attempts to retrieve data from an API route.  This call throws an error because the browser environment does not directly support server-side API calls.

## Solution

The `aboutSolution.js` file shows how to correctly fetch data in a Next.js 15 page component using `getServerSideProps` or `getStaticProps` (if data is static). This will fetch the data on the server before rendering the page in the browser.