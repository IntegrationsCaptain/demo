import Link from 'next/link';
import NavMenu from './NavMenu';
import Image from 'next/image';

const Header = () => (
	<div className="flex gap-4 py-3">
		<Link href="/">
			<h1 className="p-2 px-4 text-lg font-semibold">
				<Image src="/hooli.png" alt="Hooli" width={150} height={60} />
			</h1>
		</Link>
		<NavMenu />
		<div className="self-center border-2 border-dotted border-yellow-500 bg-yellow-100 px-2 py-3 text-xs uppercase">
			This header is not a part of the store
		</div>
	</div>
);

export default Header;
