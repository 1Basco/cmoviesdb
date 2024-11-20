import { Icon } from "@iconify/react";
import React from "react";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | React.ReactNode;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  isActive?: boolean;
}

function SecondaryButton({
  label,
  onClick,
  isLoading = false,
  disabled = false,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${
        disabled || isLoading
          ? "dark:bg-[#ebeaf809] bg-purpledarka-3 cursor-not-allowed text-mauvea-10 dark:text-[#EAE6FD6E]"
          : "bg-purpledark-2 dark:bg-purpledarka-2 hover:bg-purpledark-3 active:bg-purpledark-1 dark:text-mauve-1 text-mauvedark-1"
      } relative inline-flex items-center h-full justify-center px-6 py-3 font-roboto text-base rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-5 
    
    transition-all`}
      {...props}
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

export default SecondaryButton;
