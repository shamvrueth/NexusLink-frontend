"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import DotGrid from "../components/DotGrid";
import ApplicantCard from "../components/ApplicantCard";

export default function Application(){
    return(
        <div>
            <div className="fixed inset-0 z-0">
                    <DotGrid
                        dotSize={2}
                        gap={50}
                        baseColor="#000"
                        activeColor="#FFF"
                        proximity={120}
                        shockRadius={50}
                        shockStrength={5}
                        resistance={500}
                        returnDuration={1.5}
                    />
            </div>
            <div className="relative !p-10 z-10 min-h-screen">
                <h1 className="text-2xl font-bold text-center ">Candidates sorted according to % match with Job requirement</h1>
                <div className="flex flex-wrap gap-6 w-full justify-center content-start !mt-[15vh]">
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                    <ApplicantCard />
                </div>
            </div>
        </div>
    )
}