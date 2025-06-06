import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy - CloudFoundry" },
        { name: "description", content: "CloudFoundry's privacy policy. Learn how we collect, use, and protect your personal information." },
    ];
};

export default function Privacy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            Last updated: December 15, 2024
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-6 lg:px-8 pb-24">
                <div className="prose prose-invert prose-blue max-w-none">

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                            <p className="text-gray-300 mb-6">
                                We collect information you provide directly to us, such as when you create an account, subscribe to our services,
                                or contact us for support. This may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Account credentials and authentication information</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                                <li>Communication preferences and history</li>
                                <li>Support tickets and feedback</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-4">Usage Information</h3>
                            <p className="text-gray-300 mb-6">
                                We automatically collect certain information about your use of our services:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                                <li>Application deployment and usage metrics</li>
                                <li>Performance and error logs</li>
                                <li>Feature usage and analytics</li>
                                <li>IP addresses and device information</li>
                                <li>Browser type and operating system</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-4">Technical Information</h3>
                            <p className="text-gray-300 mb-4">
                                To provide our services effectively, we may collect:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Application code and configuration (only as necessary to provide services)</li>
                                <li>Runtime environment details</li>
                                <li>Resource utilization metrics</li>
                                <li>Security-related logs and events</li>
                            </ul>
                        </div>
                    </section>

                    {/* How We Use Information */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>

                            <p className="text-gray-300 mb-6">
                                We use the information we collect for the following purposes:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Service Delivery</h4>
                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                        <li>Provide and maintain our platform services</li>
                                        <li>Process deployments and manage applications</li>
                                        <li>Monitor performance and ensure reliability</li>
                                        <li>Provide technical support</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Communication</h4>
                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                        <li>Send service notifications and updates</li>
                                        <li>Respond to your inquiries and support requests</li>
                                        <li>Deliver newsletters and marketing communications</li>
                                        <li>Notify you of security issues</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Improvement</h4>
                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                        <li>Analyze usage patterns and trends</li>
                                        <li>Develop new features and services</li>
                                        <li>Improve platform performance and security</li>
                                        <li>Conduct research and analytics</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Legal & Security</h4>
                                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                        <li>Comply with legal obligations</li>
                                        <li>Protect against fraud and abuse</li>
                                        <li>Enforce our terms of service</li>
                                        <li>Maintain security and integrity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Information Sharing */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing and Disclosure</h2>

                            <p className="text-gray-300 mb-6">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>

                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Service Providers</h4>
                                    <p className="text-gray-300 text-sm">
                                        We work with trusted third-party service providers who assist us in operating our platform,
                                        such as cloud infrastructure providers, payment processors, and analytics services.
                                        These providers are contractually obligated to protect your information.
                                    </p>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Legal Requirements</h4>
                                    <p className="text-gray-300 text-sm">
                                        We may disclose your information if required by law, court order, or government request,
                                        or to protect our rights, property, or safety, or that of our users or others.
                                    </p>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Business Transfers</h4>
                                    <p className="text-gray-300 text-sm">
                                        In the event of a merger, acquisition, or sale of assets, your information may be
                                        transferred as part of that transaction. We will notify you of any such change.
                                    </p>
                                </div>

                                <div className="border-l-4 border-purple-500 pl-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">With Your Consent</h4>
                                    <p className="text-gray-300 text-sm">
                                        We may share your information for any other purpose with your explicit consent.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>

                            <p className="text-gray-300 mb-6">
                                We implement comprehensive security measures to protect your information:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Encryption</h4>
                                            <p className="text-gray-300 text-sm">Data encrypted in transit and at rest using industry-standard protocols</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Access Controls</h4>
                                            <p className="text-gray-300 text-sm">Strict access controls and authentication mechanisms</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Monitoring</h4>
                                            <p className="text-gray-300 text-sm">Continuous security monitoring and threat detection</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Regular Audits</h4>
                                            <p className="text-gray-300 text-sm">Periodic security assessments and compliance audits</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Incident Response</h4>
                                            <p className="text-gray-300 text-sm">Established procedures for security incident management</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Data Backup</h4>
                                            <p className="text-gray-300 text-sm">Regular data backups and disaster recovery procedures</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights and Choices</h2>

                            <p className="text-gray-300 mb-6">
                                You have certain rights regarding your personal information:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Access & Portability</h4>
                                    <p className="text-gray-300 text-sm">Request a copy of your personal information and data portability</p>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Correction</h4>
                                    <p className="text-gray-300 text-sm">Update or correct inaccurate personal information</p>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Deletion</h4>
                                    <p className="text-gray-300 text-sm">Request deletion of your personal information (subject to legal requirements)</p>
                                </div>

                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h4 className="font-semibold text-white mb-2">Opt-out</h4>
                                    <p className="text-gray-300 text-sm">Unsubscribe from marketing communications at any time</p>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <p className="text-blue-300 text-sm">
                                    To exercise these rights, please contact us at <a href="mailto:privacy@cloudfoundry.com" className="underline hover:text-blue-200">privacy@cloudfoundry.com</a>.
                                    We will respond to your request within 30 days.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">6. Data Retention</h2>

                            <p className="text-gray-300 mb-6">
                                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
                            </p>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Account information: Retained while your account is active and for 90 days after account closure</li>
                                <li>Usage data: Typically retained for 24 months for analytics and service improvement</li>
                                <li>Support communications: Retained for 3 years to maintain support history</li>
                                <li>Security logs: Retained for 12 months for security monitoring and compliance</li>
                                <li>Financial records: Retained as required by applicable tax and accounting laws</li>
                            </ul>
                        </div>
                    </section>

                    {/* International Transfers */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">7. International Data Transfers</h2>

                            <p className="text-gray-300 mb-4">
                                CloudFoundry operates globally, and your information may be transferred to and processed in countries other than your own.
                                We ensure appropriate safeguards are in place for international data transfers, including:
                            </p>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Standard contractual clauses approved by relevant authorities</li>
                                <li>Adequacy decisions by regulatory bodies</li>
                                <li>Certification schemes and codes of conduct</li>
                                <li>Technical and organizational security measures</li>
                            </ul>
                        </div>
                    </section>

                    {/* Updates */}
                    <section className="mb-12">
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">8. Policy Updates</h2>

                            <p className="text-gray-300 mb-4">
                                We may update this privacy policy from time to time to reflect changes in our practices or applicable laws.
                                We will notify you of any material changes by:
                            </p>

                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                                <li>Posting the updated policy on our website</li>
                                <li>Sending you an email notification</li>
                                <li>Displaying a prominent notice on our platform</li>
                            </ul>

                            <p className="text-gray-300">
                                Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section>
                        <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us</h2>

                            <p className="text-gray-300 mb-6">
                                If you have any questions about this privacy policy or our data practices, please contact us:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Privacy Team</h4>
                                    <p className="text-gray-300 text-sm mb-1">
                                        Email: <a href="mailto:privacy@cloudfoundry.com" className="text-blue-400 hover:text-blue-300">privacy@cloudfoundry.com</a>
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        Response time: Within 48 hours
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-2">Mailing Address</h4>
                                    <p className="text-gray-300 text-sm">
                                        CloudFoundry Privacy Office<br />
                                        123 Cloud Street<br />
                                        San Francisco, CA 94105<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
}
