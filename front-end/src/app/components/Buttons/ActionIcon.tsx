import React from "react";

interface ActionIconProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode; // Ensures you are passing valid React elements
}

const ActionIcon: React.FC<ActionIconProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        `text-gray-700 border border-gray-300 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 p-1 rounded-md shadow-sm`
      }
    >
      {children}
    </button>
  );
};

export default ActionIcon;
