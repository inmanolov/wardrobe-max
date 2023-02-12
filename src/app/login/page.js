'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { getError } from "@/utils/error";
import { toast } from 'react-toastify';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";

const Login = () => {
    const { data: session } = useSession();
    const [user, setUser] = useState();

    const router = useRouter();
    
    useEffect(() => {
        if (session?.user) {
            router.push('/');
        }
    }, [ session ]);

    if(session) {
        console.log(session.user);
    }

    const { handleSubmit, register, formState: { errors } } = useForm();

    const submitFormHandler = async ({ email, password }) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if(result.error) {
                toast.error(result.error);
            } else {
                console.log('Login successful')
            }
        } catch (error) {
            toast.error(getError(error));
        }
    }

    return (
        <div className="w-full flex items-center justify-center">
        <div className="w-96 h-96 mt-32 border">
            <form className="m-2" onSubmit={handleSubmit(submitFormHandler)}>
                <h1 className="mb-4 text-xl flex justify-center items-center">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        autoFocus
                        type="email"
                        className="w-full border mb-4"
                        {...register('email', {
                            required: 'Please enter email', pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                message: 'Please enter valid email address'
                            }
                        })}
                        ></input>
                    {errors.email && <div className="text-red-500">{errors.email.message}</div>}
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        autoFocus
                        type="password"
                        className="w-full border"
                        {...register('password', {
                            required: 'Please enter password',
                            minLength: { value: 6, message: 'Password must be more than 5 chars.' },
                        })}
                        ></input>
                    {errors.password && <div className="text-red-500">{errors.password.message}</div>}
                </div>
                <div className="mb-4 flex justify-center items-center">
                    <button className="rounded bg-amber-300 py-2 px-4 shadow-md outline-none hover:bg-amber-400 active:bg-amber-500">Login</button>
                </div>
                <div className="mb-4">
                    Don&apos;t have an account? &nbsp;
                    <Link href="register" className="underline hover:text-blue-400">Register</Link>
                </div>
            </form>
        </div>
        </div>
    )
};

export default Login;