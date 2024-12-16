import React from 'react'

export default function hero() {
    return (
        <div className="flex justify-center items-center pf-10">
            <div className="max-w-[1440px] flex gap-6 justify-center">
                <div className="border-r-2 border-neutral-200 p-10 hidden md:block">
                    <ul className="space-y-4">
                        {[
                            "Women's fashion"
                            "Men's fashion"
                            "Electronics"
                            "Home & Lifestyle",

                            "medicine"
                            "sports & outdoor"
                            "groceries & pets"
                            "baby toys"
                            "health & beauty"

                        ] .map ((item, index) => (
                            <11 
                            Key=(index)
                            className=" flex justify-between items-center text-slate-800 leading-loose hover-underline curser-pointer hover-text-blue-500 transition-all durat"
                            >
                            {""}
                            <span> {item} </span>
                            {index < 2 && <IoIosArrowForward className="text-Ig ml-2" />}

                            </11>

                        ))}

                        </ul>
                    

                </div>


{/*right siode*/ }
 <div className="flex item-center bg-black rounded-ig p-6 px-10">
    <div className="text-white flex flex-col justify-center space-y-5 sm:w[180px] nd:w-[300px] lg:w-[400px]">
        <div className="flex items-center gap-2">
        <FaApple className="sm:text-2xl md:text-4x1"/>
       <span className="sm:text-sm md:text-base font-semibold">
        {" "}
         iphone 14 series
          </span>


       </div>
       {/*heading*/}
       <h1 className="sm:text-2x1 md:text-4x1 lg:text-5x1 font-bold leading-snug">
        Up to 10% off Voucher 
       </h1>
       <link
       href=("#products")
       className="underline underline-offset-4 hover:font-semibold flex items-center"
       >
         shop now 
         <FaArrowRight />
         </link>
         {/*image*/}
         <div className='ml-auto top-4'>
            <img src="..hone-14-pro-mqc53hn-a" alt="iphione" />
            </div>
    </div>


 </div>
            </div>

        </div>
    );
    

    
}