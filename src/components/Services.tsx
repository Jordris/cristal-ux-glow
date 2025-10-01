import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, TrendingUp, Brain } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description:
        "Atendimento personalizado focado em suas necessidades específicas, objetivos e desafios pessoais.",
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      description:
        "Apoio para fortalecer relacionamentos, melhorar a comunicação e resolver conflitos de forma saudável.",
    },
    {
      icon: TrendingUp,
      title: "Desenvolvimento Profissional",
      description:
        "Orientação para alcançar suas metas profissionais, lidar com estresse no trabalho e crescimento de carreira.",
    },
    {
      icon: Heart,
      title: "Saúde Emocional",
      description:
        "Tratamento para ansiedade, depressão, estresse e outros desafios emocionais com técnicas baseadas em evidências.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wide mb-4">
            Serviços
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Como Posso Te Ajudar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofereço uma variedade de serviços personalizados para atender suas
            necessidades únicas e ajudá-lo a alcançar o bem-estar emocional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
