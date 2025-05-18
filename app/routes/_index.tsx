import type { MetaFunction } from "@remix-run/node";

// components
import { AlertBar } from "~/components/AlertBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Techtack-Technologies - Landing Page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <AlertBar message={"🚀 Developers: Check out our API docs and join our Community for support!"} />
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded shadow-md">
        <h1 className="text-4xl text-white font-bold">Welcome to Techtack-Technologies</h1>
        <p className="mt-4 text-lg text-white">
          We are a leading technology company specializing in innovative solutions
          and services.
        </p>
        <p className="mt-2 text-lg text-white">
          Explore our features and services to learn more about what we offer.
        </p>
        <div className="flex m-8 flex-row items-center space-x-4">
          <div className="mt-8">
            <a
              href="/about"
              className="px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/api-docs"
              className="px-4 py-2 text-black bg-gray-100 rounded hover:bg-gray-300"
            >
              API Docs
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}