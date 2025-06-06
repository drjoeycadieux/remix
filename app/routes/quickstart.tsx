import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Quick Start - CloudFoundry" },
        { name: "description", content: "Get started with CloudFoundry in minutes. Deploy your first application to the cloud with our step-by-step guide." },
    ];
};

export default function QuickStart() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Quick Start Guide
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Deploy your first application in minutes. Follow our simple guide to get up and running with CloudFoundry.
                        </p>
                    </div>
                </div>
            </div>

            {/* Steps Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <div className="mx-auto max-w-4xl">
                    {/* Step 1 */}
                    <div className="mb-16">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    1
                                </div>
                                <h2 className="text-2xl font-bold text-white">Sign Up & Install CLI</h2>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Create your CloudFoundry account and install our command-line interface to manage your applications.
                            </p>
                            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                <code className="text-green-400 text-sm">
                                    # Install CloudFoundry CLI<br />
                                    npm install -g @cloudFoundry/cli<br /><br />
                                    # Login to your account<br />
                                    cf login
                                </code>
                            </div>
                            <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                Create Account
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-16">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    2
                                </div>
                                <h2 className="text-2xl font-bold text-white">Prepare Your Application</h2>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Configure your application with a simple manifest file that defines your deployment settings.
                            </p>
                            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                <code className="text-green-400 text-sm">
                                    # Create manifest.yml<br />
                                    applications:<br />
                                    &nbsp;&nbsp;- name: my-app<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;memory: 512M<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;instances: 2<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;buildpack: nodejs_buildpack
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mb-16">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                    3
                                </div>
                                <h2 className="text-2xl font-bold text-white">Deploy to Cloud</h2>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Push your application to CloudFoundry with a single command. Watch as it automatically builds and deploys.
                            </p>
                            <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                <code className="text-green-400 text-sm">
                                    # Deploy your application<br />
                                    cf push<br /><br />
                                    # Check application status<br />
                                    cf apps
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    <div className="text-center">
                        <div className="relative rounded-2xl border border-green-500/20 bg-green-900/10 backdrop-blur-sm p-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                🎉 Congratulations!
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Your application is now running in the cloud. You can access it at your assigned URL and start scaling as needed.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/docs" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                                    Explore Documentation
                                </a>
                                <a href="/examples" className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors duration-200">
                                    View Examples
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
