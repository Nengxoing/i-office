import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-2">
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg')",
          }}
        ></div>
        <div className="flex justify-center items-center p-10">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-10 w-sm"
          >
            <h1 className="text-6xl font-bold">
              <span className="text-red-600 text-stroke">l</span>
              <span>-</span>
              <span className="text-blue-600 text-stroke">ofiice</span>
            </h1>
            <div className="space-y-8 bg-white rounded-sm p-10 w-full">
              <div>
                <label
                  htmlFor=""
                  className="block mb-1 text-sm font-medium text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm w-full p-2 outline-0 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-1 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm w-full p-2 outline-0 text-black"
                />
              </div>

              <Link
                href="/dashboard"
                className="p-2 rounded-sm bg-black text-white text-sm w-full block text-center"
              >
                Sign In
              </Link>

              <Link
                href="/"
                className="border-1 border-gray-950 p-2 rounded-sm text-black text-sm w-full block text-center"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
