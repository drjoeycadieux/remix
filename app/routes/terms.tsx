import type { MetaFunction } from "@remix-run/node";
import { AlertBar } from "~/components/AlertBar";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => [
    { title: "Terms of Service | CloudFoundry" },
    { name: "description", content: "Terms of Service for CloudFoundry platform and services. Read our legal terms and conditions for using our cloud platform." },
];

export default function Terms() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <AlertBar />

            {/* Header */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-3xl"></div>
                <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Terms of Service
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Legal terms and conditions governing your use of CloudFoundry platform and services.
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

                        {/* Agreement to Terms */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">1. Agreement to Terms</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    By accessing or using CloudFoundry services, you agree to be bound by these Terms of Service ("Terms").
                                    If you disagree with any part of these terms, then you may not access the service.
                                </p>
                                <p>
                                    These Terms apply to all visitors, users, and others who access or use the service.
                                    CloudFoundry reserves the right to update these Terms at any time without prior notice.
                                </p>
                            </div>
                        </section>

                        {/* Description of Service */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    CloudFoundry provides a cloud-native platform for building, deploying, and scaling applications.
                                    Our services include but are not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Application hosting and deployment</li>
                                    <li>Auto-scaling and load balancing</li>
                                    <li>Database and storage services</li>
                                    <li>Security and monitoring tools</li>
                                    <li>Developer tools and APIs</li>
                                    <li>Technical support and documentation</li>
                                </ul>
                            </div>
                        </section>

                        {/* User Accounts */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">3. User Accounts</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    To access certain features of our service, you must create an account. You are responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Maintaining the confidentiality of your account credentials</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Providing accurate and complete information</li>
                                    <li>Promptly updating your account information when necessary</li>
                                </ul>
                                <p>
                                    You must notify us immediately of any unauthorized use of your account or any other breach of security.
                                </p>
                            </div>
                        </section>

                        {/* Acceptable Use */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use Policy</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>You agree not to use CloudFoundry services to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Infringe upon intellectual property rights</li>
                                    <li>Transmit malicious code or conduct security attacks</li>
                                    <li>Engage in spam, phishing, or other abusive practices</li>
                                    <li>Interfere with or disrupt our services</li>
                                    <li>Access or attempt to access accounts not belonging to you</li>
                                    <li>Use our services for cryptocurrency mining without authorization</li>
                                </ul>
                            </div>
                        </section>

                        {/* Service Availability */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">5. Service Availability</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    While we strive to maintain high availability, we do not guarantee uninterrupted access to our services.
                                    We may experience downtime for maintenance, updates, or due to circumstances beyond our control.
                                </p>
                                <p>
                                    We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
                                </p>
                            </div>
                        </section>

                        {/* Payment and Billing */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">6. Payment and Billing</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Paid services are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated.
                                </p>
                                <p>
                                    You authorize us to charge your payment method for all fees incurred.
                                    Failure to pay may result in suspension or termination of your account.
                                </p>
                                <p>
                                    We reserve the right to change our pricing at any time.
                                    Price changes will be communicated 30 days in advance for existing customers.
                                </p>
                            </div>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">7. Intellectual Property</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    CloudFoundry and its licensors retain all rights to the service, including but not limited to software,
                                    documentation, and trademarks. You are granted a limited, non-exclusive license to use our services.
                                </p>
                                <p>
                                    You retain ownership of any content you upload or create using our services,
                                    but grant us a license to host and process such content as necessary to provide our services.
                                </p>
                            </div>
                        </section>

                        {/* Privacy and Data */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">8. Privacy and Data Protection</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect,
                                    use, and protect your information.
                                </p>
                                <p>
                                    We implement appropriate security measures to protect your data, but cannot guarantee absolute security.
                                    You are responsible for maintaining backups of your critical data.
                                </p>
                            </div>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    CloudFoundry shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                                    including but not limited to loss of profits, data, or business interruption.
                                </p>
                                <p>
                                    Our total liability for any claims arising from these Terms or your use of our services
                                    shall not exceed the amount you paid us in the 12 months preceding the claim.
                                </p>
                            </div>
                        </section>

                        {/* Termination */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">10. Termination</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    Either party may terminate this agreement at any time. Upon termination:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Your access to the services will be suspended</li>
                                    <li>You remain liable for any outstanding fees</li>
                                    <li>We may delete your data after a reasonable grace period</li>
                                    <li>Provisions that should survive termination will remain in effect</li>
                                </ul>
                            </div>
                        </section>

                        {/* Governing Law */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">11. Governing Law</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                                    where CloudFoundry is incorporated, without regard to conflict of law principles.
                                </p>
                                <p>
                                    Any disputes arising from these Terms shall be resolved through binding arbitration
                                    or in the courts of our jurisdiction.
                                </p>
                            </div>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">12. Contact Information</h2>
                            <div className="space-y-4 text-gray-300">
                                <p>
                                    If you have any questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                                    <p className="font-medium text-white">CloudFoundry Legal Team</p>
                                    <p>Email: legal@cloudfoundry.com</p>
                                    <p>Phone: +1 (555) 123-4567</p>
                                    <p>Address: 123 Cloud Street, Tech City, TC 12345</p>
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
