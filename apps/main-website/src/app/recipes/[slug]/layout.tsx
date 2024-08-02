import Link from "next/link";

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return <main className="container grid p-4">
    <div className="mb-4">
      <Link href="/recipes" className="text-blue underline hover:decoration-4 hover:bg-overlay2/[.25]">← Back to recipe list</Link>
    </div> 
    {children}
    </main>
}