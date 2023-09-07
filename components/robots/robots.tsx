import {Text} from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import {Flex} from '../styles/flex';
import { Pannellum, PannellumVideo } from "@georgedrpg/pannellum-react-next";
import "@georgedrpg/pannellum-react-next/es/css/video-js.css";
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css";
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css";
export const Robots = () => {
   useEffect(() => {
      const viewer = pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: '../../assets/images/PanoramaInterior2.png',
      });
  
      return () => {
        viewer.destroy();
      };
    }, []);
   return (
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Breadcrumbs>
            <Crumb>
               <HouseIcon />
               <Link href={'/'}>
                  <CrumbLink href="#">Robot</CrumbLink>
               </Link>
               <Text>/</Text>
            </Crumb>

            <Crumb>
               <UsersIcon />
               <CrumbLink href="#">Control</CrumbLink>
               <Text>/</Text>
            </Crumb>
            <Crumb>
               <CrumbLink href="#">Manual</CrumbLink>
            </Crumb>
         </Breadcrumbs>

         <Text h3>All Accounts</Text>
         <Pannellum
            width="100%"
            height="500px"
            image={myImage}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
            onLoad={() => {
               console.log("panorama loaded");
            }}
         >
            <Pannellum.Hotspot
               type="custom"
               pitch={31}
               yaw={150}
               handleClick={(evt, name) => console.log(name)}
               name="hs1"
            />
         </Pannellum>
      </Flex>
   );
};
