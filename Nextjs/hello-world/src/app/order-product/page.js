"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("button clicked");
    router.push("/");
    // router.forward();
    // router.replace("/")
    // router.back()
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
