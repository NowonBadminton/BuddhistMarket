'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, onAuthStateChanged, signInWithEmailAndPassword, googleProvider, GoogleAuthProvider, githubProvider, GithubAuthProvider, signInWithPopup } from '../firebase';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

export default function login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login done. user = "+user.providerId);
            router.push("/");
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log("google login done. user = "+user.providerId);
            router.push("/");
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage+email+credential);
        });
    };
    const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log("github login done. user = "+user.providerId);
        router.push("/");
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        alert(errorMessage+email+credential);
    });
    };
    useEffect(() => {
        const authState = onAuthStateChanged(auth, (user) => {
            if (user) {
              router.push("/");
            };
        });
        return () => authState();
    }, []);

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-full">
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-full lg:py-0">
                <Link href={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Buddhist Market    
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="flex flex-row justify-between">
                            <button onClick={googleLogin} className="flex flex-row gap-2 items-center text-gray-500 px-4 py-2 border border-gray-300 shadow-sm rounded-lg focus:ring-2 focus:outline-none focus:ring-primary-300 hover:text-gray-700 hover:border-gray-400 hover:shadow-md dark:text-white">
                                <FcGoogle/>
                                <p className="text-sm">Log in with Google</p>
                            </button>
                            <button onClick={githubLogin} className="flex flex-row gap-2 items-center text-gray-500 px-4 py-2 border border-gray-300 shadow-sm rounded-lg hover:text-gray-700 focus:ring-2 focus:outline-none focus:ring-primary-300 hover:border-gray-400 hover:shadow-md dark:text-white">
                                <BsGithub/>
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
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
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
