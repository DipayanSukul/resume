import Image from 'next/image';
import { XIcon } from '@heroicons/react/outline';
import ProfilePicture from '../public/assets/images/profile.jpg';
import React from 'react';
import { ISidebarProps } from '../models/ISidebarProps';
import { NavItems } from './navitem';

export const Sidebar: React.FC<ISidebarProps> = ({ toggle, setToggle }) => {
	return (
		<aside className='bg-modern-black h-full w-full col-span-8 sm:col-span-12'>
			<div className='relative'>
				<Image src={ProfilePicture} alt='profile picture' className='relative w-full' objectFit='cover' />
				<span className='absolute bottom-0 left-0 w-full bg-slightly-blue bg-opacity-80 p-4 font-bold text-xl text-center text-white'>DIPAYAN SUKUL</span>
				<span
					className={`absolute inset-y-0 ${toggle ? '-right-13' : 'right-13'} text-off-white bg-modern-black h-12 p-4 sm:hidden`}
					onClick={() => setToggle(!toggle)}>
					<XIcon className='w-5 h-5' />
				</span>
			</div>

			<nav className='flex flex-col w-full'>
				<NavItems toggle={toggle} setToggle={setToggle} />
			</nav>
		</aside>
	);
};
