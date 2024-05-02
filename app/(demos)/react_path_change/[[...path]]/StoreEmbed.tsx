'use client';

import { Store } from '@sidedish/react';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

const StoreEmbed = () => {
	const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	const STORE_PAGE_PATH = '/react_path_change';
	const pathname = usePathname();

	// listen to path change and update the url
	const onPathChange = (path: string) => {
		const newPath = `${STORE_PAGE_PATH}${path}`;
		if (newPath === window.location.pathname) return;
		window.history.pushState({}, '', newPath);

		toast.success('Path changed and the parent updated the url of the window. See the browser url.');
	};

	// load state from the url
	const path = pathname.replace(STORE_PAGE_PATH, '');
	const url = `${STORE_URL}${path}`;

	// render the store
	return <Store url={url} onPathChange={onPathChange} />;
};

export default StoreEmbed;
