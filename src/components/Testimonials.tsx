import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonialsData = [
  {
    id: 1,
    text: `"From the very first call, it was clear Stevan knew exactly what he was doing. His clean code, thoughtful UI decisions, and reliable delivery made a huge impact on our launch. I’d gladly work with him again and recommend him without hesitation."`,
    name: "Andrew Zacker",
    role: "Founder and CEO of ",
    company: "ZaCode",
    image: "./za-code.png",
  },
  {
    id: 2,
    text: `"What stood out the most about Stevan was his ability to listen, understand, and then translate ideas into elegant solutions. The entire process was smooth, efficient, and enjoyable. Our product now looks and performs better than we imagined."`,
    name: "Milos Sretin",
    role: "CEO at ",
    company: "Astatinn",
    image: "./astatinn.png",
  },
  {
    id: 3,
    text: `"We brought Stevan in during a critical phase of development, and he delivered far beyond expectations. His structured workflow, speed, and sharp attention to detail were exactly what we needed. He instantly became a key part of the team."`,
    name: "James Burton",
    role: "CTO at ",
    company: "NextVision",
    image: "./next-vision.png",
  },
  {
    id: 4,
    text: `"Stevan approaches every project with a calm confidence and deep focus that inspires trust. He brought clarity to our ideas, executed flawlessly, and elevated the entire experience. Collaborating with him was a true pleasure from start to finish."`,
    name: "Sophia Mendes",
    role: "Head of Product at ",
    company: "NexaLoop",
    image: "./nexa-loop.png",
  },
];

type DotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

function DotButton({ selected, onClick }: DotButtonProps) {
  return (
    <button
      className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${
        selected ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
      }`}
      onClick={onClick}
      aria-label={selected ? "Current Slide" : "Go to Slide"}
    />
  );
}

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1 className="text-mainWhite mb-10 text-center">
        Kind words from <span className="gradient-text">satisfied clients</span>
      </h1>

      <div className="w-full max-w-[900px] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonialsData.map((item) => (
            <div key={item.id} className="min-w-full px-4">
              <div className="text-mainWhite flex min-h-[300px] flex-col justify-between rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8">
                <h3 className="text-mainGray flex-grow pb-2 font-serif text-sm leading-relaxed tracking-wide italic md:pb-0 md:text-lg">
                  {item.text}
                </h3>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt="Testimonial Avatar"
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div>
                    <p>{item.name}</p>
                    <p>
                      {item.role}
                      <span className="gradient-text">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
