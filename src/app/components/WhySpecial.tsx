import { MessageCircle, Lightbulb, Gamepad2, TrendingUp } from 'lucide-react';

export function WhySpecial() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Практическая речь',
      description: 'Акцент на практическую, живую речь, а не на грамматику ради грамматики. Все ситуации — из реальной жизни путешественника.'
    },
    {
      icon: Gamepad2,
      title: 'Интерактивные задания',
      description: 'Ролевые игры, аудиоситуации, мини-квесты. Обучение через игру и практику.'
    },
    {
      icon: TrendingUp,
      title: 'Реальный прогресс',
      description: 'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.'
    },
    {
      icon: Lightbulb,
      title: 'Индивидуальный подход',
      description: 'Малые группы до 6 человек обеспечивают внимание каждому ученику.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Преимущества</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Почему этот курс особенный?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  isEven ? 'bg-primary/5' : 'bg-secondary/5'
                } rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10 space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${
                    isEven ? 'bg-primary/20' : 'bg-secondary/20'
                  } rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${isEven ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
