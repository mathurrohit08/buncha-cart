
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CommentFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export const CommentForm = ({ value, onChange, onSubmit, onCancel }: CommentFormProps) => {
  return (
    <div className="mt-2 space-y-3">
      <Input
        placeholder="Write your comment..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-700/50 border-gray-700 text-white text-xs placeholder:text-gray-500"
      />
      <div className="flex gap-2">
        <Button 
          type="submit" 
          variant="secondary" 
          size="sm"
          onClick={onSubmit}
          className="text-xs bg-gray-700 hover:bg-gray-600"
        >
          Submit
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onCancel}
          className="text-xs"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
