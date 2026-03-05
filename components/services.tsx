'use client';

import { Flame, Users, Music, Mic, Lightbulb, Package } from 'lucide-react';

const Services = () => {
  const devotionalServices = [
    { icon: <Flame className="w-8 h-8" />, title: 'Mata Ka Jagran', description: 'All-night spiritual celebration with devotional songs and prayers' },
    { icon: <Users className="w-8 h-8" />, title: 'Mata Ki Chowki', description: 'Sacred gathering for collective devotion and celebration' },
    { icon: <Music className="w-8 h-8" />, title: 'Sai Bhajan Sandhya', description: 'Evening devotional music program dedicated to Sai Baba' },
    { icon: <Mic className="w-8 h-8" />, title: 'Sunderkand Path Mandali', description: 'Religious recitation and spiritual discourse programs' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Krishna Bhajan Sandhya', description: 'Evening celebration of Lord Krishna with devotional music' },
    { icon: <Flame className="w-8 h-8" />, title: 'Khatu Shyam Bhajan', description: 'Special devotional programs dedicated to Lord Khatu Shyam' },
  ];

  const musicalServices = [
    { title: 'Mehndi Function', description: 'Live devotional music and traditional performances' },
    { title: 'Birthday Party Shows', description: 'Customized musical entertainment for celebrations' },
    { title: 'Wedding Shows', description: 'Professional devotional and entertainment programs' },
    { title: 'Corporate Shows', description: 'Customized performances for corporate events' },
  ];

  const additionalServices = [
    { icon: <Package className="w-6 h-6" />, title: 'Bhawan Darbar Arrangement', description: 'Complete darbar setup and decoration' },
    { icon: <Package className="w-6 h-6" />, title: 'Jhanki Display', description: 'Elaborate deity decorations and displays' },
    { icon: <Package className="w-6 h-6" />, title: 'Professional Sound System', description: 'High-quality audio equipment and technicians' },
    { icon: <Package className="w-6 h-6" />, title: 'Stage Setup & Design', description: 'Professional stage arrangement and lighting' },
    { icon: <Package className="w-6 h-6" />, title: 'Orchestra & Artists', description: 'Professional musicians and performers' },
    { icon: <Package className="w-6 h-6" />, title: 'Event Management', description: 'Complete event coordination and support' },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-linear-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Our Services
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        {/* Devotional Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Devotional Events
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devotionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-amber-600"
              >
                <div className="text-amber-600 mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Musical Programs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Musical Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicalServices.map((service, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-red-50 to-orange-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600"
              >
                <Music className="w-8 h-8 text-red-600 mb-3" />
                <h4 className="text-lg font-bold text-red-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Complete Event Management
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-amber-600 shrink-0">{service.icon}</div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-linear-to-r from-amber-600 to-red-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Book Your Event?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contact us today for customized event packages and quotations
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-amber-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
