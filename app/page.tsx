import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>

      <Counter />
    </main>
  );
}
