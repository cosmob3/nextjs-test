import Link from "next/link";
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <div className="flex justify-between w-full">
        <Link
          href="/users"
          className="p-2 font-bold text-xl hover:text-lime-500"
        >
          Users
        </Link>
        <br />
        <Link
          href="/hello"
          className="p-2 font-bold text-xl hover:text-purple-500"
        >
          Client Side Fetching
        </Link>
      </div>
      <br />
      <Counter />
      <br />
      <br />
      <ProductCard />
    </main>
  );
}
