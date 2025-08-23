import { Metadata } from "next";
import FetchUser from "@/app/data/fetchUser";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ userid: string }>;
}): Promise<Metadata> => {
  const user = await FetchUser((await params).userid);
  return {
    title: user.name,
    description: `Details about ${user.name}`,
  };
};

export default async function UserPage({
  params,
  searchParams,
}: {
  params: Promise<{ userid: string }>;
  searchParams: Promise<{ seq: string }>;
}) {
  const { userid } = await params;
  const { seq } = await searchParams;
  const user = await FetchUser(userid);

  return (
    <div className="min-h-screen p-2">
      <main className="ml-8">
        <Link
          href="/users"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block mb-4"
        >
          Back to User List
        </Link>
        <h1 className="text-2xl font-bold mb-6"> Sequence of current user is {seq}</h1>
        <h2 className="text-xl font-bold mb-6">User Details</h2>
        <p className="text-lg">User ID: {userid}</p>
        <p className="text-lg">Name: {user.name}</p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-lg">Phone: {user.phone}</p>
        <p className="text-lg">Website: {user.website}</p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="text-lg">Street: {user.address.street}</p>
          <p className="text-lg">Suite: {user.address.suite}</p>
          <p className="text-lg">City: {user.address.city}</p>
          <p className="text-lg">Zipcode: {user.address.zipcode}</p>
          <p className="text-lg">
            Geo: {`Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`}
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <p className="text-lg">Name: {user.company.name}</p>
          <p className="text-lg">Catch Phrase: {user.company.catchPhrase}</p>
          <p className="text-lg">BS: {user.company.bs}</p>
        </div>
      </main>
    </div>
  );
}
