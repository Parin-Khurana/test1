"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import dynamic from "next/dynamic"
import TestimonialSlider from "@/components/testimonial-slider"
import { motion } from "framer-motion"
import { SpeakersSection } from "@/components/speakers-section"
import { StatisticsSection } from "@/components/statistics-section"
import { BenefitsGrid } from "@/components/benefits-grid"
import { CountdownTimer } from "@/components/countdown-timer"

// Import the 3D logo with dynamic import to avoid SSR issues
const Namah3DLogo = dynamic(() => import("@/components/namah-3d-logo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-primary/10 rounded-xl">
      <h2 className="text-4xl font-bold text-primary animate-pulse">NAMAH MUN</h2>
    </div>
  ),
})

export default function HomePage() {
  // Next conference date
  const conferenceDate = new Date("2024-10-15T09:00:00")

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
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
                  NAMAH Model United Nations
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join the premier diplomatic simulation conference empowering future global leaders
                </p>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-3xl"
              >
                <CountdownTimer targetDate={conferenceDate} />
              </motion.div>

              {/* 3D Rotating Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
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
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" className="px-8 rounded-full border-2 hover:bg-primary/10 transition-all">
                    View Conferences
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Next Conference Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Next Conference</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Join us at our upcoming flagship Model United Nations conference
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:shrink-0 bg-primary/20 md:w-[240px] flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary">NAMAH Regional MUN</h3>
                    <div className="mt-4 text-5xl font-bold">
                      15-17
                      <div className="text-lg font-medium text-muted-foreground">October 2024</div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>October 15-17, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>University Conference Center</span>
                    </div>
                    <p className="mt-2">
                      A three-day conference focusing on regional issues with committees including UNSC, UNHRC, and WHO.
                      Open to university and high school students.
                    </p>
                    <div className="pt-4">
                      <Link href="/events#event-1">
                        <Button>Register Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <BenefitsGrid />

        {/* Speakers Section */}
        <SpeakersSection />

        {/* Testimonials Section */}
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

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/10 dark:bg-primary/5">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-8 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Join NAMAH MUN?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Register today to secure your spot at our upcoming conferences
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/join-us">
                  <Button size="lg" className="px-8 rounded-full">
                    Apply for Membership
                  </Button>
                </Link>
                <Link href="/events">
                  <Button size="lg" variant="outline" className="px-8 rounded-full">
                    View All Conferences
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

