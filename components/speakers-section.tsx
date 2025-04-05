"use client"

import { motion } from "framer-motion"
import { Linkedin, Facebook, Twitter } from "lucide-react"
import Link from "next/link"

const speakers = [
  {
    name: "Dr. Sarah Williams",
    position: "Secretary-General",
    organization: "NAMAH MUN",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    position: "Deputy Secretary-General",
    organization: "NAMAH MUN",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
  {
    name: "Aisha Patel",
    position: "Director of Committees",
    organization: "NAMAH MUN",
    image: "/placeholder.svg?height=300&width=300",
    socials: {
      linkedin: "#",
      facebook: "#",
      twitter: "#",
    },
  },
]

export function SpeakersSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The Speakers</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Meet some of the prominent speakers of this year's event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold">{speaker.name}</h3>
              <p className="text-primary">{speaker.position}</p>
              <p className="text-muted-foreground text-sm mb-4">{speaker.organization}</p>

              <div className="flex justify-center space-x-3">
                <Link
                  href={speaker.socials.linkedin}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href={speaker.socials.facebook}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href={speaker.socials.twitter}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

