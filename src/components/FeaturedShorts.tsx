import { useRef } from 'react';

const shorts = [
  {
    id: 1,
    thumbnail: "https://img.youtube.com/vi/hcjgMJUzidk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=hcjgMJUzidk",
    embedUrl: "https://www.youtube.com/embed/hcjgMJUzidk?autoplay=1&mute=1&loop=1&playlist=hcjgMJUzidk&controls=0&showinfo=0&rel=0&modestbranding=1",
    title: "THE INTERNET",
    duration: "00:00:59"
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/rT01sRd_1O4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=rT01sRd_1O4",
    embedUrl: "https://www.youtube.com/embed/rT01sRd_1O4?autoplay=1&mute=1&loop=1&playlist=rT01sRd_1O4&controls=0&showinfo=0&rel=0&modestbranding=1",
    title: "$500,000",
    duration: "00:00:45"
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/6MUpd3hgAVM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=6MUpd3hgAVM",
    embedUrl: "https://www.youtube.com/embed/6MUpd3hgAVM?autoplay=1&mute=1&loop=1&playlist=6MUpd3hgAVM&controls=0&showinfo=0&rel=0&modestbranding=1",
    title: "AMAZING SKILLS",
    duration: "00:00:32"
  },

];

const FeaturedShorts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isYouTubeVideo = (videoUrl: string) => {
    return videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  };

  return (
    <section id="featured-content" className="section bg-white">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-up">
          Featured <span className="highlight-accent">Shorts</span>
        </h2>
        
        <div className="mt-16 max-w-6xl mx-auto" data-aos="fade-up">
          <div className="flex gap-6 justify-center">
            {shorts.map((short) => (
              <div key={short.id} className="w-full max-w-sm">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  {isYouTubeVideo(short.videoUrl) ? (
                    <iframe
                      src={short.embedUrl}
                      className="w-full aspect-[9/16]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={short.title}
                    ></iframe>
                  ) : (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full aspect-[9/16] object-cover"
                      poster={short.thumbnail}
                    >
                      <source src={short.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default FeaturedShorts;