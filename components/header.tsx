import { MenuIcon } from '@heroicons/react/outline';

interface IHeaderProps {
	toggle: boolean;
	setToggle: (isOpen: boolean) => void;
}

export const Header: React.FC<IHeaderProps> = ({ toggle, setToggle }) => {
	return (
		<div className='sm:hidden bg-black w-full h-12 flex fixed left-0 top-0'>
			<div className='flex items-center w-full'>
				<span className='border-r border-white p-2 cursor-pointer' onClick={() => setToggle(!toggle)}>
					<MenuIcon className='h-8 w-8 font-extrabold text-white' />
				</span>
				<div className='flex justify-center w-full p-2'>
					<span className='text-3xl font-bold text-white'>DIPAYAN SUKUL</span>
				</div>
			</div>
		</div>
	);
};
