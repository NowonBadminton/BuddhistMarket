import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex justify-between px-5 py-5 bg-black text-white sticky w-full top-0 z-10'>
            <div className='logo'>
                <Link href={"/"}>불화마켓</Link>
            </div>
            <nav className='flex gap-3'>
                <Link href={"/"}>Home</Link>
                <Link href={"/original"}>Original</Link>
                <Link href={"/copy"}>Copy</Link>
                <Link href={"/collection"}>Collection</Link>
                <Link href={"/etc"}>Etc</Link>
                <button>Login</button>
            </nav>
        </header>
    );
}