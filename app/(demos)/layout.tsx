import NavMenu from '@/components/NavMenu';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full w-full flex-col">
			<NavMenu />
			<div className="flex-grow">{children}</div>
		</div>
	);
}
