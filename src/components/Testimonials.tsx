import { useEffect, useRef } from "react";

interface VideoTestimonial {
  mediaId: string;
  name: string;
}

const videoTestimonials: VideoTestimonial[] = [
  { mediaId: "ew221wrysg", name: "Kazeem" },
  { mediaId: "mqwmrdeti6", name: "Rebecca" },
  { mediaId: "a6xc23ujzq", name: "Mike" },
];

const Testimonials = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Load main Wistia player script
    const playerScript = document.createElement("script");
    playerScript.src = "https://fast.wistia.com/player.js";
    playerScript.async = true;
    document.head.appendChild(playerScript);

    // Load individual video module scripts
    videoTestimonials.forEach(({ mediaId }) => {
      const moduleScript = document.createElement("script");
      moduleScript.src = `https://fast.wistia.com/embed/${mediaId}.js`;
      moduleScript.async = true;
      moduleScript.type = "module";
      document.head.appendChild(moduleScript);
    });
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear From Our <span className="text-gradient-gold">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real investors sharing their Dubai property journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.map(({ mediaId, name }, index) => (
            <div
              key={mediaId}
              className="card-luxury overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full" style={{ paddingTop: "177.78%" }}>
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <style>
                        wistia-player[media-id='${mediaId}']:not(:defined) {
                          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
                          display: block;
                          filter: blur(5px);
                          height: 100%;
                          width: 100%;
                        }
                      </style>
                      <wistia-player 
                        media-id="${mediaId}" 
                        aspect="0.5625"
                        style="width: 100%; height: 100%;"
                      ></wistia-player>
                    `,
                  }}
                />
              </div>
              <div className="pt-4 text-center">
                <p className="font-semibold text-foreground">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
