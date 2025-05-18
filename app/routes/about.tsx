import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "About Us - Techtack-Technologies" },
        { name: "description", content: "Learn more about Techtack-Technologies, our mission, vision, and team." },
    ];
};

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-50">
            <div className="bg-white bg-opacity-90 p-8 rounded shadow-md max-w-2xl relative">
                <a
                    href="/"
                    className="absolute left-4 top-4 flex items-center text-blue-600 hover:underline"
                    aria-label="Back to home"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </a>
                <h1 className="text-3xl font-bold mb-4 mt-4">About Techtack-Technologies</h1>
                <p className="mb-4 text-lg">
                    Techtack-Technologies is a leading technology company dedicated to delivering innovative solutions and exceptional services to our clients worldwide.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="mb-4">
                    To empower businesses and individuals through cutting-edge technology, fostering growth and success in a digital world.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="mb-4">
                    To be a global leader in technology innovation, recognized for our commitment to quality, integrity, and customer satisfaction.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
                <p>
                    Our team consists of passionate professionals with expertise in software development, cloud computing, artificial intelligence, and more. We work collaboratively to deliver the best results for our clients.
                </p>
            </div>
        </div>
    );
}