"use client";

import { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
import Landing from "@/app/components/Landing";

export default function Home(){
  return(
    <>
      <main className="overflow-hidden w-full">
        <Landing />
      </main>
    </>
  )
}