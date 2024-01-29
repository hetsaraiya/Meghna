import React from "react";


function Footer(prop) {
    return (
        <>
            <div className="lg:w-full  font-Poppins font-medium  md:w-[88%] mx-auto lg:px-[150px] pt-[30px] pb-[90px]">

                {
                    prop.marquee == "true" ?
                        <div>
                            <marquee className="text-[#ff0000] font-semibold text-[18px] font-serif">"Kendriya Vidhyala Sangatham Fee Payment is now Live on Bharat Bill Pay under Education Category. Now, pay your child’s Kendriya Vidyalaya Fee online through any payment app powered by Bharat Bill Pay. "</marquee>
                        </div> : null

                }

                <div>
                    <p className="text-[13px] text-[#ff0000] leading-[18px]">Note: KV Fee payment made through any bank credit card at Online KV Fee payment web portal or at PoS Machine installed in identified schools will add transaction charges @1.5% plus taxes only
                        Note: Please do not pay for 2nd time in case of non generation of payment receipt instantly. Parents/ Students are requested to wait atleast for one more working day from the date of transaction. If still the problem exist, please proceed with a fresh transaction. Your earlier payment, if received by the bank after two working days of your first transaction, will be refunded back to your bank through the same mode automatically.
                        Please contact kvhelpdesk@unionbankofindia.com for any fee payment related queries.</p>
                </div>

                <div>
                    <p className=" text-[#0000ee] text-[13px] underline">
                        <a href="#">Format for queries related to Online Payment</a></p>
                </div>
            </div>

            {/* ====================================== Footer section  start ============================================================ */}
            <div className="  border-t-[2px] border-[#000099]  ">
                <div className="border-t-[2px] border-[#ff9933] font-Work text-[#656565] text-[12px] py-[20px] pb-[100px] flex flex-col w-full 
                lg:px-[150px]  md:px-[20px] justify-center items-center">
                    <p>Site best viewed in IE7+, Firefox 3.5+, Chrome 3+, Safari 5.0+ at 1024 x 768 pixels resolution</p>
                    <p>©Union Bank of India:2014</p>
                </div>
            </div>
            {/* ====================================== Footer section  end ============================================================ */}






        </>
    )

}
export default Footer;