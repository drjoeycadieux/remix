import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Community - CloudFoundry" },
        { name: "description", content: "Join the CloudFoundry community. Connect with developers, get support, and contribute to the future of cloud-native applications." },
    ];
};

export default function Community() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Join Our Community
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Connect with thousands of developers building the future of cloud-native applications.
                        </p>
                    </div>
                </div>
            </div>

            {/* Community Stats */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                        <div className="text-gray-300">Active Developers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
                        <div className="text-gray-300">Apps Deployed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
                        <div className="text-gray-300">Countries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-gray-300">Community Support</div>
                    </div>
                </div>

                {/* Community Channels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {/* Discord */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Discord Server</h3>
                        <p className="text-gray-300 mb-6">Real-time chat with developers and get instant help with your questions.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            Join Discord
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* GitHub */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">GitHub Repository</h3>
                        <p className="text-gray-300 mb-6">Contribute to the codebase, report issues, and track development progress.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            View on GitHub
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Forum */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
                        <p className="text-gray-300 mb-6">In-depth discussions, tutorials, and knowledge sharing with the community.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            Visit Forum
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* YouTube */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">YouTube Channel</h3>
                        <p className="text-gray-300 mb-6">Video tutorials, webinars, and developer stories from the community.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            Watch Videos
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Twitter */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Twitter</h3>
                        <p className="text-gray-300 mb-6">Follow us for the latest updates, announcements, and community highlights.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            Follow Us
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Slack */}
                    <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Slack Workspace</h3>
                        <p className="text-gray-300 mb-6">Join our Slack workspace for organized discussions and team collaboration.</p>
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                            Join Slack
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Community Guidelines */}
                <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Community Guidelines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">✨ Be Respectful</h3>
                            <p className="text-gray-300 mb-6">Treat all community members with respect and kindness. We're all here to learn and grow together.</p>

                            <h3 className="text-xl font-semibold text-white mb-4">🤝 Help Others</h3>
                            <p className="text-gray-300">Share your knowledge and help fellow developers solve problems. Everyone benefits when we support each other.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">🔍 Search First</h3>
                            <p className="text-gray-300 mb-6">Before asking a question, search existing discussions to see if it's already been answered.</p>

                            <h3 className="text-xl font-semibold text-white mb-4">📝 Be Clear</h3>
                            <p className="text-gray-300">Provide clear, detailed questions with relevant code examples and error messages when seeking help.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Involved?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join thousands of developers building the future of cloud-native applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/quickstart" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </a>
                        <a href="/docs" className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors duration-200">
                            Read Docs
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
