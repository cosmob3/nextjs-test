import Link from "next/link";
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <div className="flex justify-between">
        <Link href="/users" className="p-2">
          Users
        </Link>
        <br />
        <Link href="/hello">Client side fetching</Link>
      </div>
      <br />
      <Counter />
      <br />
      <br />
      <ProductCard />
    </main>
  );
}
