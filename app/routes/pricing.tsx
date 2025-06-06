import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Pricing | CloudFoundry - Modern Software Foundations" },
        { name: "description", content: "Choose the perfect CloudFoundry plan for your team. Transparent pricing for cloud-native development at any scale." },
    ];
};

export default function Pricing() {
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
                                Simple Pricing
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                            <span className="block">Scale with</span>
                            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Confidence
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
                            Choose the plan that fits your needs. Start free and scale as you grow.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Starter Plan */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                                    <p className="text-gray-400 mb-6">Perfect for individual developers</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">$0</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-left">
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            1 Project
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            10GB Storage
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Community Support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Basic Analytics
                                        </li>
                                    </ul>
                                    <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                                        Get Started Free
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/50">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                                    <p className="text-gray-400 mb-6">Perfect for growing teams</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">$49</span>
                                        <span className="text-gray-400">/month</span>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-left">
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Unlimited Projects
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            100GB Storage
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Priority Support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Advanced Analytics
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Team Collaboration
                                        </li>
                                    </ul>
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-200">
                                        Start Pro Trial
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                    <p className="text-gray-400 mb-6">For large organizations</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-white">Custom</span>
                                    </div>
                                    <ul className="space-y-3 mb-8 text-left">
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Unlimited Everything
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Dedicated Support
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Custom Integrations
                                        </li>
                                        <li className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            On-premise Deployment
                                        </li>
                                    </ul>
                                    <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-500 transition-colors duration-200">
                                        Contact Sales
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">Can I change plans later?</h3>
                                <p className="text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">Is there a free trial?</h3>
                                <p className="text-gray-400">Pro plan comes with a 14-day free trial. No credit card required.</p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">What about data security?</h3>
                                <p className="text-gray-400">All data is encrypted at rest and in transit with enterprise-grade security.</p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-white mb-2">Do you offer support?</h3>
                                <p className="text-gray-400">Community support for free plan, priority support for Pro, and dedicated support for Enterprise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
