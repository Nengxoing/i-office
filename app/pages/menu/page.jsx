import Link from "next/link"

const MenuPage = () => {
    return (
        <div>
            <div className="h-screen w-full flex justify-center items-center">
                <div className="grid grid-cols-2 gap-20 w-lg">
                    <div className="text-center">
                        <Link
                            href="/login"
                            className="flex justify-center items-center text-4xl bg-white border-4 border-blue-800 text-black rounded-full p-10 h-55"
                        >
                            <h1 className="text-4xl font-bold">
                                <span className="text-red-600">l</span>
                                <span>-</span>
                                <span className="text-blue-600">ofiice</span>
                            </h1>
                        </Link>
                        <p className="pt-3">ຕິດຕາມໜ້າວຽກ</p>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/login"
                            className="flex justify-center items-center text-4xl bg-white border-4 border-blue-800 text-black rounded-full p-10 h-55"
                        >
                            <h1 className="text-4xl font-bold">
                                <span className="text-red-600">l</span>
                                <span>-</span>
                                <span className="text-blue-600">ofiice</span>
                            </h1>
                        </Link>
                        <p className="pt-3">ຈັດຊື້</p>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/login"
                            className="flex justify-center items-center text-4xl bg-white border-4 border-blue-800 text-black rounded-full p-10 h-55"
                        >
                            <h1 className="text-4xl font-bold">
                                <span className="text-red-600">l</span>
                                <span>-</span>
                                <span className="text-blue-600">ofiice</span>
                            </h1>
                        </Link>
                        <p className="pt-3">ຂາເຂົ້າຂາອອກ</p>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/login"
                            className="flex justify-center items-center text-4xl bg-white border-4 border-blue-800 text-black rounded-full p-10 h-55"
                        >
                            <h1 className="text-4xl font-bold">
                                <span className="text-red-600">l</span>
                                <span>-</span>
                                <span className="text-blue-600">ofiice</span>
                            </h1>
                        </Link>
                        <p className="pt-3">ການເງິນ</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default MenuPage