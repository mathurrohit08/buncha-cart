
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Calendar, User, Clock, ChevronRight } from "lucide-react";

const Blog = () => {
  // Mock blog data
  const featuredPost = {
    id: 1,
    title: "10 Essential Design Trends for 2023",
    excerpt: "Discover the latest design trends that are reshaping how we think about interfaces and user experiences in 2023.",
    image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?auto=format&fit=crop&w=1000&h=600",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Design Trends"
  };
  
  const blogPosts = [
    {
      id: 2,
      title: "How to Choose the Perfect Desk Setup for Productivity",
      excerpt: "Learn how to create an ergonomic workspace that enhances your productivity and protects your health.",
      image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=600&h=400",
      author: "Michael Chen",
      date: "May 28, 2023",
      readTime: "6 min read",
      category: "Productivity"
    },
    {
      id: 3,
      title: "Sustainable Living: Eco-Friendly Products for Your Home",
      excerpt: "Discover our top picks for sustainable and eco-friendly home products that help reduce your environmental footprint.",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=600&h=400",
      author: "Emma Rodriguez",
      date: "May 14, 2023",
      readTime: "5 min read",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Smart Home Technology",
      excerpt: "Everything you need to know about incorporating smart technology into your home for convenience and efficiency.",
      image: "https://images.unsplash.com/photo-1558002038-1055e2fff53b?auto=format&fit=crop&w=600&h=400",
      author: "David Kim",
      date: "April 30, 2023",
      readTime: "10 min read",
      category: "Smart Home"
    },
    {
      id: 5,
      title: "Color Psychology: How Different Hues Affect Your Mood",
      excerpt: "Explore how different colors can influence your emotions and how to use this knowledge in your home design.",
      image: "https://images.unsplash.com/photo-1560263816-d704d83cce0f?auto=format&fit=crop&w=600&h=400",
      author: "Jessica Patel",
      date: "April 12, 2023",
      readTime: "7 min read",
      category: "Interior Design"
    },
    {
      id: 6,
      title: "Budget-Friendly Office Makeover Ideas",
      excerpt: "Transform your workspace without breaking the bank with these creative and affordable office decor ideas.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&h=400",
      author: "Robert Greene",
      date: "March 25, 2023",
      readTime: "5 min read",
      category: "Budget Decor"
    }
  ];
  
  const categories = [
    "All Categories",
    "Design Trends",
    "Productivity",
    "Sustainability",
    "Smart Home",
    "Interior Design",
    "Budget Decor",
    "Technology",
    "Wellness"
  ];
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Blog Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, ideas, and inspiration for better living and design
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-[300px] md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&h=600";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div>
                    <Badge className="mb-3">{featuredPost.category}</Badge>
                    <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{featuredPost.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Button className="w-full sm:w-auto">
                      Read Full Article
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col">
                <div className="h-[200px] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400";
                    }}
                  />
                </div>
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <CardDescription className="text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-0">
                  <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
