import React from "react";

export default function navbar() {
    return (
        <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[1440px]">
            <div className="bg-black text-whitepy-2 text-sm flex justify-between items-center px-8 w-full">
                <div className="text-center flex-1">
                    Summer Sale For All Swim Suits And Free Delivery - OFF 50%!
                    <a href="a" className="underline hover-text-slate-300"> 
                       {" "}
                        ShopNow {" "}
                    </a>
                </div>

                <div className="flex items-center gap-[21px]">
                    <div className="text-white text-sn font-normal leading-[21px]">
                     English
                    </div>
                    <RiArrowDropDownLine className="text-white text-3x1"/>
                </div>
            </div>
 {/* main navigation */}           
                <div className="flex justify-between items-center px-8 py-4">
                    <h1 className="text-2xl font-bold text-black"></h1>

                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="a" className="text-slate-600 hover;text-black underline">Name</a>
                    <a href="a" className="text-slate-600 hover;text-black underline">Contact</a>
                    <a href="a" className="text-slate-600 hover;text-black underline">About</a>
                    <a href="a" className="text-slate-600 hover;text-black underline">Signup</a>
                </nav>

{/* Search Icons*/}

<div className="flex items-center space-x-6">
    <div className="hidden lg-flex items-center bg-slate-400 rounded-md px-3 py-2">
    <input type="text"
    placeholder="What are you looking for?"
    className="bg-slate-100 outline-none text-sm" 
    />
    <CiSearch />.

    </div>
    <CiHeart />
    <IoCartOutline />
</div>

                </div>

        </header>
    );
}

