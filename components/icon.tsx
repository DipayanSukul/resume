import { HomeIcon, UserIcon, DocumentReportIcon, LibraryIcon, BriefcaseIcon, MailIcon } from '@heroicons/react/outline';

const ICON_TYPES = {
	Home: HomeIcon,
	About: UserIcon,
	Resume: DocumentReportIcon,
	Blog: LibraryIcon,
	Portfolio: BriefcaseIcon,
	Contact: MailIcon,
};

interface IIconProps {
	name: 'Home' | 'About' | 'Resume' | 'Blog' | 'Portfolio' | 'Contact';
	className: string;
}

export const IconComponent: React.FC<IIconProps> = ({ name, className }) => {
	const Icon = ICON_TYPES[name];
	return <Icon className={className} />;
};
