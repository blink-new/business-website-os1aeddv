
import { motion } from 'framer-motion';
import { Code2, Lightbulb, BarChart3, Users } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Digital Solutions',
    description: 'Custom software development tailored to your business needs with cutting-edge technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Strategy',
    description: 'Strategic consulting to help you stay ahead of the competition and drive growth.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Scale your team with skilled professionals who integrate seamlessly with your organization.',
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions to drive your business forward
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}