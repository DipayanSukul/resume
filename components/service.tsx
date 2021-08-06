import { SERVICE_DATA } from '../data/serviceData';
import { IService } from '../models/IService.interface';
import { IconComponent } from './icon';

export const Service: React.FC = (): JSX.Element => {
	const services: IService[] = SERVICE_DATA;
	return (
		<div className='sm:grid sm:grid-cols-12 gap-6'>
			{services &&
				services.map(service => {
					if (service.icon === 'DesktopComputer' || service.icon === 'Cog' || service.icon === 'Database' || service.icon === 'Eye') {
						return (
							<div className='text-something-blue items-center justify-center sm:col-span-6 lg:col-span-3' key={service.title}>
								<div className='flex-col'>
									<div className='flex justify-center items-center text-center py-4'>
										<IconComponent name={service.icon} className='w-12 h-12' />
									</div>
									<div className='text-lg text-white font-bold text-center pb-4 break-words'>{service.title}</div>
									<div className='text-sm text-white text-center pb-4 break-words'>{service.description}</div>
								</div>
							</div>
						);
					} else return <> </>;
				})}
		</div>
	);
};
