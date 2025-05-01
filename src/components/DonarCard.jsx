import React from 'react'
import DonateForm from './DonateForm';

const DonarCard = ({data, btn, fn}) => {
  return (
    <>
      <DonateForm
        modal={btn}
        dataId={data._id}
        modalfn={fn}
        name={data.reciventId.name}
      />
      <div className="w-full lg:w-[32%] flex flex-col gap-y-4 border-2 border-gray-600 rounded-lg p-5 bg-[#121212]">
        <div className="flex flex-col gap-y-2">
          <div className="w-20 aspect-square overflow-hidden rounded-full">
            <img
              src={`data:${data.reciventId.pictype};base64,${data.reciventId.profilepic}`}
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-Poppins text-2xl">
            Name: <span className="text-[#FFD700]">{data.reciventId.name}</span>
          </h1>
        </div>
        <h4 className="font-Roboto text-2xl">
          RQ : <span className="text-[#FF4C58]">{data.bloodType}</span>
        </h4>
        <h4 className="font-Roboto text-2xl">
          Date : <span className="text-[#3DE8E0]">{data.date}</span>
        </h4>
        <h4 className="font-Roboto text-2xl">
          Time : <span className="text-[#3DE8E0]">{data.time}</span>
        </h4>
        <button
          onClick={() => fn(true)}
          className="bg-[#FF4C58] rounded-full py-4 font-Poppins cursor-pointer tracking-widest text-2xl shadow-[0_0px_35px_rgba(255,0,0,0.3)] hover:-translate-y-1 transition-all duration-200">
          Donate
        </button>
      </div>
    </>
  );
}

export default DonarCard