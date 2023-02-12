'use client'
import '../../styles/globals.css'
import { Navbar } from '@/components'
import { useRouter } from 'next/navigation';
import Link from 'next/link'

import Providers from './providers';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Providers>
          <nav><Navbar /></nav>

          <div className='min-h-screen'>{children}</div>

          <footer className='border-t flex items-center justify-around'>
            <div>@WardrobeMax All rights reserved</div>
            <div>
              <div className="mr-[20px] mb-[15px]">
                <Link href="/login">Login</Link>
              </div>
              <div>
                <Link href="/register">Register</Link>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'Loading') {
    return <div>Loading...</div>;
  }

  if (adminOnly && !session.user.isAdmin) {
    router.push('/unauthorized?message= admin login required')
  }

  return children;
}
