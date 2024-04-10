'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from '@/lib/paths';

export default function NavMenu({ noLogo }: { noLogo?: boolean }) {
	const pathname = usePathname();
	return (
		<div className="m-2 flex items-center gap-4">
			{!noLogo && <h1 className="p-2 px-4">Acme Inc.</h1>}
			{paths.map((link) => (
				<Link
					href={link.href}
					key={link.href}
					className={cn(
						'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
						pathname?.split('/')[1] === link.href.split('/')[1] || (pathname === '/' && link.href === '/')
							? 'bg-muted font-medium text-primary'
							: 'text-muted-foreground',
					)}
				>
					{link.name}
				</Link>
			))}
		</div>
	);
}
