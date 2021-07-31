import Link from 'next/link';
import { ISidebarProps } from '../models/ISidebarProps';
import { NavitemData } from '../data/navitemData';
import { INavItem } from '../models/INavItem.interface';
import { IconComponent } from './icon';
import { useRouter } from 'next/router';

export const NavItems: React.FC<ISidebarProps> = ({ toggle, setToggle }): JSX.Element => {
	const router = useRouter();
	const navItems: INavItem[] = NavitemData;
	const elements =
		navItems &&
		navItems.map((navItem: INavItem) => {
			if (
				navItem.name === 'Home' ||
				navItem.name === 'About' ||
				navItem.name === 'Contact' ||
				navItem.name === 'Portfolio' ||
				navItem.name === 'Blog' ||
				navItem.name === 'Resume'
			) {
				return (
					<Link href={navItem.url} key={navItem.name}>
						<a
							onClick={() => setToggle(!toggle)}
							className={`flex w-full items-center text-white opacity-60 border-b border-white px-10 p-4 text-sm hover:opacity-100 transition duration-200 ${
								router.pathname === navItem.url ? 'focus:opacity-100 font-extrabold' : ''
							}`}>
							<IconComponent name={navItem.name} className='w-5 h-5 mr-2' /> <span className='uppercase'>{navItem.name}</span>
						</a>
					</Link>
				);
			} else {
				return <> </>;
			}
		});
	return <>{elements}</>;
};
