import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-2 gap-20 w-lg">
        <Link
          href="/login"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          <h1 className="text-4xl font-bold">
            <span className="text-red-600">l</span>
            <span>-</span>
            <span className="text-blue-600">ofiice</span>
          </h1>
        </Link>
        <Link
          href="/login"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          <h1 className="text-4xl font-bold">
            <span className="text-red-600">l</span>
            <span>-</span>
            <span className="text-blue-600">ofiice</span>
          </h1>
        </Link>
        <Link
          href="/login"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          <h1 className="text-4xl font-bold">
            <span className="text-red-600">l</span>
            <span>-</span>
            <span className="text-blue-600">ofiice</span>
          </h1>
        </Link>
        <Link
          href="/login"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          <h1 className="text-4xl font-bold">
            <span className="text-red-600">l</span>
            <span>-</span>
            <span className="text-blue-600">ofiice</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
