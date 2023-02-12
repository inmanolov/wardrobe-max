'use client'
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const { data: session, status } = useSession();
    

    const logOutClickHandler = () => {
        signOut({ callbackUrl: '/' });
    }
    return (
        <div className="flex justify-between mt-[25px] border-b">
            <div className="ml-[35px] font-extrabold">
                <Link href="/">WardrobeMax</Link>
            </div>
            {status === 'loading' ? (
                'Loading'
            ) : session?.user ? (
                <div className="mr-[20px] flex justify-between">
                    <div className="mr-[20px]">
                        <div>{session.user.name}</div>
                    </div>
                    <div onClick={logOutClickHandler}>
                        <Link href="/">Log Out</Link>
                    </div>
                </div>
            ) : (
                <div className="mr-[20px] flex justify-between">
                    <div className="mr-[20px]">
                        <Link href="/login">Login</Link>
                    </div>
                    <div>
                        <Link href="/register">Register</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;