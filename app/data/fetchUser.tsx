import { notFound } from "next/navigation";

export default async function FetchUser(userid: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  if (!response.ok) {
    notFound();
  }
  const user = await response.json();
  if (!user) {
    notFound();
  }
  return user;
}
