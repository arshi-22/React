import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="text-center flex justify-center p-3">
        This is profile page
      
      <Link
        href="/profile/api"
        className="text-white-400 border rounded px-4 bg-green-500"
      >
        User Data
      </Link>
      </div>
    </>
  );
}
