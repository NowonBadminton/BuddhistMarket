'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, onAuthStateChanged, signInWithEmailAndPassword, googleProvider, GoogleAuthProvider, githubProvider, GithubAuthProvider, signInWithPopup } from '../firebase';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

export default function login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                router.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                router.push('/');
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert("error :" + errorMessage + email + credential);
            });
    };
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                router.push('/');
            }).catch((error) => {
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GithubAuthProvider.credentialFromError(error);
                alert("error :" + errorMessage + email + credential);
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
                            Sign in to your account
                        </h1>
                        <div className="flex flex-row justify-between">
                            <button onClick={googleLogin} className="sns-button">
                                <FcGoogle />
                                <p className="text-sm">Log in with Google</p>
                            </button>
                            <button onClick={githubLogin} className="sns-button">
                                <BsGithub />
                                <p className="text-sm">Log in with Github</p>
                            </button>
                        </div>
                        <div className="flex flex-row items-center text-center">
                            <div className="w-5/12 h-[1px] bg-slate-400"></div>
                            <div className="w-2/12">OR</div>
                            <div className="w-5/12 h-[1px] bg-slate-400"></div>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={signIn}>
                            <div>
                                <label htmlFor="email" className="info-input-label">Your email</label>
                                <input className="info-input" onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" name="email" id="email" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="info-input-label">Password</label>
                                <input className="info-input" onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" name="password" id="password" placeholder="••••••••" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input className="info-check" id="remember" aria-describedby="remember" type="checkbox" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit" className="info-submit">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link href={"/login/sign"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
