import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Blog - CloudFoundry" },
        { name: "description", content: "Stay updated with the latest CloudFoundry news, tutorials, and insights from our engineering team and community." },
    ];
};

export default function Blog() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            CloudFoundry Blog
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Insights, tutorials, and updates from the CloudFoundry team and community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Article */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 mb-16">
                    <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm mr-3">Featured</span>
                        <span className="text-gray-400 text-sm">December 15, 2024</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Announcing CloudFoundry 3.0: The Future of Cloud-Native Development
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        We're excited to announce the release of CloudFoundry 3.0, featuring enhanced security, improved performance, and revolutionary new features that will transform how you build and deploy applications.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-semibold text-sm">CF</span>
                            </div>
                            <div>
                                <div className="text-white font-medium">CloudFoundry Team</div>
                                <div className="text-gray-400 text-sm">Engineering</div>
                            </div>
                        </div>
                        <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                            Read More
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-4 mb-12">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All Posts</button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200">Engineering</button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200">Tutorials</button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200">Product Updates</button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200">Community</button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors duration-200">Case Studies</button>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Blog Post 1 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs mr-2">Performance</span>
                            <span className="text-gray-400 text-sm">December 10, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            Optimizing Application Performance on CloudFoundry
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Learn how to monitor, analyze, and optimize your application's performance using CloudFoundry's built-in tools and best practices.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">AS</span>
                                </div>
                                <span className="text-gray-400 text-sm">Alex Smith</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>

                    {/* Blog Post 2 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs mr-2">Security</span>
                            <span className="text-gray-400 text-sm">December 8, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            Zero-Trust Security: A Deep Dive
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Explore how CloudFoundry implements zero-trust security principles to protect your applications and data in the cloud.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">MJ</span>
                                </div>
                                <span className="text-gray-400 text-sm">Maria Johnson</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>

                    {/* Blog Post 3 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs mr-2">Tutorial</span>
                            <span className="text-gray-400 text-sm">December 5, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            Building Your First Microservice
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Step-by-step guide to creating, deploying, and scaling your first microservice using CloudFoundry's platform.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">DK</span>
                                </div>
                                <span className="text-gray-400 text-sm">David Kim</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>

                    {/* Blog Post 4 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs mr-2">Architecture</span>
                            <span className="text-gray-400 text-sm">December 3, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            Container Orchestration Best Practices
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Learn how to effectively orchestrate containers in CloudFoundry for maximum efficiency and reliability.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">SL</span>
                                </div>
                                <span className="text-gray-400 text-sm">Sarah Lee</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>

                    {/* Blog Post 5 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs mr-2">Case Study</span>
                            <span className="text-gray-400 text-sm">November 30, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            How TechCorp Scaled to 1M Users
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Discover how TechCorp successfully scaled their application from thousands to millions of users using CloudFoundry.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">RT</span>
                                </div>
                                <span className="text-gray-400 text-sm">Robert Taylor</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>

                    {/* Blog Post 6 */}
                    <article className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-lg mb-6 flex items-center justify-center">
                            <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div className="flex items-center mb-3">
                            <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs mr-2">Analytics</span>
                            <span className="text-gray-400 text-sm">November 28, 2024</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                            Advanced Monitoring and Observability
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Master application monitoring and observability with CloudFoundry's comprehensive analytics and logging tools.
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full flex items-center justify-center mr-2">
                                    <span className="text-white font-semibold text-xs">EW</span>
                                </div>
                                <span className="text-gray-400 text-sm">Emily Wong</span>
                            </div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm">
                                Read More →
                            </a>
                        </div>
                    </article>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16">
                    <nav className="flex items-center space-x-2">
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200">2</button>
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200">3</button>
                        <span className="px-4 py-2 text-gray-400">...</span>
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200">12</button>
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200">
                            Next
                        </button>
                    </nav>
                </div>

                {/* Newsletter Signup */}
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-12 mt-20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Subscribe to our newsletter and never miss the latest CloudFoundry updates and insights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
