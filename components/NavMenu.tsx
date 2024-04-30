'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const paths: { href: string; name: string }[] = [
	{ href: '/iframe', name: 'iframe' },
	{ href: '/react-basic', name: 'Basic React' },
	{ href: '/next-session', name: 'NextJS with Private session' },
	{ href: '/react_install_status', name: 'Manage install status' },
	{ href: '/react_path_change', name: 'React to path changes' },
	{ href: '/specific-listing', name: 'Specific listing' },
];

export default function NavMenu() {
	const pathname = usePathname();
	return (
		<div className="flex items-center gap-4">
			{paths.map((link) => (
				<Link
					href={link.href}
					key={link.href}
					className={cn(
						'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
						pathname.startsWith(link.href) ? 'bg-muted font-medium text-primary' : 'text-muted-foreground',
					)}
				>
					{link.name}
				</Link>
			))}
		</div>
	);
}
