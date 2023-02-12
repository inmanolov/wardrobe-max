'use client'
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getError } from "@/utils/error";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from 'next-auth/react';

const Register = () => {
    const { handleSubmit, register, getValues, formState: { errors } } = useForm();

    const router = useRouter();

    const submitFormHandler = async ({ name, email, password }) => {
        try {
            await axios.post('/api/auth/signup', {
                name,
                email,
                password,
            });

        } catch (error) {
            toast.error(getError(error));
        }
    }

    return (
        <div className="w-full flex items-center justify-center">
        <div className="border mt-32 mb-96">
        <form className="m-2" onSubmit={handleSubmit(submitFormHandler)}>
            <h1 className="mb-4 text-xl flex justify-center items-center">Register</h1>
            <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="w-full border"
                    id="name"
                    autoFocus
                    {...register('name', {
                        required: 'Please enter name',
                    })}
                    />
                {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                    )}
            </div>
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    autoFocus
                    type="email"
                    className="w-full border"
                    {...register('email', {
                        required: 'Please enter email', pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                            message: 'Please enter valid email address'
                        }
                    })}
                    ></input>
                {errors.email && <div className="text-red-500">{errors.email.message}</div>}
            </div>
            <div className="mb-4">
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

            <div className="mb-4">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="w-full border"
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                        required: 'Please enter confirm password',
                        validate: (value) => value === getValues('password'),
                        minLength: {
                            value: 6,
                            message: 'confirm password is more than 5 chars',
                        },
                    })}
                />
                {errors.confirmPassword && (
                    <div className="text-red-500 ">
                        {errors.confirmPassword.message}
                    </div>
                )}
                {errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate' && (
                        <div className="text-red-500 ">Password do not match</div>
                        )}
            </div>

            <div className="mb-4 flex justify-center items-center">
                <button className="rounded bg-amber-300 py-2 px-4 shadow-md outline-none hover:bg-amber-400 active:bg-amber-500">Register</button>
            </div>
            <div className="mb-4">
                Already have an account? &nbsp;
                <Link href="login" className="underline hover:text-blue-400">Login</Link>
            </div>
        </form>
        </div>
        </div>
    )
};

export default Register;