import React from 'react';
import { SiIcon } from 'react-icons/si';
import dynamic from 'next/dynamic';

const Mapcomponent = dynamic(()=> import("../components/map/mapComponent"),{ssr : false})

const jobs = ()=> {
   return (<>
        <text>Jobs </text>
        < SiIcon/>

        <Mapcomponent/>
        </>)
};

export default jobs;
