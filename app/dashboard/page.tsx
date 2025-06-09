export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <div className="text-2xl font-bold mb-6">
          l-<span className="text-blue-500">office</span>
        </div>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded">
            <span className="material-icons">home</span>
            หน้าหลัก
          </button>
          <button className="flex items-center gap-2 px-3 py-2">
            <span className="material-icons">person</span>
            พานลอม
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <header className="bg-gray-300 p-4 flex items-center justify-between">
          <nav className="flex gap-6 text-black font-medium">
            <a href="#" className="hover:underline">
              โฉมงาม
            </a>
            <a href="#" className="hover:underline">
              บัญญาม
            </a>
            <a href="#" className="hover:underline">
              เติกมิก
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-xl">+</button>
            <span className="material-icons">settings</span>
            <span className="material-icons">account_circle</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6 overflow-auto">
          {[1, 2].map((section) => (
            <div key={section} className="bg-white p-6 rounded shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bar Chart Section */}
                <div>
                  <h2 className="font-semibold mb-2">อายุงานประจำเดือน</h2>
                  <ul className="text-sm space-y-1 mb-2">
                    <li>โฉมงาม</li>
                    <li>เติกมิก</li>
                    <li>บัญญาม</li>
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    Sales from 1-12 Dec, 2024
                  </p>
                  <div className="bg-gray-100 h-40 flex items-center justify-center text-gray-400">
                    [Bar Chart Placeholder]
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Legend: Last 6 days / Last Week
                  </div>
                </div>

                {/* Pie Chart Section */}
                <div className="flex flex-col items-center justify-between">
                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className="text-sm font-medium">บัญญัติ</h3>
                      <p className="text-xs text-gray-500">
                        From 1-6 Dec, 2025
                      </p>
                    </div>
                    <button className="text-blue-600 text-sm border border-blue-200 px-3 py-1 rounded">
                      View Report
                    </button>
                  </div>
                  <div className="my-4 w-40 h-40 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    [Pie Chart Placeholder]
                  </div>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>
                      <span className="text-blue-600">■</span> โฉมงาม - 40%
                    </li>
                    <li>
                      <span className="text-purple-600">■</span> เติกมิก - 32%
                    </li>
                    <li>
                      <span className="text-pink-600">■</span> บัญญาม - 28%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
