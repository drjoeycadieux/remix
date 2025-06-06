import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "About Us | CloudFoundry - Modern Software Foundations" },
        { name: "description", content: "Learn about CloudFoundry's mission to revolutionize cloud-native software development with modern foundations and cutting-edge architecture." },
    ];
};

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
            </div>

            <div className="relative px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
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
                                About Our Mission
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                            <span className="block">Building the</span>
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Future of Cloud
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
                            We're pioneering the next generation of cloud-native software foundations,
                            empowering developers to build scalable, resilient applications.
                        </p>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Mission Card */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    To revolutionize cloud-native development by providing cutting-edge software foundations
                                    that enable developers to build, deploy, and scale applications with unprecedented speed and reliability.
                                </p>
                            </div>
                        </div>

                        {/* Vision Card */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-purple-400 mb-4">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                                <p className="text-gray-300 leading-relaxed">
                                    To become the global standard for cloud-native software foundations, creating an ecosystem
                                    where innovation thrives and developers can focus on solving real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                The principles that guide our work and shape our culture
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Innovation */}
                            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-gray-700">
                                <div className="text-blue-400 mb-4 flex justify-center">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                                <p className="text-gray-400">
                                    Pushing boundaries and exploring new possibilities in cloud technology
                                </p>
                            </div>

                            {/* Reliability */}
                            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-gray-700">
                                <div className="text-green-400 mb-4 flex justify-center">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Reliability</h3>
                                <p className="text-gray-400">
                                    Building robust systems that developers can trust and depend on
                                </p>
                            </div>

                            {/* Community */}
                            <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-gray-700">
                                <div className="text-cyan-400 mb-4 flex justify-center">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
                                <p className="text-gray-400">
                                    Fostering collaboration and knowledge sharing across the developer ecosystem
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="text-center">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-green-400 mb-6 flex justify-center">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a.5.5 0 01.5.5v.5h-2V9a.5.5 0 01.5-.5m0 0V9a.5.5 0 01.5-.5V9l-2-2-.5.5a.5.5 0 000 .5V9a.5.5 0 01.5.5z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">Our Expert Team</h2>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                    Our diverse team of cloud architects, software engineers, and developer advocates brings together
                                    decades of experience in distributed systems, microservices, containerization, and modern web frameworks.
                                    We're passionate about creating tools that make developers' lives easier and applications more scalable.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-400">50+</div>
                                        <div className="text-sm text-gray-400">Engineers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-purple-400">15+</div>
                                        <div className="text-sm text-gray-400">Countries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400">100+</div>
                                        <div className="text-sm text-gray-400">Open Source</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-cyan-400">24/7</div>
                                        <div className="text-sm text-gray-400">Innovation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
            </div>
            <Footer />
        </div>
    );
}