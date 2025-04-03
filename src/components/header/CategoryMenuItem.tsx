
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface CategoryMenuItemProps {
  name: string;
  isHovered: boolean;
  onHover: () => void;
  onClick: () => void;
}

export const CategoryMenuItem = ({ 
  name, 
  isHovered, 
  onHover, 
  onClick 
}: CategoryMenuItemProps) => {
  return (
    <motion.div
      className={`group cursor-pointer rounded-lg ${
        isHovered 
          ? "bg-white dark:bg-gray-800" 
          : "hover:bg-white/80 dark:hover:bg-gray-800/80"
      }`}
      onMouseEnter={onHover}
      onClick={onClick}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between p-2 rounded-lg transition-colors">
        <span className={`text-sm ${
          isHovered 
            ? "text-purple-600 dark:text-purple-400 font-medium" 
            : "dark:text-gray-300"
        }`}>{name}</span>
        <ChevronRight className={`h-4 w-4 ${
          isHovered 
            ? "text-purple-600 dark:text-purple-400" 
            : "opacity-0 group-hover:opacity-100 transition-opacity"
        }`} />
      </div>
    </motion.div>
  );
};
