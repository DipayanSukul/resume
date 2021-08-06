import { FaHome, FaUser, FaNewspaper, FaEnvelope, FaBriefcase, FaBook, FaLaptop, FaCog, FaDatabase, FaEye } from 'react-icons/fa';

const ICON_TYPES = {
	Home: FaHome,
	About: FaUser,
	Resume: FaNewspaper,
	Blog: FaBook,
	Portfolio: FaBriefcase,
	Contact: FaEnvelope,
	DesktopComputer: FaLaptop,
	Cog: FaCog,
	Database: FaDatabase,
	Eye: FaEye,
};

interface IIconProps {
	name: 'Home' | 'About' | 'Resume' | 'Blog' | 'Portfolio' | 'Contact' | 'DesktopComputer' | 'Cog' | 'Database' | 'Eye';
	className: string;
}

export const IconComponent: React.FC<IIconProps> = ({ name, className }) => {
	const Icon = ICON_TYPES[name];
	return <Icon className={className} />;
};
