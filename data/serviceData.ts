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
// limitations under the License.

import { IService } from '../models/IService.interface';

export const SERVICE_DATA: IService[] = [
	{
		icon: 'DesktopComputer',
		title: 'Frontend Development',
		description:
			'Develop frontend SINGLE PAGE APPLICATIONS(SPAs)/MULTI PAGE APPLICATIONS(MPAs) using frontend technolgies like HTML, CSS, SCSS, REACT, ANGULAR, .NET MVC',
	},
	{
		icon: 'Cog',
		title: 'Backend Development',
		description: 'Develop robust, scalable backend solutions and restful APIs using .NET CORE, NODEJS, NESTJS',
	},
	{
		icon: 'Database',
		title: 'Database Handling',
		description: 'Handle database to securely store data in database storages like SQL SERVER, POSTGRES SQL, MONGODB',
	},
	{
		icon: 'Eye',
		title: 'Responsive Web UI/UX Design/Prototype (HOBBY)',
		description: 'Create minimalistic designs and prototypes using FIGMA, ADOBE XD ',
	},
];
