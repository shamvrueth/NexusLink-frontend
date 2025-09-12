// "use client";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import Loading from "./loading";
import toast from "react-hot-toast";

export default function Google(){
    const [loading, setLoading] = useState(false);
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    async function getUserContext(accessToken) {
        try {
            setLoading(true);
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/recruiter/login`,
                {},
                {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        const userStatus = res.status;
        console.log(res);
        localStorage.setItem("UserStatus", userStatus);
        localStorage.setItem("AccessToken", accessToken);
        // if (userStatus == 0) {
        //     setLoading(false);
        //     window.location.href = "/register";
        //     console.log("User exists but not in a team");
        // } else if (userStatus == 1) {
        //     setLoading(false);
        //     // User is in a team
        //     onLoginSuccess();
        //     window.location.href = "/team";
        // }
        if (res.status === 200){
            setLoading(false);
            window.location.href = "/dashboard"
        }
        } catch (error) {
        if (res.status === 401) {
            toast.error("Unable to verify token.Login Again");
            localStorage.removeItem("AccessToken");
            localStorage.removeItem("UserStatus");
        } else if (error.response && res.status === 404) {
            toast.error("User not registered for event.");
            localStorage.removeItem("AccessToken");
            localStorage.removeItem("UserStatus");
        }
        setLoading(false);
        console.error("Error fetching user context:", error);
        // Handle error (e.g., show error message to user)
        }
    }
    async function handleClick() {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            await getUserContext(user.accessToken);
        } catch (error) {
            console.error("Login error:", error);
        // Handle Errors here (e.g., show error message to user)
        }
    }

    return(
        <button className="absolute bg-[#000] h-12 w-48 rounded-4xl left-[55vw] top-[35vh] text-white flex items-center justify-around cursor-pointer" onClick={handleClick}><img src="Group 30.svg" className="h-[4vh] "/>Sign in with Google</button>
    )
}