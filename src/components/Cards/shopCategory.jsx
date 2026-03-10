import Image from "next/image"

export default function ShopCategory({image}) {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[110px] h-[110px] rounded-[20px] bg-gradient-to-b from-[#E6F3FF] to-[#CDE7FF] shadow-[0_6px_12px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <Image 
                src={image}
                alt="Shop Category Image"
                width={100}
                height={100}
                className="w-40 h-auto absolute -top-10 left-0"
                priority
                />
            </div>
            <div className="">Perfume</div>
        </div>
    )
}