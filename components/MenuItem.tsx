"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const MenuItem = ({ onClick, label, className }: MenuItemProps) => {
  return (
    <div
      className={`px-4 py-3 hover:bg-neutral-100 transition ${className}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
