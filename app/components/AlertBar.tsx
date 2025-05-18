import React from "react";

interface AlertProps {
    message: string;
    type?: "info" | "success" | "warning" | "error";
}

const typeStyles = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
};

export function AlertBar({ message, type = "warning" }: AlertProps) {
    return (
        <div
            className={`w-full text-white text-center py-2 px-4 ${typeStyles[type]}`}
            style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
            role="alert"
        >
            {message}
        </div>
    );
}