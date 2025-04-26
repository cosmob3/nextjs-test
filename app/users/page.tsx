import Link from "next/link";

export default function UsersPage() {
  return (
    <div>
      <h1 className="text-4xl text-center">Hello This is the users page</h1>
      <p className="text-2xl text-center p-20">
        This is just some random paragraphs to be able to manipulate and play
        with for the time being. Testing how this works.
      </p>
      <Link href="/hello">Hello</Link>
      <br />
      <Link href="/">HOME PAGE</Link>
    </div>
  );
}
