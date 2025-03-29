"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"
import TestimonialSlider from "@/components/testimonial-slider"
import { motion } from "framer-motion"

// Import the 3D logo with dynamic import to avoid SSR issues
const Namah3DLogo = dynamic(() => import("@/components/namah-3d-logo"), { ssr: false })

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Welcome to NAMAH MUN
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering future diplomats through Model United Nations conferences and training.
                </p>
              </motion.div>

              {/* 3D Rotating Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full"
              >
                <Namah3DLogo />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-x-4"
              >
                <Link href="/join-us">
                  <Button className="px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                    Join NAMAH <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="px-8 rounded-full border-2 hover:bg-primary/10 transition-all">
                    Upcoming Conferences
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted dark:bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-3 items-start">
              {[
                {
                  title: "Our Mission",
                  description:
                    "To foster diplomatic skills, global awareness, and leadership through Model United Nations.",
                },
                {
                  title: "Our Vision",
                  description:
                    "Creating a community of informed global citizens ready to tackle the world's most pressing challenges.",
                },
                {
                  title: "Our Values",
                  description: "Diplomacy, integrity, inclusivity, and dedication to international cooperation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4 p-6 rounded-xl bg-background shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Delegates Say</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Hear from past participants about their NAMAH MUN experience
                </p>
              </div>

              <TestimonialSlider />
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Upcoming Conferences</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Join us at our upcoming MUN conferences and develop your diplomatic skills.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "NAMAH Regional MUN",
                    date: "October 15-17, 2024",
                    location: "University Conference Center",
                    committees: "UNSC, UNHRC, WHO",
                  },
                  {
                    title: "NAMAH Youth MUN",
                    date: "November 5-6, 2024",
                    location: "International School Auditorium",
                    committees: "UNGA, ECOSOC, UNESCO",
                  },
                  {
                    title: "NAMAH Global Summit",
                    date: "January 20-23, 2025",
                    location: "Grand Convention Center",
                    committees: "Security Council, G20, Climate Action",
                  },
                ].map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center space-y-4 border rounded-xl p-6 bg-background shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="h-40 w-full bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">NAMAH MUN</span>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">Date: {event.date}</p>
                    <p className="text-sm text-muted-foreground">Location: {event.location}</p>
                    <p className="text-sm text-muted-foreground">Committees: {event.committees}</p>
                    <Link href={`/events#event-${i + 1}`}>
                      <Button variant="outline" size="sm" className="rounded-full">
                        Learn More
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link href="/events">
                <Button variant="outline" className="rounded-full">
                  View All Conferences
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

