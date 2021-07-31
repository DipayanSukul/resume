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
// lint-staged.config.js
module.exports = {
	// Type check TypeScript files
	'**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

	// Lint then format TypeScript and JavaScript files
	'**/*.(ts|tsx|js)': filenames => [`yarn eslint --fix ${filenames.join(' ')}`, `yarn prettier --write ${filenames.join(' ')}`],

	// Format MarkDown and JSON
	'**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`,
};
