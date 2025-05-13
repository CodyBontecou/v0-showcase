'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../contexts/auth-context'

// Define form schemas for different auth forms
const signInSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
})

const signUpSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
})

const resetPasswordSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address' }),
})

type AuthFormProps = {
    type: 'signin' | 'signup' | 'reset-password'
}

export function AuthForm({ type }: AuthFormProps) {
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { signIn, signUp, resetPassword } = useAuth()

    // Determine which schema to use based on form type
    const schema =
        type === 'signin'
            ? signInSchema
            : type === 'signup'
            ? signUpSchema
            : resetPasswordSchema

    // Set up form with react-hook-form and zod validation
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
    })

    const onSubmit = async (data: any) => {
        setIsLoading(true)
        setError(null)
        setSuccess(null)

        try {
            if (type === 'signin') {
                const { error } = await signIn(data.email, data.password)
                if (error) throw error
                router.push('/dashboard')
            } else if (type === 'signup') {
                const { error } = await signUp(
                    data.email,
                    data.password,
                    data.fullName
                )
                if (error) throw error
                setSuccess(
                    'Account created successfully! Please check your email for verification.'
                )
            } else if (type === 'reset-password') {
                const { error } = await resetPassword(data.email)
                if (error) throw error
                setSuccess('Password reset link sent to your email.')
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {success && (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}

            {type === 'signup' && (
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        placeholder="John Doe"
                        {...register('fullName')}
                        disabled={isLoading}
                    />
                    {errors.fullName && (
                        <p className="text-sm text-red-500">
                            {errors.fullName.message as string}
                        </p>
                    )}
                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register('email')}
                    disabled={isLoading}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">
                        {errors.email.message as string}
                    </p>
                )}
            </div>

            {type !== 'reset-password' && (
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        {...register('password')}
                        disabled={isLoading}
                    />
                    {errors.password && (
                        <p className="text-sm text-red-500">
                            {errors.password.message as string}
                        </p>
                    )}
                </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading
                    ? 'Loading...'
                    : type === 'signin'
                    ? 'Sign In'
                    : type === 'signup'
                    ? 'Sign Up'
                    : 'Reset Password'}
            </Button>
        </form>
    )
}
