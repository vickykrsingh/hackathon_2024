import Login from '@/components/CLC/Login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <main className='w-full min-h-[90vh] bg-gray-300 flex items-center justify-center'>
      <section className='min-w-96 bg-gray-100 min-h-max rounded-sm shadow-md p-4'>
        <h1 className='font-semibold text-2xl text-center my-2'>Login</h1>
        <Login/>
        <div className='mt-4 text-center'>
          <Link href={'/auth/register'} className='text-sm' >Create an account ?</Link>
        </div>
      </section>
    </main>
  )
}

export default LoginPage