import Image from "next/image";
export default function Header() {
    return (
        // Header Start
        <div className="px-4 md:px-8 lg:px-16 py-3 md:py-4 lg:py-6 flex justify-between items-center gap-5">

            {/* Company */}
            <div className="h-10 flex items-center gap-2">
                <Image
                    src="/icons/Logo's/headerLogo.svg"
                    alt="Ernat Logo"
                    width={100}
                    height={100}
                    className="w-20 md:w-25 lg:w-30 h-auto"
                    priority
                />
            </div>

            {/* Searchbar */}
            <div className="w-[50%] rounded-[16px] flex justify-start items-center relative">
                <Image
                    src="/images/home/Search.png"
                    alt="Search Icon"
                    className="absolute ml-3 lg:ml-4 w-5 lg:w-6 h-auto"
                    width={24}
                    height={24}
                    priority
                />

                {/* Mobile */}
                <input
                    className="w-full h-[45px] pl-10 rounded-[10px] text-[14px] font-semibold bg-[#F1F1F1] md:hidden"
                    type="text"
                    placeholder="Search any brand"
                />

                {/* Desktop */}
                <input
                    className="w-full h-[55px] pl-13 rounded-[16px] text-[16px] font-semibold bg-[#F1F1F1] hidden md:block"
                    type="text"
                    placeholder="Search any brand or product"
                />

                <button
                    className="absolute bg-white right-2 lg:right-4 h-[35px] lg:h-[39px] p-2 rounded-[8px] text-[16px] lg:text-[16px] flex justify-center items-center text-center"
                >Search</button>
            </div>

            {/* Navigation Buttons */}
            <div className="h-[47px] flex justify-center items-center text-[15px] lg:text-[16px]">
                <button
                    className="px-3 py-2 lg:px-4 lg:py-3"
                >Login</button>

                <button
                    className="px-3 py-2 lg:px-4 lg:py-3 bg-black text-white rounded-[10px] lg:rounded-[12px]"
                >Sign up</button>
            </div>
        </div>
    )
}; 