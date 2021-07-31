// Copyright 2021 Dipayan Sukul
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and

import { IPersonalInformation } from '../models/IPersonalInformation.interface';

// limitations under the License.
export const PERSONAL_INFORMATION_DATA: IPersonalInformation[] = [
	{
		name: 'Name',
		value: 'Dipayan Sukul',
	},
	{
		name: 'Age',
		value: (new Date().getFullYear() - 1985).toString(),
	},
	{
		name: 'Location',
		value: 'Durgapur, India',
	},
	{
		name: 'Address',
		value: 'Durgapur, West Bengal, India',
	},
	{
		name: 'Email',
		value: 'dipayansukul@hotmail.com',
	},
	{
		name: 'Phone',
		value: '+91-801-665-3990',
	},
	{
		name: 'Freelance',
		value: 'Available',
	},
	{
		name: 'Visa Sponsorship',
		value: 'Yes',
	},
];
