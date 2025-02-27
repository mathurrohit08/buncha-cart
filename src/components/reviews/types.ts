
export interface Comment {
  id: number;
  user: string;
  comment: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
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

// Review data
export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment:
      "Amazing product! Exactly what I was looking for. The quality is outstanding.",
    comments: [
      {
        id: 1,
        user: "Alice Smith",
        comment: "I agree! The quality is really impressive.",
      },
      {
        id: 2,
        user: "Bob Johnson",
        comment: "Just ordered one after reading this review!",
      },
      {
        id: 3,
        user: "Carol White",
        comment: "The customer service is great too!",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment:
      "Great value for money. Shipping was fast and the product exceeded my expectations.",
    comments: [
      {
        id: 1,
        user: "Frank Miller",
        comment: "Fast shipping indeed!",
      },
      {
        id: 2,
        user: "Grace Lee",
        comment: "Worth every penny.",
      },
      {
        id: 3,
        user: "Henry Wilson",
        comment: "The packaging was excellent.",
      },
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment:
      "Excellent customer service and the product quality is superb. Highly recommend!",
    comments: [
      {
        id: 1,
        user: "Karen Davis",
        comment: "The support team is amazing!",
      },
      {
        id: 2,
        user: "Liam Murphy",
        comment: "Quick response to all my questions.",
      },
      {
        id: 3,
        user: "Maria Garcia",
        comment: "Perfect experience from start to finish.",
      },
    ],
  },
  {
    id: 4,
    name: "Sarah Williams",
    rating: 5,
    comment:
      "The product design is innovative and elegant. Functionality is top-notch and it's very user-friendly.",
    comments: [
      {
        id: 1,
        user: "Ryan Clark",
        comment: "The design really stands out from competitors.",
      },
      {
        id: 2,
        user: "Sophie Turner",
        comment: "I love how intuitive it is to use!",
      },
      {
        id: 3,
        user: "Thomas Hill",
        comment: "Very sleek and modern design.",
      },
    ],
  },
  {
    id: 5,
    name: "Robert Chen",
    rating: 4,
    comment:
      "Reliable product with great features. The battery life is impressive and it's very durable.",
    comments: [
      {
        id: 1,
        user: "Wendy Rogers",
        comment: "I've dropped it multiple times and not a scratch!",
      },
      {
        id: 2,
        user: "Xavier Lopez",
        comment: "The battery lasts even longer than advertised.",
      },
      {
        id: 3,
        user: "Yasmine Ali",
        comment: "Perfect for my daily use needs.",
      },
    ],
  },
  {
    id: 6,
    name: "Emily Parker",
    rating: 5,
    comment:
      "Outstanding product! The attention to detail is incredible. Would definitely purchase again.",
    comments: [
      {
        id: 1,
        user: "Brandon Scott",
        comment: "The craftsmanship is exceptional.",
      },
      {
        id: 2,
        user: "Chloe Davis",
        comment: "Even better in person than in the photos.",
      },
      {
        id: 3,
        user: "Dylan Martin",
        comment: "I'm already thinking about buying a second one.",
      },
    ],
  },
];

// Helper function to get border color by index
export const getBorderColor = (index: number): string => {
  return borderColors[index % borderColors.length];
};
