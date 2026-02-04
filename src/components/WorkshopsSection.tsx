import { motion } from "framer-motion";
import { Camera, Glasses, Check } from "lucide-react";
import { programImages } from "@/lib/programImages";

const workshops = [
  {
    icon: Camera,
    image: programImages.workshops.photography,
    title: "Photography Workshop",
    description:
      "The Photography Workshop at ELYSION 5.0 offers a chance to enhance your photography skills, from mastering composition and lighting to creative storytelling and editing techniques.",
    leader: "Sebinster Francis",
    leaderTitle: "Photographer, Content Creator, and Social Media Influencer",
    highlights: [
      "Influencer at Sony",
      "Featured on BBC Earth and Nat Geo India",
      "Recipient of the Kerala State Film Award in 2021",
    ],
    cta: "Don't miss this opportunity to capture stunning images like a pro!",
  },
  {
    icon: Glasses,
    image: programImages.workshops.arVr,
    title: "AR/VR Workshop",
    description:
      "The AR/VR Workshop at ELYSION 5.0 offers an exciting opportunity to explore immersive technologies transforming industries like gaming, healthcare, and education.",
    additionalInfo:
      "Participants will gain hands-on experience in designing AR/VR applications, creating interactive augmented content, and building virtual environments using industry-relevant tools and frameworks.",
    leaders: [
      { name: "Mathews Kuriakose", title: "Software Developer" },
      { name: "Mrudul Shaji", title: "Software Developer" },
      { name: "Vishnu Prathap", title: "Implementation Engineer, 6D Technologies" },
    ],
  },
];

export const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-lg text-secondary tracking-[0.2em] uppercase">
            Hands-on Learning
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
            Workshops
          </h2>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Workshops */}
        <div className="space-y-12">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 md:p-12 bg-primary/20 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Workshop image + icon */}
                <div className="flex flex-col items-center gap-4 flex-shrink-0">
                  <div className="w-full lg:w-64 aspect-video rounded-sm overflow-hidden border border-secondary/30 bg-primary/40">
                    <img
                      src={workshop.image}
                      alt={workshop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-16 h-16 flex items-center justify-center border border-secondary/40 bg-secondary/10">
                    <workshop.icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="font-display text-3xl text-primary-foreground">
                    {workshop.title}
                  </h3>
                  <p className="font-body text-xl text-primary-foreground/80 leading-relaxed">
                    {workshop.description}
                  </p>

                  {workshop.additionalInfo && (
                    <p className="font-body text-lg text-primary-foreground/70 leading-relaxed">
                      {workshop.additionalInfo}
                    </p>
                  )}

                  {/* Single Leader */}
                  {workshop.leader && (
                    <div className="pt-4 border-t border-secondary/20">
                      <p className="font-body text-lg text-primary-foreground/90 mb-1">
                        Led by{" "}
                        <span className="text-secondary font-display font-semibold">
                          {workshop.leader}
                        </span>
                      </p>
                      <p className="font-body text-base text-primary-foreground/60 italic">
                        {workshop.leaderTitle}
                      </p>

                      {workshop.highlights && (
                        <ul className="mt-4 space-y-2">
                          {workshop.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-center gap-3 font-body text-lg text-primary-foreground/70"
                            >
                              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      {workshop.cta && (
                        <p className="mt-4 font-body text-lg text-secondary italic">
                          {workshop.cta}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Multiple Leaders */}
                  {workshop.leaders && (
                    <div className="pt-4 border-t border-secondary/20">
                      <p className="font-body text-lg text-primary-foreground/90 mb-3">
                        Session Leaders:
                      </p>
                      <ul className="space-y-2">
                        {workshop.leaders.map((leader) => (
                          <li key={leader.name} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="font-body text-lg">
                              <span className="text-secondary font-display font-semibold">
                                {leader.name}
                              </span>
                              <span className="text-primary-foreground/60">
                                , {leader.title}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
