
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Lightbulb, BarChart3, Cloud, Shield, Users2 } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built to address your unique business challenges.",
    icon: Code2
  },
  {
    title: "Digital Innovation",
    description: "Strategic digital transformation and innovation consulting.",
    icon: Lightbulb
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
    icon: BarChart3
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our security solutions.",
    icon: Shield
  },
  {
    title: "Team Augmentation",
    description: "Scale your team with our skilled professionals.",
    icon: Users2
  }
];

export function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-8">
          Let's discuss how our services can help you achieve your goals.
        </p>
        <Button asChild>
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </div>
  );
}