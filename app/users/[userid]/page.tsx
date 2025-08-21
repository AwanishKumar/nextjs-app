import FetchUser from "@/app/data/fetchUser";

export default async function UserPage({ params }: { params: Promise<{ userid: string }> }) {
  const { userid } = await params;
  const user = await FetchUser(userid);

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Details</h1>
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
