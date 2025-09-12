"use client";

import { useEffect, useState } from "react";
import Card from "../components/Card";
import DotGrid from "../components/DotGrid";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Dashboard(){
    const [click, setClick] = useState(false);
    const [jobTitle, setJobTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');
    const[location, setLocation] = useState('');
    const[req, setReq] = useState('');
    const router = useRouter();

    function routeToHome(){
        router.push("/");
    }
    
    useEffect(() => {
        if (localStorage.getItem("UserStatus") !== "200"){
            return;
        }
           const accessToken = localStorage.getItem("AccessToken");
        axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recruiter/profile`, {
            headers: {
            Authorization: `Bearer ${accessToken}`,
            },
        })
        .then((res) => {
            console.log(res);
            // setTeamData(res.data);
            // if (res.data.status === 0) {
            // setNotifPopup(false);
            // } else if (res.data.status === 1) {
            // setNotifPopup(true);
            // setCurrentReview(2);
            // setCleared(false);
            // } else if (res.data.status === 2) {
            // setNotifPopup(true);
            // setCurrentReview(2);
            // setCleared(true);
            // } else if (res.data.status === 3) {
            // setNotifPopup(true);
            // setCurrentReview(3);
            // setCleared(false);
            // } else if (res.data.status === 4) {
            // setNotifPopup(true);
            // setCurrentReview(3);
            // setCleared(true);
            // }
            // toast.success("Team data fetched successfully!");
        })
        .catch((error) => {
            if (
            error.response &&
            (error.response?.status === 404 || error.response?.status === 400)
            ) {
            const errorMessage =
                error.response.data?.error || "Error fetching details";
            toast.error(errorMessage);
            } else {
            toast.error("Error fetching details. Please try again.");
            }
            routeToHome();
        });
    }, []);

    function handleClick(){
        setClick(true);
    }
    function handleClose(){
        setClick(false);
    }
    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            jobTitle,
            department,
            description,
            level,
            type,
            location,
            req
        };
        console.log(formData);
        setJobTitle('');
        setDepartment('');
        setDescription('');
        setLevel('');
        setType('');
        setLocation('');
        setReq('');
        setClick(false);
    }

    return(
        <div>
            <div className="absolute inset-0 z-0">
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
            <div className="relative w-full h-[100vh] flex flex-col">
                <h1 className="absolute text-3xl font-bold left-[45vw] top-[15vh]">Jobs posted</h1>
                <div className="flex-1 flex items-center justify-center">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <button className="absolute bottom-[10vh] left-[45vw] h-12 w-48 rounded-4xl bg-[#000] text-white cursor-pointer" onClick={handleClick}>Add New Job</button>
                {click && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white !p-10 rounded-lg shadow-lg min-w-[500px] max-h-[500px] overflow-y-auto">
                            <h2 className="text-xl font-bold mb-4">Add New Job</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                                <input
                                    type="text"
                                    placeholder="Job Title"
                                    className="border !p-2 rounded w-60 h-10"
                                    required
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Department"
                                    className="border !p-2 rounded h-10"
                                    required
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                                <textarea
                                    placeholder="Job Description"
                                    className="border !p-2 rounded h-60"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Level"
                                    className="border !p-2 rounded h-10"
                                    required
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Type"
                                    className="border !p-2 rounded h-10"
                                    required
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="border !p-2 rounded h-10"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                                <textarea
                                    placeholder="Job Requirements"
                                    className="border !p-2 rounded h-60"
                                    required
                                    value={req}
                                    onChange={(e) => setReq(e.target.value)}
                                />
                                <div className="flex gap-2 justify-end">
                                    <button
                                        type="button"
                                        className="!px-4 !py-2 bg-gray-300 rounded-4xl cursor-pointer"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="!px-4 !py-2 bg-black text-white rounded-4xl cursor-pointer"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}