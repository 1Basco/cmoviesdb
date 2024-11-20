interface TagCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
function TagCard({ children, className, ...props }: TagCardProps) {
  return (
    <div
      className={`${className} dark:bg-purpledark-3 bg-purple-3 dark:text-mauvedark-12 w-fit text-mauve-12 px-2 py-1 rounded-sm`}
      {...props}
    >
      {children}
    </div>
  );
}

export default TagCard;
