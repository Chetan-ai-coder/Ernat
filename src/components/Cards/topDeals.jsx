import Image from "next/image";

export default function TopDeals({image, discount, category}) {
    return (
        
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[100px] h-[100px] lg:w-[230px] lg:h-[230px] relative border-1 border-solid shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-end items-center pb-5 rounded-[20px]">
             <Image
                src={image}
                alt="Shopping Image"
                width={100}
                height={100}
                className="w-40 h-auto absolute -top-10 left-0"
                priority
            />

            <p>{discount}</p>
            <p>{category} </p>

        </div>

        <h1 className="text-[#F77F00] text-[16px] [text-shadow:0px_2px_4px_rgba(0,0,0,0.4)]"> GRAB NOW</h1>
        </div>
        

    );
};