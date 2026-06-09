"use client";

import Link from "next/link";
import { useState } from "react";

import {Button, Card, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { authClient } from "@/lib/auth-client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";


export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [loading, setLoading] = useState(false);

  // Success & Error Messages
  const [success, setSuccess] = useState("");
  const [apiError, setApiError] = useState("");

  const OnSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setApiError("");

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(
      formData.entries()
    );

    try {
      setLoading(true);

      const { data, error } =
        await authClient.signIn.email({
          email: user.email,
          password: user.password,
        });

      if (error) {
        setApiError(
          error.message || "Signin Failed"
        );

        return;
      }

      if (data) {
        setSuccess("Login successful");
        toast.success("Login successful");

        setTimeout(() => {
          router.push(redirectTo);
        }, 1500);
      }
    } catch (err) {
      setApiError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
      
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />

      <div className="relative w-full max-w-md">
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Sign in to continue to HireLoop
          </p>
        </div>

        {/* Card */}
        <Card className="border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          {/* API Error */}
          {apiError && (
            <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {apiError}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-5 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              {success}
            </div>
          )}

          {/* Form */}
          <Form
            onSubmit={OnSubmit}
            className="flex flex-col gap-5"
          >

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "Please enter a valid email";
                }

                return null;
              }}
            >
              <Label className="text-gray-300">
                Email Address
              </Label>

              <Input
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />

              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              className="w-full"
            >
              <Label className="text-gray-300">
                Password
              </Label>

              <div className="relative w-full">
                <Input
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 pr-12 text-white placeholder:text-gray-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>

              <FieldError />
            </TextField>

            {/* Forgot Password */}
            <div className="w-full text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={loading}
              className="mt-2 h-12 w-full rounded-xl bg-white font-semibold text-black hover:bg-gray-200"
            >
              Sign In
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <Separator className="bg-white/10 w-1/3" />

            <span className="whitespace-nowrap text-sm text-gray-500">
              Or continue with
            </span>

            <Separator className="bg-white/10 w-1/3" />
          </div>

          {/* Google Sign In */}
          <Button
            onClick={handleGoogleSignin}
            variant="bordered"
            className="h-12 w-full rounded-xl border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10"
          >
            <FcGoogle size={22} />
            Sign In With Google
          </Button>

          {/* Bottom */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href={`/register?redirect=${redirectTo}`} 
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Sign Up
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}