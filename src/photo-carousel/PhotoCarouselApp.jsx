import ImageSlider from "./ImageSlider";

const slides = [
  { url: "./src/photo-carousel/public/image-1.jpeg", title: "Beach" },
  { url: "./src/photo-carousel/public/image-2.jpeg", title: "Boat" },
  { url: "./src/photo-carousel/public/image-3.jpeg", title: "Forest" },
  { url: "./src/photo-carousel/public/image-4.jpeg", title: "City" },
  { url: "./src/photo-carousel/public/image-5.jpeg", title: "Italy" },
];

export default function PhotoCarouselApp() {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
