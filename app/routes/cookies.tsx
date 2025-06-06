import type { MetaFunction } from "@remix-run/node";
import { AlertBar } from "~/components/AlertBar";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => [
    { title: "Cookie Policy | CloudFoundry" },
    { name: "description", content: "Cookie Policy for CloudFoundry. Learn how we use cookies and similar technologies to improve your experience on our platform." },
];

export default function Cookies() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-3xl"></div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Cookie Policy
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            How we use cookies and similar technologies to enhance your CloudFoundry experience.
                        </p>
                        <div className="mt-4 text-sm text-gray-400">
                            Last updated: June 5, 2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
                    <div className="prose prose-invert prose-blue max-w-none">

                        {/* What Are Cookies */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">1. What Are Cookies?</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Cookies are small text files that are placed on your device when you visit our website.
                                    They help us provide you with a better experience by remembering your preferences and
                                    understanding how you use our services.
                                </p>
                                <p>
                                    Similar technologies include web beacons, pixels, and local storage, which serve similar purposes
                                    to cookies in helping us understand user behavior and improve our services.
                                </p>
                            </div>
                        </section>

                        {/* Types of Cookies */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">2. Types of Cookies We Use</h2>

                            {/* Essential Cookies */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Essential Cookies</h3>
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="space-y-4 text-gray-300">
                                        <p>
                                            <strong className="text-white">Purpose:</strong> These cookies are necessary for our website to function properly.
                                        </p>
                                        <p>
                                            <strong className="text-white">Examples:</strong> Authentication tokens, session management, security features
                                        </p>
                                        <p>
                                            <strong className="text-white">Retention:</strong> Session-based or up to 30 days
                                        </p>
                                        <p>
                                            <strong className="text-white">Can be disabled:</strong> ❌ Required for basic functionality
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Cookies */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Performance Cookies</h3>
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="space-y-4 text-gray-300">
                                        <p>
                                            <strong className="text-white">Purpose:</strong> Help us understand how visitors interact with our website.
                                        </p>
                                        <p>
                                            <strong className="text-white">Examples:</strong> Page views, load times, error tracking, user flow analysis
                                        </p>
                                        <p>
                                            <strong className="text-white">Retention:</strong> Up to 2 years
                                        </p>
                                        <p>
                                            <strong className="text-white">Can be disabled:</strong> ✅ Optional but helps us improve our service
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Functional Cookies */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Functional Cookies</h3>
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="space-y-4 text-gray-300">
                                        <p>
                                            <strong className="text-white">Purpose:</strong> Remember your preferences and settings for a personalized experience.
                                        </p>
                                        <p>
                                            <strong className="text-white">Examples:</strong> Language preferences, theme settings, dashboard customizations
                                        </p>
                                        <p>
                                            <strong className="text-white">Retention:</strong> Up to 1 year
                                        </p>
                                        <p>
                                            <strong className="text-white">Can be disabled:</strong> ✅ Optional but may affect user experience
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Marketing Cookies</h3>
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="space-y-4 text-gray-300">
                                        <p>
                                            <strong className="text-white">Purpose:</strong> Track visitors across websites to display relevant advertisements.
                                        </p>
                                        <p>
                                            <strong className="text-white">Examples:</strong> Ad targeting, conversion tracking, social media integration
                                        </p>
                                        <p>
                                            <strong className="text-white">Retention:</strong> Up to 1 year
                                        </p>
                                        <p>
                                            <strong className="text-white">Can be disabled:</strong> ✅ Fully optional
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Third-Party Cookies */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">3. Third-Party Services</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    We work with trusted third-party services that may place cookies on your device:
                                </p>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                                        <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                                        <p className="text-sm">Website traffic analysis and user behavior insights</p>
                                    </div>

                                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                                        <h4 className="font-semibold text-white mb-2">Stripe</h4>
                                        <p className="text-sm">Payment processing and fraud prevention</p>
                                    </div>

                                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                                        <h4 className="font-semibold text-white mb-2">Intercom</h4>
                                        <p className="text-sm">Customer support and communication</p>
                                    </div>

                                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
                                        <h4 className="font-semibold text-white mb-2">Cloudflare</h4>
                                        <p className="text-sm">Content delivery and security services</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Cookie Management */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">4. Managing Your Cookie Preferences</h2>
                            <div className="space-y-6 text-gray-300">

                                {/* Cookie Settings */}
                                <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg p-6 border border-blue-500/20">
                                    <h4 className="font-semibold text-white mb-3">CloudFoundry Cookie Settings</h4>
                                    <p className="mb-4">
                                        You can manage your cookie preferences through our cookie settings panel,
                                        which appears when you first visit our site or can be accessed anytime.
                                    </p>
                                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                                        Update Cookie Preferences
                                    </button>
                                </div>

                                {/* Browser Settings */}
                                <div>
                                    <h4 className="font-semibold text-white mb-3">Browser Settings</h4>
                                    <p className="mb-4">
                                        Most web browsers allow you to control cookies through their settings:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                        <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                                        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                                        <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                                    </ul>
                                </div>

                                {/* Mobile Devices */}
                                <div>
                                    <h4 className="font-semibold text-white mb-3">Mobile Devices</h4>
                                    <p>
                                        On mobile devices, you can manage cookies through your browser settings or
                                        adjust advertising preferences in your device settings.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Impact of Disabling Cookies */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">5. Impact of Disabling Cookies</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    While you can disable most cookies, please note that doing so may affect your experience:
                                </p>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                                        <h4 className="font-semibold text-red-300 mb-2">⚠️ Potential Issues</h4>
                                        <ul className="text-sm space-y-1">
                                            <li>• Loss of personalization</li>
                                            <li>• Need to re-enter preferences</li>
                                            <li>• Some features may not work</li>
                                            <li>• Less relevant content</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                                        <h4 className="font-semibold text-green-300 mb-2">✅ Still Available</h4>
                                        <ul className="text-sm space-y-1">
                                            <li>• Core platform functionality</li>
                                            <li>• Account management</li>
                                            <li>• Application deployment</li>
                                            <li>• Basic support features</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Data Protection */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">6. Data Protection & Security</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    We take the security of your cookie data seriously:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Cookies are encrypted and secured during transmission</li>
                                    <li>We regularly review and update our cookie practices</li>
                                    <li>Third-party services are vetted for security and privacy compliance</li>
                                    <li>We minimize data collection to what's necessary for functionality</li>
                                    <li>Cookie data is automatically deleted after expiration periods</li>
                                </ul>
                            </div>
                        </section>

                        {/* Legal Basis */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">7. Legal Basis for Cookie Use</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Our legal basis for using cookies depends on the type:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                        <div>
                                            <strong className="text-white">Essential Cookies:</strong> Legitimate interest for website operation
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                        <div>
                                            <strong className="text-white">Functional/Performance:</strong> Your consent or legitimate interest
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                        <div>
                                            <strong className="text-white">Marketing Cookies:</strong> Your explicit consent
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Updates to Policy */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">8. Updates to This Policy</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    We may update this Cookie Policy from time to time to reflect changes in technology,
                                    legal requirements, or our business practices. We will notify you of significant changes by:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Updating the "Last updated" date at the top of this page</li>
                                    <li>Displaying a notification on our website</li>
                                    <li>Sending an email to registered users (for major changes)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <p className="font-medium text-white mb-2">Privacy Team</p>
                                            <p>Email: privacy@cloudfoundry.com</p>
                                            <p>Phone: +1 (555) 123-4567</p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white mb-2">Mailing Address</p>
                                            <p>123 Cloud Street</p>
                                            <p>Tech City, TC 12345</p>
                                            <p>United States</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
