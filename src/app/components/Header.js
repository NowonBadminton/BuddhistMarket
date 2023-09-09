import Link from 'next/link';

export default function Header(){
    return (
        <header className='flex justify-between px-5 py-5 bg-black text-white min-w-full z-10'>
            <div className='logo'>
                <Link href={"/"}>불화마켓</Link>
            </div>
            <ul className='flex gap-3'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/original"}>Original</Link></li>
                <li><Link href={"/copy"}>Copy</Link></li>
                <li><Link href={"/collection"}>Collection</Link></li>
                <li><Link href={"/etc"}>Etc</Link></li>
                <li><button>Login</button></li>
            </ul>
        </header>
    );
}