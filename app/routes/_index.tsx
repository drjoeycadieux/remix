import type { MetaFunction } from "@remix-run/node";

// components
import { AlertBar } from "~/components/AlertBar";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "CloudFoundry - Modern Software Foundations in the Cloud" },
    { name: "description", content: "Build scalable applications with modern cloud-native foundations powered by Remix.run" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5"></div>
        </div>

        <AlertBar message={"🚀 New Release: CloudFoundry v2.0 now available with enhanced serverless capabilities and 40% faster deployment times!"} type="announcement" />

        <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Main Hero Content */}
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/20">
                  ⚡ Powered by Remix.run
                </span>
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                <span className="block">Modern Software</span>
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Foundations
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">in the Cloud</span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-gray-300">
                Build scalable, performant applications with cutting-edge cloud-native architecture.
                Leverage the power of modern web frameworks and distributed systems.
              </p>              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/about"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/about"
                  className="rounded-lg border border-gray-600 px-6 py-3 text-lg font-semibold text-gray-300 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mx-auto mt-24 max-w-5xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800 p-8 rounded-xl border border-gray-700">
                    <div className="text-blue-400 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Cloud-Native Architecture</h3>
                    <p className="text-gray-400">
                      Built for the cloud from day one with microservices, containers, and serverless patterns.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800 p-8 rounded-xl border border-gray-700">
                    <div className="text-purple-400 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                    <p className="text-gray-400">
                      Optimized performance with edge computing, CDN integration, and intelligent caching strategies.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-slate-800 p-8 rounded-xl border border-gray-700">
                    <div className="text-green-400 mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                    <p className="text-gray-400">
                      End-to-end encryption, zero-trust architecture, and compliance-ready security frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mx-auto mt-24 max-w-4xl">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="mt-2 text-sm text-gray-400">Uptime SLA</div>
                </div>                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">&lt; 100ms</div>
                  <div className="mt-2 text-sm text-gray-400">Response Time</div>
                </div>                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">1M+</div>
                  <div className="mt-2 text-sm text-gray-400">Users Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="mt-2 text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}