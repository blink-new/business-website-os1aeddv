
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const positions = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for an experienced frontend developer to join our team."
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create beautiful and intuitive user experiences."
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "New York, NY",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
  }
];

export function Careers() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-xl text-gray-600">
          Build your career with us and help shape the future of technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Competitive salary and benefits</li>
            <li>• Remote-first culture</li>
            <li>• Professional development opportunities</li>
            <li>• Work with cutting-edge technologies</li>
            <li>• Health and wellness programs</li>
            <li>• Flexible working hours</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
          <p className="text-gray-600 mb-4">
            We believe in fostering an inclusive environment where innovation
            thrives and every team member can grow both personally and
            professionally.
          </p>
          <p className="text-gray-600">
            Our values of transparency, collaboration, and continuous learning
            guide everything we do.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center">Open Positions</h2>
      <div className="space-y-6">
        {positions.map((position, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription>{position.department}</CardDescription>
                </div>
                <Button>Apply Now</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">{position.location}</Badge>
                <Badge variant="outline">{position.type}</Badge>
              </div>
              <p className="text-gray-600">{position.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}