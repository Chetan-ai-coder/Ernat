export default function Categories() {
    return (
        <div className="w-full flex justify-between items-center bg-[#ff9500] px-4 md:px-5 lg:px-8 py-3 md:py-4 lg:py-6 gap-2 font-semibold text-[16px]">

            <button>What's New</button>
            <button>Best Offers</button>
            <button className="hidden md:block">Today's Deals</button>
            <button className="hidden md:block" >All Stories</button>
            <button>Top Deals</button>
            <button>Coupon Zone</button>
        </div>
    );
};