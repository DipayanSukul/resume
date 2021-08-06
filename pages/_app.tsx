import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useState } from 'react';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className='h-screen'>
			{/* Header is only visible in mobile screens */}
			<Header toggle={toggle} setToggle={setToggle} />
			{/* Sidebar is only visible except in mobile screens. Although user can toggle the sidebar in mobile screens */}
			<div className='grid grid-cols-12 h-full'>
				<div
					className={`${
						toggle ? 'translate-x-0' : '-translate-x-full'
					} grid grid-cols-12 z-50 fixed inset-y-0 left-0 transform duration-500 ease-in-out md:translate-x-0 md:static md:block md:col-span-2 md:z-0`}>
					<Sidebar toggle={toggle} setToggle={setToggle} />
				</div>
				<div className='col-span-12 md:col-span-10 mt-12 md:mt-0'>
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
};

export default MyApp;
