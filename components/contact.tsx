"use client";

import { useState } from "react";
import { MessageCircle, Phone, MapPin, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ FORM SUBMIT HANDLER
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello, I would like to book Shailender Sharma Jagran Party for an event.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`,
    );

    const whatsappLink = `https://wa.me/918076414767?text=${whatsappMessage}`;

    window.open(whatsappLink, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp...",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  // ✅ Quick WhatsApp button message
  const handleQuickWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I would like to make a booking inquiry.",
    );
    window.open(`https://wa.me/918076414767?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-amber-900">
          Contact Us
        </h2>
        <div className="h-1 w-24 bg-amber-600 mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Have questions about our services? Want to book us for your
                event? We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-amber-600 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-900">Phone</h4>
                  <p className="text-gray-600">
                    +91-8076414767 , +91-8076414767
                  </p>
                  <p className="text-sm text-gray-500">Available 24 hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-amber-600 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-900">Email</h4>
                  <p className="text-gray-600">shailendersharma222@gmail.com</p>
                  <p className="text-sm text-gray-500">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-600 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-amber-900">Location</h4>
                  <p className="text-gray-600">Delhi & NCR, India</p>
                  <p className="text-sm text-gray-500">
                    1202, JANTA FLATS, GTB ENCLAVE Delhi-110093
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <MessageCircle
                  className="text-green-600 shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h4 className="font-bold text-amber-900">WhatsApp</h4>
                  <p className="text-gray-600">Quick booking & inquiries</p>
                  <button
                    onClick={handleQuickWhatsApp}
                    className="inline-flex items-center gap-2 mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle size={18} />
                    Message on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-linear-to-br from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-xs text-gray-600 text-center">
                Or use WhatsApp for instant communication
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
