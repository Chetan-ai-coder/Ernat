import Image from "next/image";
import React from "react";

export default function LoginForm() {
    return (
        <div className="flex items-center justify-center w-full min-h-screen px-4 bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA]">

            {/* main container */}
            <div className="flex items-center justify-center w-full max-w-[1240px]">

                {/* card */}
                <div className="w-full max-w-[360px] bg-[#F77F00] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

                    {/* top */}
                    <div className="flex justify-center items-center py-14">
                        <h1 className="text-[24px] font-bold text-white tracking-wide">
                            Login
                        </h1>
                    </div>

                    {/* form */}
                    <div className="bg-white rounded-tr-[60px] p-6 flex flex-col gap-5">

                        {/* heading */}
                        <div>
                            <h1 className="text-[18px] font-bold text-gray-800">
                                Login or Signup
                            </h1>
                            <p className="text-[12px] text-gray-500">
                                We will send an OTP to verify
                            </p>
                        </div>

                        {/* input */}
                        <div className="flex w-full gap-2">
                            <input
                                type="text"
                                placeholder="Enter Email or Mobile Number"
                                className="flex-1 h-[44px] border border-gray-300 bg-gray-100 rounded-md px-3 outline-none text-sm focus:ring-2 focus:ring-[#F77F00]"
                            />

                            <button className="h-[44px] px-4 bg-[#F77F00] text-white text-sm font-semibold rounded-md hover:bg-[#e96f00] transition">
                                Send OTP
                            </button>
                        </div>

                        {/* divider */}
                        <div className="flex items-center w-full">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-2 text-[12px] text-gray-500">
                                or sign in using
                            </span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* google */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[12px] text-gray-600">
                                Continue with Google
                            </span>

                            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition">
                                <Image
                                    src="/icons/Group-233.svg"
                                    alt="google"
                                    width={30}
                                    height={30}
                                />
                            </div>
                        </div>

                        {/* continue */}
                        <button className="h-[44px] w-full bg-[#F77F00] text-white text-sm font-semibold rounded-md hover:bg-[#e96f00] transition">
                            Continue
                        </button>

                        {/* footer */}
                        <div className="text-center text-[11px] text-gray-500 space-y-2 px-2 leading-relaxed">
                            <p>
                                By continuing, you agree to our{" "}
                                <span className="text-black font-medium cursor-pointer">
                                    terms
                                </span>{" "}
                                and{" "}
                                <span className="text-black font-medium cursor-pointer">
                                    privacy policy
                                </span>.
                            </p>

                            <p>
                                Already have an account?{" "}
                                <span className="text-black font-medium cursor-pointer hover:underline">
                                    Sign in
                                </span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}