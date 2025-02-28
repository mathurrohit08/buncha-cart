
export interface Comment {
  id: number;
  user: string;
  comment: string;
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  comments: Comment[];
}

// Border colors for the animated borders
export const borderColors = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-teal-500",
  "from-yellow-500 to-red-500",
  "from-green-500 to-blue-500",
  "from-pink-500 to-orange-500",
  "from-indigo-500 to-purple-500",
];

// Helper function to get border color by index
export const getBorderColor = (index: number): string => {
  return borderColors[index % borderColors.length];
};
