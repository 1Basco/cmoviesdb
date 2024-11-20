import { Icon } from "@iconify/react";

interface SquareButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  onClick?: () => void;
}
const SquareButton = ({
  icon,
  onClick,
  className,
  ...props
}: SquareButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} h-full w-full rounded-md flex items-center justify-center bg-purplea-2 dark:bg-purpledark-2 hover:bg-purplea-3 dark:hover:bg-purpledarka-3 transition-all`}
      {...props}
    >
      <Icon
        icon={icon}
        className="text-xl dark:text-mauve-1 text-mauvedark-1"
      />
    </button>
  );
};

export default SquareButton;
