import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Link href="/blog">Blogs</Link>
        <Link href="/products">Products</Link>
      </div>
    </div>
  );
}
