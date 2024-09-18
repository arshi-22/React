import Link from "next/link";

export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    });
  });
  return {
    title: `Product : ${title}`,
  };
};

export default function ProductDetails({ params }) {
  return (
    <>
      <Link href="/products">Back</Link>
      <h1>Product {params.productId} - Details </h1>
    </>
  );
}
