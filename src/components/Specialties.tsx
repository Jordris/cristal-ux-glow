import { Badge } from "@/components/ui/badge";

const Specialties = () => {
  const specialties = [
    "Ansiedade e Síndrome do Pânico",
    "Depressão",
    "Estresse e Burnout",
    "Autoestima e Autoconhecimento",
    "Relacionamentos e Vínculos",
    "Desenvolvimento Pessoal",
    "Gestão Emocional",
    "Fobias e Medos",
    "Transições de Vida",
    "Luto e Perdas",
    "Conflitos Familiares",
    "Orientação Profissional",
  ];

  return (
    <section id="especialidades" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wide mb-4">
            Especialidades
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trabalho com uma ampla gama de questões emocionais e
            comportamentais, sempre com uma abordagem individualizada e
            respeitosa.
          </p>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto animate-scale-in">
          {specialties.map((specialty, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-5 py-2.5 text-sm sm:text-base font-medium bg-primary/10 text-primary border border-primary/20 transition-all cursor-default shadow-soft"
            >
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
