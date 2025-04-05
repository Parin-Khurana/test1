"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Create an array for the gallery images - using the same image for all positions
  const images = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=300&width=500`,
    alt: `MUN Conference Hall`,
  }))

  // Define the heart shape layout positions
  const heartPositions = [
    // Row 1 (2 images)
    { gridColumn: "3 / span 2", gridRow: "1 / span 1" },
    { gridColumn: "5 / span 2", gridRow: "1 / span 1" },

    // Row 2 (3 images)
    { gridColumn: "2 / span 2", gridRow: "2 / span 1" },
    { gridColumn: "4 / span 2", gridRow: "2 / span 1" },
    { gridColumn: "6 / span 2", gridRow: "2 / span 1" },

    // Row 3 (4 images)
    { gridColumn: "1 / span 2", gridRow: "3 / span 1" },
    { gridColumn: "3 / span 2", gridRow: "3 / span 1" },
    { gridColumn: "5 / span 2", gridRow: "3 / span 1" },
    { gridColumn: "7 / span 2", gridRow: "3 / span 1" },

    // Row 4 (3 images)
    { gridColumn: "2 / span 2", gridRow: "4 / span 1" },
    { gridColumn: "4 / span 2", gridRow: "4 / span 1" },
    { gridColumn: "6 / span 2", gridRow: "4 / span 1" },

    // Row 5 (2 images)
    { gridColumn: "3 / span 2", gridRow: "5 / span 1" },
    { gridColumn: "5 / span 2", gridRow: "5 / span 1" },

    // Row 6 (1 image)
    { gridColumn: "4 / span 2", gridRow: "6 / span 1" },

    // Row 7 (1 image)
    { gridColumn: "5 / span 1", gridRow: "7 / span 1" },
  ]

  return (
    <>
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Moments captured from our MUN journey</p>
          </motion.div>

          <div className="relative mx-auto max-w-5xl">
            <div className="bg-black p-8 rounded-xl">
              <div className="grid grid-cols-8 grid-rows-7 gap-2">
                {heartPositions.map((position, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(index)}
                    style={position}
                  >
                    <img
                      src={images[index].src || "/placeholder.svg"}
                      alt={images[index].alt}
                      className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl bg-background p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-background/80 rounded-full p-2 z-10 hover:bg-background"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={selectedImage !== null ? images[selectedImage].src : ""}
                alt={selectedImage !== null ? images[selectedImage].alt : ""}
                className="max-h-[80vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

