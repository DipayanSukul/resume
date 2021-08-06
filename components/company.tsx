import Image from 'next/image';
import company1 from '../public/assets/companies/copyright-red.svg';
import company2 from '../public/assets/companies/red-band.svg';
import company3 from '../public/assets/companies/red-cocacola.svg';
import company4 from '../public/assets/companies/red-entertainment.svg';
import company5 from '../public/assets/companies/red-hat.svg';
import company6 from '../public/assets/companies/red-nation.svg';
import company7 from '../public/assets/companies/red-star.svg';
import company8 from '../public/assets/companies/red-tesla.svg';

export const Company = (): JSX.Element => {
	return (
		<>
			<div className='rounded-full'>
				<Image
					src={company1}
					alt='company1'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company2}
					alt='company2'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company3}
					alt='company3'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company4}
					alt='company4'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company5}
					alt='company5'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company6}
					alt='company6'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company7}
					alt='company7'
					layout='fixed'
					width={100}
					height={100}
					className='cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
			<div className='rounded-full'>
				<Image
					src={company8}
					alt='company8'
					layout='fixed'
					width={100}
					height={100}
					className='pr-8 cursor-grab rounded-full transition duration-300 transform hover:scale-105'
				/>
			</div>
		</>
	);
};
