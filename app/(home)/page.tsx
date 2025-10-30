import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">歡迎來到kurohelper-doc</h1>
      <p>
        前往文檔{" "}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{" "}
      </p>
    </div>
  );
}
