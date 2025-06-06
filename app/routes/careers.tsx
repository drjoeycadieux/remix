import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Careers - CloudFoundry" },
        { name: "description", content: "Join the CloudFoundry team. Build the future of cloud-native technology with a passionate team of innovators." },
    ];
};

export default function Careers() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Join Our Mission
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Help us build the future of cloud-native technology. Join a team of passionate innovators shaping how developers deploy and scale applications.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Work With Us */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Why CloudFoundry?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                            <p className="text-gray-300">Work with the latest cloud-native technologies and help define industry standards.</p>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Collaborative Culture</h3>
                            <p className="text-gray-300">Join a diverse team of experts who value collaboration, innovation, and continuous learning.</p>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Global Impact</h3>
                            <p className="text-gray-300">Your work will impact millions of developers and applications worldwide.</p>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Competitive Benefits</h3>
                            <p className="text-gray-300">Comprehensive benefits, equity participation, and flexible work arrangements.</p>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Innovation Focus</h3>
                            <p className="text-gray-300">Dedicated time for research, experimentation, and contributing to open source.</p>
                        </div>

                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Career Growth</h3>
                            <p className="text-gray-300">Clear career paths, mentorship programs, and opportunities for leadership development.</p>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
                    <div className="space-y-6">

                        {/* Senior Software Engineer */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-white mr-4">Senior Software Engineer</h3>
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Full-time</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Lead the development of core platform features and mentor junior engineers. Work with containerization, microservices, and distributed systems.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Go</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Kubernetes</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Docker</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">gRPC</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        San Francisco, CA / Remote
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-8">
                                    <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                        Apply Now
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* DevOps Engineer */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-white mr-4">DevOps Engineer</h3>
                                        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Full-time</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems. Ensure platform reliability and scalability.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">AWS</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Terraform</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Jenkins</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Prometheus</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        New York, NY / Remote
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-8">
                                    <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                        Apply Now
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Product Manager */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-white mr-4">Senior Product Manager</h3>
                                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Full-time</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Drive product strategy and roadmap for our developer platform. Work closely with engineering and design to deliver exceptional user experiences.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Product Strategy</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">User Research</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Analytics</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Agile</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Austin, TX / Remote
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-8">
                                    <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                        Apply Now
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* UX Designer */}
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-2xl font-semibold text-white mr-4">Senior UX Designer</h3>
                                        <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Full-time</span>
                                    </div>
                                    <p className="text-gray-300 mb-4">
                                        Design intuitive and powerful experiences for developers using our platform. Lead user research and create design systems.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Figma</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">User Research</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Prototyping</span>
                                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Design Systems</span>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Seattle, WA / Remote
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 md:ml-8">
                                    <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                        Apply Now
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Process */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Hiring Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Application</h3>
                            <p className="text-gray-300">Submit your application and we'll review it within 48 hours.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Phone Screen</h3>
                            <p className="text-gray-300">30-minute call to discuss your background and interest in the role.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Technical Interview</h3>
                            <p className="text-gray-300">Deep dive into technical skills and problem-solving approach.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-xl font-bold">4</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Final Interview</h3>
                            <p className="text-gray-300">Meet the team and discuss how you'll contribute to our mission.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Don't See the Right Role?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            We're always looking for talented individuals to join our team. Send us your resume and tell us how you'd like to contribute.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:careers@cloudfoundry.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Send General Application
                            </a>
                            <a href="/community" className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors duration-200">
                                Join Our Community
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
