import React from 'react';

const HeartShapedGallery = () => {
  // Sample images - replace with your actual images
  const images = [
    { id: 1, src: "images/11.png", alt: "Nature" },
    { id: 2, src: "images/11.png", alt: "City" },
    { id: 3, src: "images/11.png", alt: "Technology" },
    { id: 4, src: "images/11.png", alt: "Mountains" },
    { id: 5, src: "images/11.png", alt: "Beach" },
    { id: 6, src: "images/11.png", alt: "Forest" },
    { id: 7, src: "images/11.png", alt: "Sports" },
    { id: 8, src: "images/11.png", alt: "Food" },
    { id: 9, src: "images/11.png", alt: "Travel" },
    { id: 10, src: "images/11.png", alt: "Ocean" },
    { id: 11, src: "images/11.png", alt: "Concert" },
    { id: 12, src: "images/11.png", alt: "Art" },
    { id: 13, src: "images/11.png", alt: "Wildlife" },
    { id: 14, src: "images/11.png", alt: "Portrait" },
    { id: 15, src: "images/11.png", alt: "Architecture" },
    { id: 16, src: "images/11.png", alt: "Landscape" },
    { id: 17, src: "images/11.png", alt: "Abstract" },
    { id: 18, src: "images/11.png", alt: "Macro" },
  ];

  // Define the heart shape using CSS grid layout
  const gridPositions = [
    { gridColumn: "2 / 4", gridRow: "1 / 3" },
    { gridColumn: "4 / 6", gridRow: "1 / 3" },
    { gridColumn: "1 / 3", gridRow: "3 / 5" },
    { gridColumn: "3 / 5", gridRow: "3 / 5" },
    { gridColumn: "5 / 7", gridRow: "3 / 5" },
    { gridColumn: "1 / 3", gridRow: "5 / 7" },
    { gridColumn: "3 / 5", gridRow: "5 / 7" },
    { gridColumn: "5 / 7", gridRow: "5 / 7" },
    { gridColumn: "2 / 4", gridRow: "7 / 9" },
    { gridColumn: "4 / 6", gridRow: "7 / 9" },
    { gridColumn: "3 / 5", gridRow: "9 / 11" },
  ];

  // For smaller heart layout
  const smallerHeartPositions = [
    { gridColumn: "2 / 3", gridRow: "1 / 2" },
    { gridColumn: "3 / 4", gridRow: "1 / 2" },
    { gridColumn: "1 / 2", gridRow: "2 / 3" },
    { gridColumn: "2 / 3", gridRow: "2 / 3" },
    { gridColumn: "3 / 4", gridRow: "2 / 3" },
    { gridColumn: "4 / 5", gridRow: "2 / 3" },
    { gridColumn: "2 / 3", gridRow: "3 / 4" },
    { gridColumn: "3 / 4", gridRow: "3 / 4" }
  ];

  // Create positions for all images - using the heart shape for the main ones
  // and adding others around in a pleasing arrangement
  const allPositions = [
    ...gridPositions,
    { gridColumn: "7 / 9", gridRow: "4 / 6" },
    { gridColumn: "7 / 9", gridRow: "2 / 4" },
    { gridColumn: "1 / 3", gridRow: "8 / 10" },
    { gridColumn: "5 / 7", gridRow: "8 / 10" },
    { gridColumn: "6 / 8", gridRow: "6 / 8" },
    { gridColumn: "7 / 9", gridRow: "7 / 9" },
    { gridColumn: "4 / 6", gridRow: "10 / 12" },
    { gridColumn: "2 / 4", gridRow: "10 / 12" }
  ];

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Heart Gallery</h1>
          <p className="text-gray-500">Photos arranged in a heart shape</p>
        </div>

        <div className="grid grid-cols-8 grid-rows-11 gap-2 mx-auto max-w-5xl">
          {images.slice(0, allPositions.length).map((image, index) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                gridColumn: allPositions[index].gridColumn,
                gridRow: allPositions[index].gridRow,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeartShapedGallery;