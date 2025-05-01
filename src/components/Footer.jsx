import React from 'react'
import Button from './Button';

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit py-7 px-10 gap-y-10 text-white bg-[#2C3E50] flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-OpenSans text-4xl lg:text-2xl">Service</h1>
          <Button navigating={"/donate/request-list"} text={"Donation"} />
          <Button navigating={"/reciver/blood"} text={"Receiver"} />
          <a
            className="block px-6 py-3 font-Poppins text-2xl font-extrabold"
            target="_blank"
            href="https://www.instagram.com/p/DI8Y8ggyCWv/">
            How To Use
          </a>
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-OpenSans text-4xl lg:text-2xl">Helps</h1>
          <Button navigating={"/admin"} text={"Admin"} />
          <Button navigating={"/users/contactUs"} text={"Contact Us"} />
        </div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-OpenSans text-4xl lg:text-2xl">Legal</h1>
          <a
            className="text-2xl px-6 py-3 w-fit"
            href="src/assets/pdfs/Terms of Use.pdf"
            download="Terms Of Use">
            Terms of Use
          </a>
          <a
            className="text-2xl px-6 py-3 w-fit"
            href="src/assets/pdfs/Privacy Policy.pdf"
            download="Privacy Policy">
            Privacy Policy
          </a>
          <a
            className="text-2xl px-6 py-3 w-fit"
            href="src/assets/pdfs/Cookie Policy.pdf"
            download="Cookie Policy">
            Cookie Policy
          </a>
        </div>
      </div>
      <p className="bg-[#2C3E50] text-white text-center py-2 font-Roboto text-2xl">
        © copyright reserve by Blood_hub
      </p>
    </>
  );
}

export default Footer