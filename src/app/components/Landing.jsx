"use client";

import { useEffect, useState } from "react";
import DotGrid from "./DotGrid";
import Google from "./Google";

export default function Landing(){
    return(
        <div className="relative w-full h-[100vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DotGrid
                    dotSize={2}
                    gap={15}
                    baseColor="#000"
                    activeColor="#FFF"
                    proximity={120}
                    shockRadius={50}
                    shockStrength={5}
                    resistance={500}
                    returnDuration={1.5}
                />
            </div>
            <div className="relative z-10 h-[100vh] pt-[10vh]">
                <img src="Frame 35.svg" alt="Logo" className="top-[17vh] absolute h-[60vh] w-[60vw]"/>
                <h1 className="text-4xl font-bold absolute left-[55vw] top-[30vh]">Welcome to NexusLink!</h1>
                <Google />
            </div>
        </div>
    )
}