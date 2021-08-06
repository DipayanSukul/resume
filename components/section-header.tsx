interface ISectionHeaderProps {
	sectionaheader: string;
}

export const SectionHeader: React.FC<ISectionHeaderProps> = ({ sectionaheader }) => {
	return (
		<h1 className='text-2xl text-white font-bold mb-12 border-b-2 border-something-blue'>
			<span className='relative py-1 px-3 mb-10 uppercase'>
				<span className='before:left-0 before:bottom-1 before:absolute before:w-1 before:h-2 before:bg-something-blue'></span>
				{sectionaheader}
				<span className='after:right-0 after:bottom-1 after:absolute after:w-1 after:h-2 after:bg-something-blue'></span>
			</span>
		</h1>
	);
};
