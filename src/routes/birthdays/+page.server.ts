import type { IBirthday } from './types.js';

const db: IBirthday[] = [];

const addNew = (item: IBirthday): number => db.push(item);
addNew({ name: 'Hercules', dob: '1994-02-02' });
addNew({ name: 'Athena', dob: '1989-01-01' });
export const load = () => ({
	birthdays: [...db]
});

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		if (data.get('name') === null || data.get('dob') === null) {
			throw new Error(`Missing field 'name' or 'dob'`);
		}
		addNew({
			name: data.get('name') as string,
			dob: data.get('dob') as string
		});
	}
};
