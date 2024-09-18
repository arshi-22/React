import Link from "next/link";

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>My Blogs</h1>
    </>
  );
}
