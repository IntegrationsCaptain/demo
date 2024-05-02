export type User = {
	id: string;
	firstName: string;
	lastName: string;
	accountId: string;
};

export async function getFakeAuth(): Promise<User> {
	return {
		id: '123123123',
		firstName: 'John',
		lastName: 'Doe',
		accountId: '456456456',
	};
}
