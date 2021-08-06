import { IPersonalInformation } from '../models/IPersonalInformation.interface';

interface IPersonalInformationProps {
	personalInfomation: IPersonalInformation[];
}

export const PersonalInformation: React.FC<IPersonalInformationProps> = ({ personalInfomation }) => {
	const elements =
		personalInfomation &&
		personalInfomation.map((item, index) => {
			return (
				<div className='flex mb-4' key={index + 1}>
					<div className='pr-1 text-base font-bold tracking-wide border-b-2 border-something-blue'>{item.name}</div>
					<span>:</span>
					<div className='pl-1'>{item.value}</div>
				</div>
			);
		});
	return <>{elements}</>;
};
