import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import user1 from '../public/assets/testimonials/user-3.jpg';
import user2 from '../public/assets/testimonials/user-4.jpg';
import user3 from '../public/assets/testimonials/user-5.jpg';
import user4 from '../public/assets/testimonials/user-6.jpg';
import user5 from '../public/assets/testimonials/user-7.jpg';
import user6 from '../public/assets/testimonials/user-8.jpg';

export const Testimonial = (): JSX.Element => {
	return (
		<>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user1} alt='user 1' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user2} alt='user 2' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user3} alt='user 3' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user4} alt='user 4' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user5} alt='user 5' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
			<div className='flex flex-col flex-1 md:flex-50'>
				<div className='py-8 bg-modern-black rounded-tl-custom rounded-br-custom relative'>
					<p className='pl-16 pr-6 text-sm text-white whitespace-normal md:text-sm md:pl-20 md:pr-2'>
						<span className='absolute top-9 left-4'>
							<FaQuoteLeft className='w-8 h-8 md:w-12 md:h-12 text-something-blue' />
						</span>
						Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem
						dignissimos.
						<span className='absolute top-full left-5 custom_arrow md:left-8'></span>
					</p>
				</div>
				<div className='mt-4 flex'>
					<div className='pr-2'>
						<Image src={user6} alt='user 6' width={80} height={80} className='rounded-tl-20 rounded-br-20' />
					</div>
					<div>
						<h1 className='text-white text-lg leading-5'>Amy Jenson</h1>
						<h3 className='text-white text-sm leading-6'>Creative Director</h3>
					</div>
				</div>
			</div>
		</>
	);
};
