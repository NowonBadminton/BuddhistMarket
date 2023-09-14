"use client";

import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const logOut = async () => {
        await auth.signOut();
        router.push('/');
    };
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUserId(user.uid);
              console.log("login checked");
            } else {
                setUserId(null);
              console.log("logout checked");
            };
        });
        return () => authState();
    },[]);

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
                {userId?
                    <div className='flex gap-3'>
                        <Link href={"/mypage"}>My Page</Link>
                        <button onClick={logOut}>Log Out</button>
                    </div>
                    :<Link href={"/login"}>Login</Link>
                }
            </nav>
        </header>
    );
}