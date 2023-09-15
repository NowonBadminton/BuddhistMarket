'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { auth, onAuthStateChanged } from '../firebase';

export default function mypage() {
    const router = useRouter();
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/login");
            }
        });
        
        return () => authState();
    }, []);

    return (
        <div>
            my page
        </div>
    );
}