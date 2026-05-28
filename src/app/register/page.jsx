"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

import { authClient } from "@/lib/auth-client";

import { redirect } from "next/navigation";

export default function SignUpPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

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

    // Confirm Password Validation
    if (
      user.password !== user.confirmPassword
    ) {
      setApiError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data, error } =
        await authClient.signUp.email({
          name: user.name,
          email: user.email,
          password: user.password,
          image: user.image,
        });

      if (error) {
        setApiError(
          error.message || "Signup Failed"
        );

        return;
      }

      if (data) {
        setSuccess(
          "Account created successfully"
        );

        setTimeout(() => {
          redirect("/signin");
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
            Create Account
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Join HireLoop and start your journey
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

            {/* Name */}
            <TextField
              isRequired
              name="name"
              type="text"
              className="w-full"
            >
              <Label className="text-gray-300">
                Full Name
              </Label>

              <Input
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />

              <FieldError />
            </TextField>

            {/* Image URL */}
            <TextField
              name="image"
              type="url"
              className="w-full"
            >
              <Label className="text-gray-300">
                Image URL (optional)
              </Label>

              <Input
                placeholder="Enter your photo URL"
                className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />

              <FieldError />
            </TextField>

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
              minLength={6}
              className="w-full"
              validate={(value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters";
                }

                return null;
              }}
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

              <Description className="text-xs text-gray-500">
                Password must be at least 6
                characters
              </Description>

              <FieldError />
            </TextField>

            {/* Confirm Password */}
            <TextField
              isRequired
              name="confirmPassword"
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              className="w-full"
              validate={(value) => {
                const password =
                  document.querySelector(
                    'input[name="password"]'
                  )?.value;

                if (value !== password) {
                  return "Passwords do not match";
                }

                return null;
              }}
            >
              <Label className="text-gray-300">
                Confirm Password
              </Label>

              <div className="relative w-full">
                <Input
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-white/10 bg-white/5 pr-12 text-white placeholder:text-gray-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </button>
              </div>

              <FieldError />
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={loading}
              className="mt-2 h-12 w-full rounded-xl bg-white font-semibold text-black hover:bg-gray-200"
            >
              Create Account
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

          {/* Google Sign Up */}
          <Button
            onClick={handleGoogleSignin}
            variant="bordered"
            className="h-12 w-full rounded-xl border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10"
          >
            <FcGoogle size={22} />
            Sign Up With Google
          </Button>

          {/* Bottom */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-violet-400 hover:text-violet-300"
            >
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}