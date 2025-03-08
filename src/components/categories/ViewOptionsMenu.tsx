
import {
  LayoutGrid,
  List,
  Grid2X2,
  Grid3X3,
  Grid4X4,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ViewOptionsMenuProps {
  viewMode: number;
  setViewMode: (mode: number) => void;
}

export const ViewOptionsMenu = ({ viewMode, setViewMode }: ViewOptionsMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-2 flex items-center gap-1">
          {viewMode === 1 && <List className="h-4 w-4 mr-1" />}
          {viewMode === 2 && <Grid2X2 className="h-4 w-4 mr-1" />}
          {viewMode === 3 && <Grid3X3 className="h-4 w-4 mr-1" />}
          {viewMode === 4 && <Grid4X4 className="h-4 w-4 mr-1" />}
          {viewMode === 5 && <LayoutGrid className="h-4 w-4 mr-1" />}
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <DropdownMenuItem onClick={() => setViewMode(1)} className="flex items-center cursor-pointer">
          <List className="h-4 w-4 mr-2" />
          <span>Single Column</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setViewMode(2)} className="flex items-center cursor-pointer">
          <Grid2X2 className="h-4 w-4 mr-2" />
          <span>Two Columns</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setViewMode(3)} className="flex items-center cursor-pointer">
          <Grid3X3 className="h-4 w-4 mr-2" />
          <span>Three Columns</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setViewMode(4)} className="flex items-center cursor-pointer">
          <Grid4X4 className="h-4 w-4 mr-2" />
          <span>Four Columns</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setViewMode(5)} className="flex items-center cursor-pointer">
          <LayoutGrid className="h-4 w-4 mr-2" />
          <span>Five Columns</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
