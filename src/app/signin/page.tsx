import Link from "next/link"
import { AuthForm } from "@/components/auth/auth-form"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm type="signin" />
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
              Sign Up
            </Link>
          </div>
          <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
            Forgot your password?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
