import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
    { title: "API Documentation | Techtack-Technologies" },
    { name: "description", content: "API documentation for Techtack-Technologies" },
];

export default function ApiDocs() {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold mb-4 text-blue-400">API Documentation</h1>
                <p className="mb-6 text-gray-300">
                    Welcome to the Techtack-Technologies API documentation. Here you’ll find all the information you need to integrate with our platform.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-blue-300">Authentication</h2>
                    <p className="mb-2 text-gray-300">
                        All API requests require an API key. You can obtain your key from your dashboard.
                    </p>
                    <pre className="bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                        <code>
                            {`Authorization: Bearer YOUR_API_KEY`}
                        </code>
                    </pre>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2 text-blue-300">Example Request</h2>
                    <pre className="bg-gray-700 rounded p-4 text-sm overflow-x-auto">
                        <code>
                            {`GET /api/v1/users
Host: api.techtack-technologies.info
Authorization: Bearer YOUR_API_KEY`}
                        </code>
                    </pre>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-blue-300">Endpoints</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>
                            <span className="font-mono text-green-400">GET /api/v1/users</span> - List all users
                        </li>
                        <li>
                            <span className="font-mono text-green-400">POST /api/v1/users</span> - Create a new user
                        </li>
                        <li>
                            <span className="font-mono text-green-400">GET /api/v1/users/:id</span> - Get user by ID
                        </li>
                        <li>
                            <span className="font-mono text-green-400">PUT /api/v1/users/:id</span> - Update user by ID
                        </li>
                        <li>
                            <span className="font-mono text-green-400">DELETE /api/v1/users/:id</span> - Delete user by ID
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}