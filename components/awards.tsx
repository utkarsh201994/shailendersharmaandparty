"use client";

import { useState } from "react";
import Image from "next/image";
import { Trophy, Star, Medal, Award } from "lucide-react";

const Awards = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "recognition",
  );

  const awards = [
    {
      id: "recognition",
      category: "Recognition & Honors",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      items: [
        {
          title: "Best Devotional Event Organizer",
          year: "2023",
          description:
            "Recognized for excellence in spiritual event organization and performances",
        },
        {
          title: "Cultural Excellence Award",
          year: "2022",
          description: "For promoting Indian religious and cultural heritage",
        },
        {
          title: "Community Service Medal",
          year: "2021",
          description:
            "In recognition of dedicated service to the spiritual community",
        },
      ],
    },
    {
      id: "achievements",
      category: "Major Achievements",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      items: [
        {
          title: "51,000+ Successful Events",
          year: "Milestone",
          description:
            "Organized over 51,000 Bhagwati Jagran and Mata Ki Chowki programs",
        },
        {
          title: "Pan-India Presence",
          year: "2024",
          description:
            "Expanded services across India with satellite teams in multiple cities",
        },
        {
          title: "YouTube Channel Success",
          year: "Active",
          description:
            "Growing digital presence with devotional content reaching millions",
        },
      ],
    },
    {
      id: "certifications",
      category: "Certifications & Credentials",
      icon: <Medal className="w-8 h-8" />,
      color: "from-red-400 to-red-600",
      items: [
        {
          title: "Event Management Certification",
          year: "2000",
          description:
            "Professional credentials in large-scale event organization",
        },
        {
          title: "Sound & Stage Design Expertise",
          year: "2005",
          description:
            "Specialized training in professional audio-visual equipment",
        },
        {
          title: "Team Training Certification",
          year: "2015",
          description: "Certified trainer for event management teams",
        },
      ],
    },
    {
      id: "clientawards",
      category: "Client Appreciation Awards",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-400 to-green-600",
      items: [
        {
          title: "Customer Excellence Award",
          year: "2024",
          description:
            "Outstanding customer satisfaction ratings and testimonials",
        },
        {
          title: "Trusted Service Provider",
          year: "2023",
          description: "Recognized as most trusted event organizer by clients",
        },
        {
          title: "Premium Event Partner",
          year: "2022",
          description:
            "Partnership excellence with corporate and institutional clients",
        },
      ],
    },
  ];

  return (
    <section
      id="awards"
      className="py-20 px-4 bg-linear-to-b from-amber-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Awards & Achievements
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our commitment to excellence has been recognized through numerous
          awards and achievements over our 40+ years of dedicated professional
          work in the spiritual community.
        </p>

        <div className="grid md:grid-cols-1 gap-6">
          {awards.map((awardCategory) => (
            <div
              key={awardCategory.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === awardCategory.id
                      ? null
                      : awardCategory.id,
                  )
                }
                className={`w-full p-6 bg-linear-to-r ${awardCategory.color} text-white flex items-center justify-between hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3">
                  {awardCategory.icon}
                  <h3 className="text-xl font-bold">
                    {awardCategory.category}
                  </h3>
                </div>
                <span className="text-2xl">
                  {expandedCategory === awardCategory.id ? "−" : "+"}
                </span>
              </button>

              {/* Content */}
              {expandedCategory === awardCategory.id && (
                <div className="p-6 space-y-4">
                  {awardCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="pb-4 border-b last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-amber-900 text-lg">
                          {item.title}
                        </h4>
                        <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Awards Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-amber-900">
            Award Photos & Certificates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Award Image 1 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/gallary2.jpg"
                alt="Award Certificate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">Recognition Award 2003</p>
              </div>
            </div>

            {/* Award Image 2 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shailendersharmapic35-yqpMYNA6fVEUdIaMKDh04AtP2UVjg1.jpg"
                src="/assets/gallary4.jpg"
                alt="Certificate of Excellence"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">Excellence Award 2022</p>
              </div>
            </div>

            {/* Award Image 3 */}
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/about3.png"
                alt="Achievement Certificate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">Lifetime Achievement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-linear-to-br from-yellow-100 to-yellow-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-yellow-600">40+</p>
            <p className="text-amber-900 font-semibold">Years Expetise</p>
          </div>
          <div className="bg-linear-to-br from-blue-100 to-blue-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-blue-600">51K+</p>
            <p className="text-amber-900 font-semibold">Events Organized</p>
          </div>
          <div className="bg-linear-to-br from-red-100 to-red-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-red-600">15+</p>
            <p className="text-amber-900 font-semibold">Major Awards</p>
          </div>
          <div className="bg-linear-to-br from-green-100 to-green-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-green-600">100%</p>
            <p className="text-amber-900 font-semibold">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
