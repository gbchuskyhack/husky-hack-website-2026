
import Link from "next/link";

export default function Construction() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="font-serif text-3xl md:text-6xl">Under Construction</h1>
      <h2 className="mb-8 font-serif text-3xl md:text-4xl">Coming Soon</h2>
      <Link
        href="/"
        className="rounded bg-primary px-6 py-3 font-serif text-xl text-primary-foreground transition-transform hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  );
}
