import Header from '@/components/Header';
import NavMenu from '@/components/NavMenu';
import { Toaster } from '@/components/ui/sonner';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full w-full flex-col">
			<Header />
			<div className="flex-grow">{children}</div>
			<Toaster richColors />
		</div>
	);
}
