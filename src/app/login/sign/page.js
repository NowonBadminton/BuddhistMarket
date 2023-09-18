'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from '@/app/firebase';
import Link from 'next/link';

export default function sign() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
    const validatePassword = (password) => {
        return reg.test(password);
    };
    const passwordOnChange = (e) => {
        setPassword(e.target.value);
        if (!validatePassword(e.target.value)) {
            setPasswordError('A-Z, a-z, 0-9, 특수문자 포함, 8자 이상');
        } else {
            setPasswordError('');
        };
    };
    const signUp = (e) => {
        e.preventDefault();
        if ((password !== confirmPassword) || (passwordError !== "")) {
            alert("비밀번호를 다시 확인하세요");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            };
        });
        return () => authState();
    }, []);
    return (
        <section className="sign-wrap">
            <div className="sign">
                <Link href={"/"} className="home-link">
                    Buddhist Market
                </Link>
                <div className="info-container">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="sign-title">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={signUp}>
                            <div>
                                <label htmlFor="email" className="info-input-label">Your email</label>
                                <input className="info-input" onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" id="email" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="info-input-label">Password</label>
                                <input className="info-input" onChange={passwordOnChange} value={password} type="password" name="password" id="password" placeholder="••••••••" required />
                                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="info-input-label">Confirm password</label>
                                <input className="info-input" onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" required />
                                {(confirmPassword != '') && (password !== confirmPassword) && <p className="text-red-500 text-xs mt-1">비밀번호가 일치하지 않습니다.</p>}
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input className="info-check" id="terms" aria-describedby="terms" type="checkbox" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="info-submit">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link href={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
