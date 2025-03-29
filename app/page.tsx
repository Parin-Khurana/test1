'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import dynamic from "next/dynamic";
const testimonials = [
  {
    name: 'Alice Johnson',
    text: 'NAMAH MUN was an incredible experience! The debates were engaging and well-organized.',
    image: '/images/8.png',
  },
  {
    name: 'Michael Smith',
    text: 'A fantastic platform to enhance diplomatic skills. Highly recommend it!',
    image: '/images/8.png',
  },
  {
    name: 'Sophia Lee',
    text: 'The best MUN experience I have ever had! Looking forward to the next one.',
    image: '/images/8.png',
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden bg-black text-white p-6 rounded-lg">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white"
        />
        <p className="text-lg font-medium text-white">"{testimonials[currentIndex].text}"</p>
        <span className="text-sm text-gray-400 mt-2">- {testimonials[currentIndex].name}</span>
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full shadow-md"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 rounded-full shadow-md"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}
// Import the 3D logo with dynamic import to avoid SSR issues
const Namah3DLogo = dynamic(() => import("@/components/namah-3d-logo"), { ssr: false })

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to NAMAH GROUP
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering future diplomats through Model United Nations conferences and training.
                </p>
              </div>

              {/* 3D Rotating Logo */}
              <Namah3DLogo />

              <div className="space-x-4">
                <Link href="/join-us">
                  <Button className="px-8">
                    Join NAMAH <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="px-8">
                    Commitees
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To foster diplomatic skills, global awareness, and leadership through Model United Nations.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  Creating a community of informed global citizens ready to tackle the world's most pressing challenges.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Values</h3>
                <p className="text-muted-foreground">
                  Diplomacy, integrity, inclusivity, and dedication to international cooperation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Testimonials</h2>
              <TestimonialSlider />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Conferences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join us at our upcoming MUN conferences and develop your diplomatic skills.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "1",
                    date: "October 15-17, 2024",
                    location: "University Conference Center",
                    committees: "UNSC, UNHRC, WHO",
                    photo: "/images/11.png",
                  },
                  {
                    title: "2",
                    date: "November 5-6, 2024",
                    location: "International School Auditorium",
                    committees: "UNGA, ECOSOC, UNESCO",
                    photo: "images/11.png",
                  },
                  {
                    title: "3",
                    date: "January 20-23, 2025",
                    location: "Grand Convention Center",
                    committees: "Security Council, G20, Climate Action",
                    photo: "/images/11.png",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2 border rounded-lg p-6">
                    <img src={event.photo} alt={`Event ${event.title}`} className="h-40 w-full object-cover rounded-md" />

                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">Date: {event.date}</p>
                    <p className="text-sm text-muted-foreground">Location: {event.location}</p>
                    <p className="text-sm text-muted-foreground">Committees: {event.committees}</p>
                    <Link href={`/events#event-${i + 1}`}>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
              <Link href="/events">
                <Button variant="outline">View All Conferences</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

