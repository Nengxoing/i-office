"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validUsername = "admin";
  const validPassword = "123456";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    setUsernameError("");
    setPasswordError("");

    if (username !== validUsername) {
      setUsernameError("ຊື່ຜູ້ໃຊ້ບໍ່ຖືກຕ້ອງ!");
      hasError = true;
    }

    if (password !== validPassword) {
      setPasswordError("ລະຫັດບໍ່ຖືກຕ້ອງ!");
      hasError = true;
    }

    if (!hasError) {
      router.push("/pages/menu");
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-2">
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('images/i-office.png')",
            backgroundPosition: "right center",
          }}
        ></div>
        <div className="flex justify-center items-center p-10">
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center items-center gap-10 w-sm"
          >
            <h1 className="text-6xl font-medium">
              <span
                className="text-red-600"
                style={{ WebkitTextStroke: "1px white" }}
              >
                l
              </span>
              <span>-</span>
              <span
                className="text-blue-600"
                style={{ WebkitTextStroke: "1px white" }}
              >
                ofiice
              </span>
            </h1>
            <div className="space-y-8 bg-white rounded-sm p-10 w-full">
              {/* Username Field */}
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  ຊື່ຜູ້ໃຊ້
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 rounded-sm w-full p-2 outline-0 text-black"
                  required
                />
                {usernameError && (
                  <p className="text-red-500 text-xs mt-1">{usernameError}</p>
                )}
              </div>

              {/* Password Field with toggle */}
              <div>
                <label className="block mb-1 text-sm font-medium text-black">
                  ລະຫັດ
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-sm w-full p-2 pr-10 outline-0 text-black"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? (
                      <HiEyeOff size={20} />
                    ) : (
                      <HiEye size={20} />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="py-3 rounded-sm bg-black text-white text-sm w-full block text-center"
              >
                ເຂົ້າສູ່ລະບົບ
              </button>

              <a
                href="#"
                className="border border-gray-950 py-3 rounded-sm text-black text-sm w-full block text-center"
              >
                ຍ້ອນກັບ
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
