import React from "react";

interface AlertProps {
    message: string;
    type?: "info" | "success" | "warning" | "error" | "announcement";
}

const typeStyles = {
    info: "bg-gradient-to-r from-blue-600 to-blue-700 border-blue-500",
    success: "bg-gradient-to-r from-green-600 to-green-700 border-green-500",
    warning: "bg-gradient-to-r from-yellow-600 to-yellow-700 border-yellow-500",
    error: "bg-gradient-to-r from-red-600 to-red-700 border-red-500",
    announcement: "bg-gradient-to-r from-slate-800 to-slate-900 border-blue-500/30",
};

export function AlertBar({ message, type = "announcement" }: AlertProps) {
    return (
        <div
            className={`w-full text-white text-center py-3 px-4 ${typeStyles[type]} border-b backdrop-blur-sm relative overflow-hidden`}
            style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
            role="alert"
        >
            {/* Subtle animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center justify-center space-x-2">
                <span className="text-sm font-medium tracking-wide">
                    {message}
                </span>

                {/* Dismiss button */}
                <button
                    className="ml-4 text-white/70 hover:text-white transition-colors duration-200"
                    onClick={() => {
                        const alertElement = document.querySelector('[role="alert"]') as HTMLElement;
                        if (alertElement) {
                            alertElement.style.transform = 'translateY(-100%)';
                            alertElement.style.transition = 'transform 0.3s ease-in-out';
                            setTimeout(() => alertElement.remove(), 300);
                        }
                    }}
                    aria-label="Dismiss alert"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}