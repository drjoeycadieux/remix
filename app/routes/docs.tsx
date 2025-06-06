import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Documentation | CloudFoundry - Modern Software Foundations" },
        { name: "description", content: "Comprehensive documentation for CloudFoundry's cloud-native platform. Get started with guides, API references, and examples." },
    ];
};

export default function Docs() {
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
                                📚 Developer Resources
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                            <span className="block">Complete</span>
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Documentation
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
                            Everything you need to build amazing applications with CloudFoundry. From quick starts to advanced concepts.
                        </p>
                    </div>

                    {/* Documentation Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {/* Getting Started */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-green-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Getting Started</h3>
                                <p className="text-gray-300 mb-4">
                                    New to CloudFoundry? Start here with our step-by-step guides and tutorials.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Installation Guide</li>
                                    <li>• Your First Application</li>
                                    <li>• Basic Concepts</li>
                                    <li>• Environment Setup</li>
                                </ul>
                            </div>
                        </div>

                        {/* API Reference */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Platform SDK</h3>
                                <p className="text-gray-300 mb-4">
                                    Comprehensive SDK documentation with code examples and best practices.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• JavaScript/TypeScript SDK</li>
                                    <li>• Python SDK</li>
                                    <li>• Go SDK</li>
                                    <li>• REST API Reference</li>
                                </ul>
                            </div>
                        </div>

                        {/* Deployment */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-purple-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
                                <p className="text-gray-300 mb-4">
                                    Learn how to deploy and manage your applications in production.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Docker Containers</li>
                                    <li>• Kubernetes Integration</li>
                                    <li>• CI/CD Pipelines</li>
                                    <li>• Production Best Practices</li>
                                </ul>
                            </div>
                        </div>

                        {/* Architecture */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-orange-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Architecture</h3>
                                <p className="text-gray-300 mb-4">
                                    Deep dive into CloudFoundry's architecture and design patterns.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• System Architecture</li>
                                    <li>• Microservices Patterns</li>
                                    <li>• Data Flow</li>
                                    <li>• Security Model</li>
                                </ul>
                            </div>
                        </div>

                        {/* Monitoring */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-indigo-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Monitoring</h3>
                                <p className="text-gray-300 mb-4">
                                    Monitor and observe your applications with built-in tools.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Metrics & Logging</li>
                                    <li>• Performance Monitoring</li>
                                    <li>• Alerting Setup</li>
                                    <li>• Debugging Tools</li>
                                </ul>
                            </div>
                        </div>

                        {/* Troubleshooting */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-cyan-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Troubleshooting</h3>
                                <p className="text-gray-300 mb-4">
                                    Common issues and solutions to help you debug problems quickly.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Common Errors</li>
                                    <li>• Debug Techniques</li>
                                    <li>• Performance Issues</li>
                                    <li>• Support Resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8">Popular Documentation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <a href="/quickstart" className="group">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-blue-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Quick Start Guide</h3>
                                            <p className="text-gray-400">Get up and running in 5 minutes</p>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/examples" className="group">
                                <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-green-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Code Examples</h3>
                                            <p className="text-gray-400">Real-world implementation examples</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="text-center">
                        <div className="relative group max-w-2xl mx-auto">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h3>
                                <p className="text-gray-300 mb-6">
                                    Search our comprehensive documentation or reach out to our community for help.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-200">
                                        Search Docs
                                    </button>
                                    <a href="/community" className="border border-gray-600 text-gray-300 py-3 px-6 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200">
                                        Join Community
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
