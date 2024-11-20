import { Icon } from "@iconify/react";
import React from "react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | React.ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  isActive?: boolean;
}

function PrimaryButton({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`relative inline-flex items-center h-full justify-center px-6 py-3 font-roboto text-base text-mauve-1  rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-5 
      ${
        disabled || isLoading
          ? "bg-mauvedark-8 cursor-not-allowed"
          : "bg-purpledark-9 hover:bg-purpledark-10 active:bg-purpledark-7"
      }
      transition-all`}
    >
      {isLoading && (
        <span className="absolute left-0 flex items-center justify-center w-full h-full">
          <Icon
            icon="eos-icons:loading"
            className="w-5 h-5 animate-spin text-white"
          />
        </span>
      )}
      <span className={isLoading ? "opacity-0" : "opacity-100"}>{label}</span>
    </button>
  );
}

export default PrimaryButton;
