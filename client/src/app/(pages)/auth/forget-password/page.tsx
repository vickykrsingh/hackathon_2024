import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <main className='w-full min-h-[90vh] bg-gray-300 flex items-center justify-center'>
      <section className='min-w-96 bg-gray-100 min-h-max rounded-sm shadow-md p-4'>
        <h1 className='font-semibold text-xl text-center my-2'>Forget Password</h1>
        <form className='flex gap-2 flex-col'>
          <Input placeholder='Enter email' type='text' />
          <Input placeholder='Enter Code' type='password' />
          <div className='flex justify-between mt-2'>
          <div className='flex gap-2'>
          <Button type='submit'>Login</Button>
          <Button type='submit'>Get Code</Button>
          </div>
          </div>
        </form>
        <div className='mt-4 flex justify-end'>
          <Link href={'/register'} className='text-sm flex gap-1' > <ArrowLeft size={20}/> Back to login </Link>
        </div>
      </section>
    </main>
  )
}

export default LoginPage