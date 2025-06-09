import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-2 gap-20 w-lg">
        <Link
          href="#"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          I-office
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          I-office
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          I-office
        </Link>
        <Link
          href="#"
          className="flex justify-center items-center text-4xl bg-white border-2 border-blue-800 text-black rounded-full p-10 h-55"
        >
          I-office
        </Link>
      </div>
    </div>
  );
}
