import React from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  type?: string;
  required?: boolean;
}

export default function Input({
  placeholder = "Search...",
  value,
  onChange,
  disabled = false,
  className = "",
  type = "text",
  required = false,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        className={`${className} w-full px-4 py-3 text-urban-black placeholder-urban-gray rounded-md border border-urban-gray focus:outline-none focus:border-urban-red focus:ring-1 focus:ring-urban-red disabled:opacity-50 disabled:cursor-not-allowed`}
      />
    </div>
  );
}
