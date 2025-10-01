import { CheckCircle } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const highlights = [
    "Especialista em Terapia Cognitivo-Comportamental",
    "Abordagem humanizada e acolhedora",
    "Atendimento presencial e online",
    "Foco em resultados práticos e duradouros",
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img
                src={profileImg}
                alt="Cristina Soraia - Psicóloga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wide mb-4">
              Quem Sou
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Cristina Soraia
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sou psicóloga especializada em Terapia Cognitivo-Comportamental,
              com anos de experiência ajudando pessoas a desenvolverem todo o
              seu potencial emocional e profissional.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem é baseada em evidências científicas, mas sempre
              com um olhar humanizado e acolhedor. Acredito que cada pessoa tem
              recursos internos poderosos que, quando bem direcionados, podem
              transformar completamente sua qualidade de vida.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
