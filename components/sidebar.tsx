import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, UserIcon, DocumentReportIcon, LibraryIcon, BriefcaseIcon, MailIcon, XIcon } from '@heroicons/react/outline';
import ProfilePicture from '../public/assets/images/profile.jpg';
import React from 'react';

interface ISidebarProps {
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
}

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
				<Link href='/'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<HomeIcon className='w-5 h-5 mr-2' /> HOME
					</a>
				</Link>
				<Link href='/about'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<UserIcon className='w-5 h-5 mr-2' /> ABOUT
					</a>
				</Link>
				<Link href='/resume'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<DocumentReportIcon className='w-5 h-5 mr-2' /> RESUME
					</a>
				</Link>
				<Link href='/blog'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<LibraryIcon className='w-5 h-5 mr-2' /> BLOG
					</a>
				</Link>
				<Link href='/portfolio'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<BriefcaseIcon className='w-5 h-5 mr-2' /> PORTFOLIO
					</a>
				</Link>
				<Link href='/contact'>
					<a
						onClick={() => setToggle(!toggle)}
						className='flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200'>
						<MailIcon className='w-5 h-5 mr-2' /> CONTACT
					</a>
				</Link>
			</nav>
		</aside>
	);
};
