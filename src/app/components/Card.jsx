"use client";

export default function Card(){
    return(
        <div className="h-[25vh] w-[30vw] bg-[#FAFAFA] rounded-3xl flex justify-center flex-col gap-y-5 items-center">
            <h1 className="text-2xl text-center">SDE Intern 1</h1>
            <p className="text-center">Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
            <button className="bg-[#000] h-12 w-48 rounded-4xl text-white cursor-pointer">View Applications</button>
        </div>
    )
}