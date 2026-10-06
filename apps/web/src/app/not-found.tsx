import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl space-y-3 px-4 py-16">
      <h1 className="text-2xl font-semibold">That page is not in the sample set</h1>
      <Link href="/" className="text-sm text-primary hover:underline">
        Back to the dashboard
      </Link>
    </main>
  );
}
