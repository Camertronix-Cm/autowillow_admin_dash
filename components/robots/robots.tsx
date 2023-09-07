import {Text} from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {Breadcrumbs, Crumb, CrumbLink} from '../breadcrumb/breadcrumb.styled';
import {HouseIcon} from '../icons/breadcrumb/house-icon';
import {UsersIcon} from '../icons/breadcrumb/users-icon';
import {Flex} from '../styles/flex';
import { BsArrowsFullscreen, BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUpLeft, BsArrowUpRight, BsArrowDownLeft, BsArrowDownRight } from "react-icons/bs";

export const Robots = () => {
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
         <h3><BsArrowsFullscreen /></h3>
         <ul>
            <li>
               <h3> <BsArrowLeft /> </h3>
            </li>
            <li>
               <h3> <BsArrowRight /> </h3>
            </li>
            <li>
               <h3> <BsArrowUp /> </h3>
            </li>
            <li>
               <h3> <BsArrowDown /> </h3>
            </li>
         </ul>
         <BsArrowUpLeft /> <BsArrowUpRight /> 
         <BsArrowDownLeft /> <BsArrowDownRight />
      </Flex>
   );
};
