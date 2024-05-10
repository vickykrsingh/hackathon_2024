"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { handleOnSubmit } from '@/lib/action'
import { useToast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'


function Register() {
    const {toast} = useToast()
    const router = useRouter()
    const register = async (formData: FormData) => {
        const name = formData.get('name') as string|undefined
        const email = formData.get('email') as string|undefined
        const password = formData.get('password') as string|undefined
        const phone = formData.get('phone') as string|undefined
        const address = formData.get('address') as string|undefined

        if(!name||!email||!password||!phone||!address){
            throw new Error("all fields are required.")
        }

        const res = await handleOnSubmit(name,email,password,phone,address);
        if(res.success){
            toast({
                title:"success"
            })
            
            router.push('/auth/login')
        }
    }
    return (
        <form className='flex gap-2 flex-col' action={register}>
            <Input placeholder='Enter name' type='text' name='name' />
            <Input placeholder='Enter email' type='text' name='email' />
            <Input placeholder='Enter phone' type='text' name='phone' />
            <Input placeholder='Enter password' type='password' name='password' />
            <Input placeholder='Enter address' type='text' name='address' />

            <div className='flex justify-between mt-2'>
                <Button type='submit'>Register</Button>
                <Link href={'/auth/forget-password'} className='underline tracking-wide mt-auto' >Forget password ?</Link>
            </div>
        </form>
    )
}

export default Register