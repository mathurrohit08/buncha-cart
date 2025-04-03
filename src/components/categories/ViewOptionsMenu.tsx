
import {
  LayoutGrid,
  List,
  Grid2X2,
  Grid3X3,
  LayoutGrid as Grid4X4,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ViewOptionsMenuProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export const ViewOptionsMenu = ({ viewMode, setViewMode }: ViewOptionsMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-2 flex items-center gap-1">
          {viewMode === 'list' ? <List className="h-4 w-4 mr-1" /> : <LayoutGrid className="h-4 w-4 mr-1" />}
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <DropdownMenuItem onClick={() => setViewMode('list')} className="flex items-center cursor-pointer">
          <List className="h-4 w-4 mr-2" />
          <span>List View</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setViewMode('grid')} className="flex items-center cursor-pointer">
          <LayoutGrid className="h-4 w-4 mr-2" />
          <span>Grid View</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
