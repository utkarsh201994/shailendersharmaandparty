"use client";

import Link from "next/link";
import {
  Facebook,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Awards", href: "#awards" },
    { label: "Videos", href: "#videos" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Youtube size={24} />,
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCv6IyJsMB8CGXx28rPmYgLQ",
      color: "hover:text-red-500",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      href: "https://wa.me/8076414767",
      color: "hover:text-green-500",
    },
    {
      icon: <Facebook size={24} />,
      label: "Facebook",
      href: "https://www.facebook.com/p/Shailender-Sharma-Party-100064790196353/",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-amber-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/assets/logo.png"
              alt="Shailender Sharma & Party"
              width={96}
              height={96}
              className="object-contain -ml-3 mb-2"
            />
            <h3 className="text-xl font-bold mb-4 text-yellow-300">
              Shailender Sharma & Party
            </h3>
            <p className="text-amber-100 text-sm mb-4">
              Spiritual Events & Jagran Organization with 40+ years of dedicated
              service
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`text-white transition-colors ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Services</h4>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>Mata Ka Jagran</li>
              <li>Mata Ki Chowki</li>
              <li>Bhajan Sandhya</li>
              <li>Event Management</li>
              <li>Sound & Stage Setup</li>
              <li>Orchestra Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Contact</h4>
            <div className="space-y-3 text-sm text-amber-100">
              <div className="flex items-start gap-2">
                <Phone size={16} className="shrink-0 mt-1" />
                <span>+91-8076414767 , +91-8076414767</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="shrink-0 mt-1" />
                <span className="text-wrap break-all">shailendersharma222@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-1" />
                <span>Delhi & NCR, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-700">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-amber-100 text-sm">
                © {currentYear} Shailender Sharma & Party. All rights reserved.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-yellow-300 font-bold text-lg">40+</p>
                <p className="text-amber-100 text-xs">Years</p>
              </div>
              <div>
                <p className="text-yellow-300 font-bold text-lg">51K+</p>
                <p className="text-amber-100 text-xs">Events</p>
              </div>
              <div>
                <p className="text-yellow-300 font-bold text-lg">100%</p>
                <p className="text-amber-100 text-xs">Satisfied</p>
              </div>
            </div>

            {/* Links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
