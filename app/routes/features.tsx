import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Features | CloudFoundry - Modern Software Foundations" },
        { name: "description", content: "Discover CloudFoundry's powerful features for building scalable, cloud-native applications with modern architecture." },
    ];
};

export default function Features() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            </div>

            <div className="relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Back Button */}
                    <div className="mb-8">
                        <a
                            href="/"
                            className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-200 group"
                        >
                            <svg
                                className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </a>
                    </div>

                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="mb-6">
                            <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20">
                                Platform Features
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                            <span className="block">Powerful Features for</span>
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Modern Development
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
                            Everything you need to build, deploy, and scale cloud-native applications with confidence.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Feature 1 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Auto-Scaling</h3>
                                <p className="text-gray-300">
                                    Automatically scale your applications based on demand with intelligent resource management.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-purple-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Zero-Trust Security</h3>
                                <p className="text-gray-300">
                                    Built-in security with end-to-end encryption and compliance-ready frameworks.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-green-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Edge Computing</h3>
                                <p className="text-gray-300">
                                    Deploy closer to your users with global edge locations for ultra-low latency.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-orange-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Real-time Analytics</h3>
                                <p className="text-gray-300">
                                    Monitor your applications with comprehensive analytics and performance insights.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-indigo-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">DevOps Integration</h3>
                                <p className="text-gray-300">
                                    Seamless CI/CD pipelines with popular DevOps tools and workflows.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6 */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-cyan-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Microservices</h3>
                                <p className="text-gray-300">
                                    Build and manage microservices architecture with service mesh capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
