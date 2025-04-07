
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're on a mission to transform digital experiences through innovative solutions and cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2020, we've grown from a small team of passionate developers
            to a full-service digital solutions company serving clients worldwide.
          </p>
          <p className="text-gray-600">
            Our commitment to excellence and innovation has helped us build lasting
            partnerships with businesses across industries.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Innovation in everything we do</li>
            <li>• Customer success as our priority</li>
            <li>• Transparency and integrity</li>
            <li>• Continuous learning and growth</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Join Our Journey</h2>
        <p className="text-gray-600 mb-8">
          We're always looking for talented individuals to join our team and help
          us shape the future of digital technology.
        </p>
        <Button asChild>
          <a href="/careers">View Open Positions</a>
        </Button>
      </div>
    </div>
  );
}