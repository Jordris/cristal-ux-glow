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
          <div className="relative overflow-hidden animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img
                src={profileImg}
                alt="Cristina Soraia - Psicóloga"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 hidden sm:block" />    
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
              Sou carioca, casada e mãe de uma menina e um menino que me ensinam muito 
              e me desafiam a me tornar uma pessoa melhor a cada dia. 
              A curiosidade e vontade de aprender é uma constante na minha vida. 
              Com regularidade participo dos congressos relacionados às linhas de atendimento que 
              trabalho e busco novas formações. Atualmente estou realizando uma formação 
              que me capacita para o atendimento de casais.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sou amante da natureza, me sinto plena em contato com o mar, 
              com o verde e explorar lugares novos. Amo fazer trilhas, viajar, 
              fotografar, aprender idiomas. 
              Moro em São José dos Campos/SP e gosto de me dizer aberta a pacientes brasileiros 
              em qualquer lugar do Brasil e do mundo.
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
