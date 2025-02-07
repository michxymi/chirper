import { Button } from '@/Components/UI/Button';
import { Label } from '@/Components/UI/Label';
import { Input } from '@/Components/UI/Input';
import { Head, Link, useForm } from '@inertiajs/react';
import { RiCheckboxCircleFill, RiCloseCircleFill, RiDonutChartFill, } from '@remixicon/react';
import { FormEventHandler } from 'react';
import { route } from "momentum-trail"
import { Callout } from '@/Components/UI/Callout';
import { InertiaFormErrors } from '@/Components/Inertia/FormErrors';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onSubmitHandler: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />
            {status && (
                <Callout variant="success" title='Password Reset Successfully' icon={RiCheckboxCircleFill}>
                    {status}
                </Callout>
            )}
            <InertiaFormErrors title="Password Reset Failed" errors={errors} icon={RiCloseCircleFill}/>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-4 lg:px-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="flex items-center space-x-2.5">
                        <RiDonutChartFill className="size-7 text-gray-900 dark:text-gray-50" />
                        <p className="font-medium text-gray-900 dark:text-gray-50">Company</p>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-50">Reset your password</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                        Enter your email to receive a reset link.
                    </p>
                    <form onSubmit={onSubmitHandler} className="mt-6 space-y-4">
                        <div>
                            <Label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                                Email
                            </Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-2"
                            />
                        </div>
                        <Button type="submit" className="mt-4 w-full" disabled={processing}>
                            {processing ? "Sending..." : "Send reset link"}
                        </Button>
                    </form>
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                        Remember your password?{" "}
                        <Link
                            href={route("login")}
                            className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-500 hover:dark:text-blue-600"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
