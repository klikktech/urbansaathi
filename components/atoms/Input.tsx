import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  type?: string;
}

export default function Input({
  placeholder = "Search...",
  value,
  onChange,
  disabled = false,
  className = "",
  type = "text",
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className="w-full px-4 py-3 bg-urban-dark-gray text-urban-white placeholder-urban-gray rounded-md border border-urban-gray focus:outline-none focus:border-urban-red focus:ring-1 focus:ring-urban-red disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          className="w-5 h-5 text-urban-gray"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
