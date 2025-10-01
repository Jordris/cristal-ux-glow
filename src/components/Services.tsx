import { Card, CardContent } from "@/components/ui/card";
import { User, Users, Megaphone, MonitorPlay } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MonitorPlay,
      title: "Terapia Individual Online",
      description:
        "Em qualquer lugar do mundo você pode contratar processo terapêutico online, de forma confidencial, dentro dos padrões regulamentados pelo CFP para lidar com seus desafios e questões emocionais.",
    },
    {
      icon: User,
      title: "Terapia individual em consultório",
      description:
        "Em São José dos Campos você pode escolher realizar seu tratamento psicológico em consultório aconchegante, com psicóloga especializada, para lidar com seus pensamentos e crenças",
    },
    {
      icon: Users,
      title: "Grupos Terapêuticos",
      description:
        "Programas de curta duração em grupo, de cunho psicoeducativo e terapêutico, com objetivo de apoiar os participantes em sua regulação emocional, relacionamento, comunicação, foco e realização. Consulte a temática dos grupos disponíveis.",
    },
    {
      icon: Megaphone,
      title: "Palestras",
      description:
        "As palestras são oferecidas com programação aberta e em empresas para público restrito. Os temas são relacionados a saúde mental, regulação emocional, carreira, liderança e afins.",
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
