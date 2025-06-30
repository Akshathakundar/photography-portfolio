"use client"

import { useState } from "react"

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Wedding ceremony with bride and groom exchanging vows",
    title: "Wedding Ceremony",
    event: "Sarah & Michael's Wedding",
    date: "June 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Corporate conference with speaker on stage",
    title: "Corporate Conference",
    event: "Tech Summit 2024",
    date: "March 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Graduation ceremony with students in caps and gowns",
    title: "Graduation Day",
    event: "NYU Class of 2024",
    date: "May 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Music concert with performer on stage",
    title: "Live Concert",
    event: "Summer Music Festival",
    date: "July 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Birthday party celebration with family",
    title: "Birthday Celebration",
    event: "Emma's 25th Birthday",
    date: "August 2024",
  },
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    alt: "Fashion show runway event",
    title: "Fashion Show",
    event: "NYC Fashion Week",
    date: "February 2024",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-lg font-semibold mb-1">{photo.title}</p>
                    <p className="text-sm text-gray-300 mb-1">{photo.event}</p>
                    <p className="text-xs text-gray-400">{photo.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={photos[selectedImage].src || "/placeholder.svg"}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
