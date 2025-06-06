import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Security | CloudFoundry - Modern Software Foundations" },
        { name: "description", content: "Learn about CloudFoundry's enterprise-grade security features, compliance standards, and data protection measures." },
    ];
};

export default function Security() {
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
                            <span className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 ring-1 ring-inset ring-green-500/20">
                                🔒 Enterprise Security
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                            <span className="block">Security You Can</span>
                            <span className="block bg-gradient-to-r from-green-400 to-cyan-300 bg-clip-text text-transparent">
                                Trust
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-xl leading-8 text-gray-300">
                            Enterprise-grade security built into every layer of our platform. Your data and applications are protected by industry-leading security measures.
                        </p>
                    </div>

                    {/* Security Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Zero Trust Architecture */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-green-400 mb-4">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Zero Trust Architecture</h3>
                                <p className="text-gray-300 mb-4">
                                    Never trust, always verify. Our zero-trust security model ensures that every request is authenticated and authorized before access is granted.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Multi-factor authentication
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Identity-based access control
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Continuous monitoring
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Data Encryption */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">End-to-End Encryption</h3>
                                <p className="text-gray-300 mb-4">
                                    Your data is protected with AES-256 encryption at rest and TLS 1.3 encryption in transit. Security keys are managed with industry-standard practices.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        AES-256 encryption at rest
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        TLS 1.3 in transit
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Hardware security modules
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Compliance */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-purple-400 mb-4">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Compliance Standards</h3>
                                <p className="text-gray-300 mb-4">
                                    We maintain the highest compliance standards to ensure your data meets regulatory requirements across industries and regions.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        SOC 2 Type II certified
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        GDPR compliant
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        ISO 27001 certified
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Monitoring & Alerts */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <div className="text-orange-400 mb-4">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
                                <p className="text-gray-300 mb-4">
                                    Our security operations center monitors your infrastructure 24/7, detecting and responding to threats in real-time.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Real-time threat detection
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Automated incident response
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Security event logging
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Security Stats */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8">Security by the Numbers</h2>
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-400">99.99%</div>
                                <div className="text-sm text-gray-400 mt-2">Uptime SLA</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-blue-400">&lt; 1s</div>
                                <div className="text-sm text-gray-400 mt-2">Threat Response</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-purple-400">0</div>
                                <div className="text-sm text-gray-400 mt-2">Data Breaches</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-cyan-400">256-bit</div>
                                <div className="text-sm text-gray-400 mt-2">Encryption</div>
                            </div>
                        </div>
                    </div>

                    {/* Security Contact */}
                    <div className="text-center">
                        <div className="relative group max-w-2xl mx-auto">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-4">Security Questions?</h3>
                                <p className="text-gray-300 mb-6">
                                    Our security team is here to help. Contact us for security assessments, compliance documentation, or any security-related questions.
                                </p>
                                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-8 rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-200">
                                    Contact Security Team
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
