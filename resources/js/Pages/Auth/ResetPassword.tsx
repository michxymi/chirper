import { InertiaFormErrors } from "@/Components/Inertia/FormErrors";
import { Button } from "@/Components/UI/Button";
import { Input } from "@/Components/UI/Input";
import { Label } from "@/Components/UI/Label";
import { Head, Link, useForm } from "@inertiajs/react";
import { RiDonutChartFill } from "@remixicon/react";
import { route } from "momentum-trail";
import type { FormEventHandler } from "react";

export default function ResetPassword({
	token,
	email,
}: {
	token: string;
	email: string;
}) {
	const { data, setData, post, processing, errors, reset } = useForm({
		token: token,
		email: email,
		password: "",
		password_confirmation: "",
	});

	const onSubmitHandler: FormEventHandler = (e) => {
		e.preventDefault();

		post(route("password.store"), {
			onFinish: () => reset("password", "password_confirmation"),
		});
	};

	return (
		<>
			<Head title="Reset Password" />
			<InertiaFormErrors title="Reset Password Failed" errors={errors} />
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
						Reset your password
					</h3>
					<p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
						Setup your new credentials to keep your account secure.
					</p>
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
								value={data.email}
								disabled
								className="mt-2"
							/>
						</div>
						<div>
							<Label
								htmlFor="password"
								className="text-sm font-medium text-gray-900 dark:text-gray-50"
							>
								New Password
							</Label>
							<Input
								type="password"
								id="password"
								name="password"
								autoComplete="new-password"
								required
								value={data.password}
								onChange={(e) => setData("password", e.target.value)}
								className="mt-2"
							/>
						</div>
						<div>
							<Label
								htmlFor="password_confirmation"
								className="text-sm font-medium text-gray-900 dark:text-gray-50"
							>
								Confirm New Password
							</Label>
							<Input
								type="password"
								id="password_confirmation"
								name="password_confirmation"
								autoComplete="new-password"
								required
								value={data.password_confirmation}
								onChange={(e) =>
									setData("password_confirmation", e.target.value)
								}
								className="mt-2"
							/>
						</div>
						<Button type="submit" className="mt-4 w-full" disabled={processing}>
							{processing ? "..." : "Reset Password"}
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
	);
}
