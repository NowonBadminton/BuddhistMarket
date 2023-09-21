'use client';

import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const logOut = () => {
        signOut(auth).then(() => {
            router.push('/');
        }).catch((error) => {
            alert('logout error : ' + error);
        });
    };
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            setUserId(user?.uid);
        });
        return () => authState();
    }, []);

    return (
        <header className="flex justify-between px-5 py-5 bg-black text-white sticky w-full top-0 z-10">
            <div className="logo">
                <Link href={"/"}>불화마켓</Link>
            </div>
            <nav className="flex gap-3">
                <Link href={"/"}>Home</Link>
                <Link href={"/original"}>Original</Link>
                <Link href={"/copy"}>Copy</Link>
                <Link href={"/collection"}>Collection</Link>
                <Link href={"/etc"}>Etc</Link>
                {userId ?
                    <div className="flex gap-3">
                        <Link href={"/mypage"}>My Page</Link>
                        <button onClick={logOut}>Log Out</button>
                    </div>
                    : <Link href={"/login"}>Login</Link>
                }
            </nav>
        </header>
    );
}
