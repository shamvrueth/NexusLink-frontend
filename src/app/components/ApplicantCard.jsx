"use client";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ApplicantCard(){
    const percentage = 66;
    return(
        <div className="h-[25vh] w-[30vw] bg-[#F0FFF7] rounded-3xl flex flex-row gap-5 items-center !p-10 justify-around">
            <div>
                <CircularProgressbar value={percentage} text={`${percentage}% match`} className='h-24 w-24'
                styles={buildStyles({
                    textSize: '16px'
                })}
                />
            </div>
            <div>
                <h2 className='text-2xl'>Shamvrueth</h2>
            </div>
        </div>
    )
}