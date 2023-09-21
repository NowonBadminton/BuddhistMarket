'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Mypage() {
    const router = useRouter();
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            if (user) return;
            router.push('/login');
        });

        return () => authState();
    }, []);

    return (
        <div>
            my page
        </div>
    );
}
