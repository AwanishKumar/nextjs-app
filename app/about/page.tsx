import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Welcome to About page",
};

export default async function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-6">
          We are a dedicated team passionate about delivering excellence in everything we do. Our
          mission is to provide innovative solutions that make a difference in peoples lives.
        </p>
        <p className="text-lg mb-6">
          Founded with a vision to transform the industry, we continue to grow and adapt to meet the
          evolving needs of our customers.
        </p>
        <div className="mt-8">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
