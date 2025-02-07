// Modify your layout / template file as follows to center login form across the screen

// <html className"h-full"/>
// <body className"h-full"/>

// 'use client';

import { Button } from '@/Components/UI/Button';
import { Divider } from '@/Components/UI/Divider';
import { Input } from '@/Components/UI/Input';
import { Label } from '@/Components/UI/Label';
import { Callout } from '@/Components/UI/Callout';
import { Checkbox } from '@/Components/UI/Checkbox';
import { FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { route } from "momentum-trail"
import { RiDonutChartFill, RiCloseCircleFill, RiGithubFill, RiGoogleFill, RiCheckboxFill } from '@remixicon/react';
import { InertiaFormErrors } from '@/Components/Inertia/FormErrors';


export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const onSubmitHandler: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset('password'),
        });
    };


    return (
        <>
            <Head title='Log In' />
            {status &&
                <Callout variant="success" title='Login Successfully' icon={RiCheckboxFill}>
                    {status}
                </Callout>
            }
            <InertiaFormErrors title="Authentication Error" errors={errors} icon={RiCloseCircleFill}/>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="flex items-center space-x-2.5">
                        <RiDonutChartFill
                            className="size-7 text-gray-900 dark:text-gray-50"
                            aria-hidden={true}
                        />
                        <p className="font-medium text-gray-900 dark:text-gray-50">
                            Company
                        </p>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">
                        Sign in to your account
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                        Don't have an account?{' '}
                        <Link
                            href={route("register")}
                            className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                        >
                            Sign up
                        </Link>
                    </p>
                    <div className="mt-8 sm:flex sm:items-center sm:space-x-2">
                        <Button asChild variant="secondary" className="w-full" disabled={processing}>
                            <a href="#" className="inline-flex items-center gap-2">
                                <RiGithubFill className="size-5 shrink-0" aria-hidden={true} />
                                Login with GitHub
                            </a>
                        </Button>
                        <Button asChild variant="secondary" className="mt-2 w-full sm:mt-0" disabled={processing}>
                            <a href="#" className="inline-flex items-center gap-2">
                                <RiGoogleFill className="size-4" aria-hidden={true} />
                                Login with Google
                            </a>
                        </Button>
                    </div>
                    <Divider>or</Divider>
                    <form onSubmit={onSubmitHandler} className="mt-6 space-y-4">
                        <div>
                            <Label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-900 dark:text-gray-50"
                            >
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="username"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <Label
                                htmlFor="password"
                                className="text-sm font-medium text-gray-900 dark:text-gray-50"
                            >
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-start justify-end">
                            <div className="flex h-6 items-center">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', !!checked)}
                                />
                            </div>
                            <Label
                                htmlFor="remember"
                                className="ml-3 leading-6 text-gray-500 dark:text-gray-500"
                            >
                                Remember Me
                            </Label>
                        </div>
                        <Button type="submit" className="mt-4 w-full" disabled={processing}>
                            {processing ? "..." : "Sign in"}
                        </Button>
                    </form>
                    {
                        canResetPassword &&
                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                            Forgot your password?{' '}
                            <Link
                                href={route("password.request")}
                                className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                            >
                                Reset password
                            </Link>
                        </p>
                    }
                </div>
            </div>
        </>
    );
}