import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <h2>
        <Link href='/meals/share'>Share</Link>
      </h2>
    </main>
  );
}
