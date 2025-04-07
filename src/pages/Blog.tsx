
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "The Future of Digital Innovation",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Technology",
    excerpt: "Exploring upcoming trends in digital transformation and innovation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Building Scalable Cloud Solutions",
    date: "March 12, 2024",
    author: "Mike Chen",
    category: "Cloud Computing",
    excerpt: "Best practices for developing scalable cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Cybersecurity in 2024",
    date: "March 10, 2024",
    author: "Alex Thompson",
    category: "Security",
    excerpt: "Latest trends and challenges in cybersecurity landscape.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
  }
];

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
        <p className="text-xl text-gray-600">
          Insights, updates, and thought leadership from our team
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="hover:text-primary cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription>By {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}