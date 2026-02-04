import { motion } from "framer-motion";
import coupleDance from "@/assets/couple-dance.png";

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-theme-about relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#CBA24B]/40 to-transparent z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-lg text-secondary tracking-[0.2em] uppercase">
            About Elysion
          </span>
          <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl text-primary mt-4 mb-6">
            A Legacy of Excellence
          </h2>
          <p className="font-hero text-xl text-foreground/80 max-w-2xl mx-auto">
            A Royal Tech Romance
          </p>
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mt-4" />
        </motion.div>

        {/* Content: image left, text right – theme-aligned, no venue/eligibility/time */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Thematic image – dancing couple / culture */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center relative"
          >
            {/* Soft glow behind silhouette */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <div className="w-[85%] max-w-[340px] aspect-[4/3] bg-gradient-radial-couple opacity-50" />
            </div>
            <img
              src={coupleDance}
              alt="Elysion – technology, culture and humanity"
              className="couple-dance-silhouette relative z-10 w-full max-w-md object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>

          {/* Copy only – no event details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-body text-xl text-foreground/85 leading-relaxed">
              Elysion is an intercollegiate event that was the inauguration of IEEE CS Chapter
              of CE Munnar in 2016. The second, third and fourth editions of Elysion were
              two-day technical symposiums held in November 2017, October 2019 and January 2022
              respectively.
            </p>
            <p className="font-body text-xl text-foreground/85 leading-relaxed">
              The four previous editions saw a great participation from students across the state.
              Elysion is a combination of technology, culture and humanity, each edition has
              promised this to all the participants. This event has always been a part of the
              sweetest memories in the mind of all participants.
            </p>
            <p className="font-body text-xl text-foreground/85 leading-relaxed">
              <span className="text-gradient-gold font-display font-semibold">ELYSION </span> continues
              the legacy of excellence while bringing fresh innovations and opportunities for participants.
              Join us for days filled with technical workshops, competitions, and networking opportunities.
            </p>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-body text-xl text-foreground/75 italic mt-16 max-w-3xl mx-auto"
        >
          Experience the perfect blend of technology, culture, and humanity that has made
          Elysion a memorable event for participants throughout its history.
        </motion.p>
      </div>
    </section>
  );
};
