import Link from "next/link";

export default async function users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div className="flex justify-start items-center">
      <ul className="mt-4">
        {users.map((user: any, index: number) => {
          return (
            <li className="px-10 w-full" key={user.id}>
              <Link href={`/users/${user.id}?seq=${index + 1}`} key={user.id}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
