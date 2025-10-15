import React from "react";

interface ButtonProps {
  text: string;
  type?: "filled" | "outline" | "rounded" | "shadow" | "link";
  disabled?: boolean;
  active?: boolean;
  className?: string;
}

export default function Button({
  text,
  type = "filled",
  disabled = false,
  active = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "px-4 py-2 font-medium transition-colors duration-200 cursor-pointer";

  const getButtonClasses = () => {
    if (disabled) {
      return `${baseClasses} bg-gray-300 text-gray-500 cursor-not-allowed`;
    }

    if (!disabled) {
      // Active button: urban-red bg with urban-white text
      return `${baseClasses} bg-[var(--color-urban-red)] text-[var(--color-urban-white)] hover:bg-[var(--color-urban-red)]/80`;
    } else {
      // Inactive button: urban-white bg with black text
      return `${baseClasses} bg-[var(--color-urban-white)] text-black border border-gray-300`;
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case "rounded":
        return "rounded-full";
      case "outline":
        return active
          ? "border-urban-red bg-transparent text-[var(--color-urban-red)]"
          : "border-gray-300 bg-transparent text-[var(--color-urban-black)]";
      case "shadow":
        return "shadow-md hover:shadow-lg";
      case "link":
        return "bg-transparent border-none underline text-[var(--color-urban-red)]";
      default:
        return "rounded-md";
    }
  };

  const combinedClasses = `${getButtonClasses()} ${getTypeClasses()}`;

  return (
    <button className={`${combinedClasses} ${className}`} disabled={disabled}>
      {text}
    </button>
  );
}
