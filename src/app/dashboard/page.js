"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Dashboard(){
    return(
        <div className="w-full h-[100vh] relative p-10">
            <div className="absolute flex flex-wrap overflow-hidden gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}