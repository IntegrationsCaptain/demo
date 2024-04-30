'use client';

import { Store } from '@sidedish/react';
import { usePathname } from 'next/navigation';

const StoreEmbed = () => {
	const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	const STORE_PAGE_PATH = '/react_path_change';
	const pathname = usePathname();

	const onPathChange = (path: string) => {
		window.history.pushState({}, '', `${STORE_PAGE_PATH}${path}`);
	};

	const path = pathname.replace(STORE_PAGE_PATH, '');
	const url = `${STORE_URL}${path}`;
	return <Store url={url} onPathChange={onPathChange} />;
};

export default StoreEmbed;
