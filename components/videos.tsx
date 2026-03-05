"use client";

import { Music, Youtube } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: "vtptLZLTxxc",
      title: "Devotional Performance",
      type: "song",
    },
    {
      id: "zJ7hMgaV87I",
      title: "Bhajan Sandhya",
      type: "song",
    },
    {
      id: "0sMi1q7KNHc",
      title: "Sufi Qawwali",
      type: "song",
    },
    {
      id: "CkiLqxJELjI",
      title: "Krishan Bhajan",
      type: "song",
    },
    {
      id: "qGrvMNMqyoI",
      title: "Bhajan Sandhya",
      type: "song",
    },
    {
      id: "MxcfPQ2tgJk",
      title: "Bhajan on sanskar channel",
      type: "song",
    },
  ];

  return (
    <section id="videos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Videos & Songs
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <Music className="text-amber-600" size={20} />
                <h3 className="font-bold text-amber-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <div className="bg-linear-to-r from-red-400 to-pink-700 rounded-lg p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <Youtube size={48} />
          </div>
          <h3 className="text-3xl font-bold mb-2">Subscribe to Our Channel</h3>
          <p className="text-lg mb-6 opacity-90">
            Watch more devotional performances, Jagran events, and Bhajan
            performances
          </p>
          <a
            href="https://www.youtube.com/channel/UCv6IyJsMB8CGXx28rPmYgLQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
          >
            <Youtube size={20} />
            Visit YouTube Channel
          </a>
        </div>

        {/* Additional Content Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-amber-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-amber-900 mb-2">100+</p>
            <p className="text-amber-700 font-semibold">Devotional Videos</p>
            <p className="text-sm text-amber-600 mt-2">
              Exclusive Jagran and Bhajan performances
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-red-900 mb-2">50K+</p>
            <p className="text-red-700 font-semibold">Subscribers</p>
            <p className="text-sm text-red-600 mt-2">
              Growing spiritual community online
            </p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <p className="text-3xl font-bold text-orange-900 mb-2">Weekly</p>
            <p className="text-orange-700 font-semibold">New Uploads</p>
            <p className="text-sm text-orange-600 mt-2">
              Fresh spiritual content every week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
