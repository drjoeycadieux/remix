import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Examples - CloudFoundry" },
        { name: "description", content: "Explore real-world examples and sample applications built with CloudFoundry. Learn from practical implementations." },
    ];
};

export default function Examples() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Example Applications
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Learn from real-world examples and get inspired by what others have built with CloudFoundry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Example Categories */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">

                {/* Web Applications */}
                <section className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Web Applications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* E-commerce App */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">E-commerce Platform</h3>
                            <p className="text-gray-300 mb-4">Full-featured online store with payment processing, inventory management, and user authentication.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PostgreSQL</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    View Demo
                                </a>
                                <a href="#" className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Code
                                </a>
                            </div>
                        </div>

                        {/* Social Media App */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-red-600/20 rounded-lg mb-6 flex items-center justify-center">
                                <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Social Media Dashboard</h3>
                            <p className="text-gray-300 mb-4">Real-time social media platform with posts, comments, likes, and user profiles.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Vue.js</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Express</span>
                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Redis</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    View Demo
                                </a>
                                <a href="#" className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Code
                                </a>
                            </div>
                        </div>

                        {/* Task Management */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-lg mb-6 flex items-center justify-center">
                                <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Task Management System</h3>
                            <p className="text-gray-300 mb-4">Collaborative project management tool with kanban boards, time tracking, and team features.</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Angular</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Spring Boot</span>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">MySQL</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    View Demo
                                </a>
                                <a href="#" className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* API Services */}
                <section className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white">API Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* REST API */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                            <h3 className="text-xl font-semibold text-white mb-4">RESTful API Service</h3>
                            <p className="text-gray-300 mb-6">Complete REST API with authentication, CRUD operations, and comprehensive documentation.</p>
                            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                <code className="text-green-400 text-sm">
                                    GET /api/users<br />
                                    POST /api/users<br />
                                    PUT /api/users/:id<br />
                                    DELETE /api/users/:id
                                </code>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">FastAPI</span>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">PostgreSQL</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    Try API
                                </a>
                                <a href="#" className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Code
                                </a>
                            </div>
                        </div>

                        {/* GraphQL API */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                            <h3 className="text-xl font-semibold text-white mb-4">GraphQL API</h3>
                            <p className="text-gray-300 mb-6">Modern GraphQL API with real-time subscriptions and efficient data fetching.</p>
                            <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                <code className="text-green-400 text-sm">
                                    query &#123;<br />
                                    &nbsp;&nbsp;users &#123;<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;id name email<br />
                                    &nbsp;&nbsp;&#125;<br />
                                    &#125;
                                </code>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">GraphQL</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Node.js</span>
                                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-3">
                                <a href="#" className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    Playground
                                </a>
                                <a href="#" className="flex-1 text-center py-2 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Microservices */}
                <section className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Microservices Architecture</h2>
                    </div>

                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                        <h3 className="text-2xl font-semibold text-white mb-6">Complete Microservices Setup</h3>
                        <p className="text-gray-300 mb-8">
                            Full microservices architecture with service discovery, API gateway, and distributed tracing.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="text-center p-4 border border-gray-700 rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-3"></div>
                                <h4 className="font-semibold text-white mb-2">API Gateway</h4>
                                <p className="text-gray-400 text-sm">Request routing and authentication</p>
                            </div>
                            <div className="text-center p-4 border border-gray-700 rounded-lg">
                                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-3"></div>
                                <h4 className="font-semibold text-white mb-2">User Service</h4>
                                <p className="text-gray-400 text-sm">User management and profiles</p>
                            </div>
                            <div className="text-center p-4 border border-gray-700 rounded-lg">
                                <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-3"></div>
                                <h4 className="font-semibold text-white mb-2">Order Service</h4>
                                <p className="text-gray-400 text-sm">Order processing and tracking</p>
                            </div>
                            <div className="text-center p-4 border border-gray-700 rounded-lg">
                                <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-3"></div>
                                <h4 className="font-semibold text-white mb-2">Payment Service</h4>
                                <p className="text-gray-400 text-sm">Payment processing and billing</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Docker</span>
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Kubernetes</span>
                            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Consul</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Jaeger</span>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                Deploy Stack
                            </a>
                            <a href="#" className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                View Architecture
                            </a>
                        </div>
                    </div>
                </section>

                {/* Templates */}
                <section>
                    <div className="flex items-center mb-12">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Starter Templates</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                            <h3 className="text-lg font-semibold text-white mb-3">React + TypeScript</h3>
                            <p className="text-gray-300 text-sm mb-4">Modern React app with TypeScript, Tailwind CSS, and testing setup.</p>
                            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                Use Template
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                            <h3 className="text-lg font-semibold text-white mb-3">Next.js Fullstack</h3>
                            <p className="text-gray-300 text-sm mb-4">Complete Next.js application with API routes and database integration.</p>
                            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                Use Template
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                            <h3 className="text-lg font-semibold text-white mb-3">Python FastAPI</h3>
                            <p className="text-gray-300 text-sm mb-4">High-performance API template with automatic documentation.</p>
                            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                Use Template
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-white mb-6">Build Your Own</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Ready to create your own cloud-native application? Get started with our platform today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/quickstart" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </a>
                        <a href="/docs" className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors duration-200">
                            Read Documentation
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
