import { Head, Link } from '@inertiajs/react';
import { route } from "momentum-trail"

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <Link href={route("logout")} method="post">
                            Logout
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
