"use client"
import React from 'react'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { handleLogin } from '@/lib/action'

function Login() {
    const {toast} = useToast()
    const router = useRouter()
    const login = async (formData: FormData) => {
        const email = formData.get('email') as string|undefined
        const password = formData.get('password') as string|undefined

        if(!email||!password){
            throw new Error("all fields are required.")
        }

        const res = await handleLogin(email,password);
        if(res.success){
            toast({
                title:"success"
            })
            
            // router.push('/')
        }
    }
  return (
    <form className='flex gap-2 flex-col' action={login} >
          <Input placeholder='Enter email' type='text' name='email' />
          <Input placeholder='Enter password' type='password' name='password' />
          <div className='flex justify-between mt-2'>
          <Button type='submit'>Login</Button>
          <Link href={'/auth/forget-password'} className='underline tracking-wide mt-auto' >Forget password ?</Link>
          </div>
        </form>
  )
}

export default Login