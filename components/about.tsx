"use client";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-linear-to-b from-white to-amber-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          About Shailender Sharma & Party
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/about1.jpg"
                alt="Shailender Sharma Event"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/about3.png"
                alt="Shailender Sharma"
                fill
                className="object-contain relative z-20"
              />
              <Image
                src="/assets/about3.png"
                alt="Shailender Sharma"
                fill
                className="object-cover blur-md absolute inset-0"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/about4.jpg"
                alt="Shailender Sharma"
                fill
                className="object-contain relative z-20"
              />
              <Image
                src="/assets/about4.jpg"
                alt="Shailender Sharma"
                fill
                className="object-cover blur-md absolute inset-0"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Foundation & Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                With the blessings of Mata Rani, Shri Shailender Sharma Ji
                founded Shailender Sharma & Party in the year{" "}
                <span className="font-bold">1985</span> with the aim of
                promoting devotional music globally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Journey & Achievement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By Mata Rani's grace, Shailender Ji launched his first Bhajan
                Album in 2000 and began organizing Mata Rani Jagran, Mata Ki
                Chowki, and Bhajan Sandhya programs. Since then, the group has
                successfully conducted more than{" "}
                <span className="font-bold">
                  51,000 Bhagwati Jagran and Mata Ki Chowki programs
                </span>
                .
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">
                Recognition
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Today, Shailender Sharma & Party is a well-renowned devotional
                event organizer in Delhi & NCR, known for divine performances,
                disciplined arrangements, and spiritual atmosphere.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-amber-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-amber-900">51,000+</p>
                <p className="text-amber-700 font-medium">Events Organized</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-red-900">40+</p>
                <p className="text-red-700 font-medium">Years Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
