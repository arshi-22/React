import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products</h1>
      <li>
        <ul>
          <Link href="/products/1">Product 1</Link>
        </ul>
        <ul>
          <Link href="/products/2">Product 2</Link>
        </ul> <ul>
          <Link href="/products/3">Product 3</Link>
        </ul> <ul>
          <Link href="/products/4">Product 4</Link>
        </ul>
      </li>
    </>
  );
}
