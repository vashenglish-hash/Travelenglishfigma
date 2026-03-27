import { 
  Plane, 
  Hotel, 
  UtensilsCrossed, 
  Map, 
  AlertCircle, 
  Camera,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

export function ProgramSection() {
  const modules = [
    {
      number: '1',
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      outcome: 'Уверенность уже в первые часы за границей.',
      icon: Plane,
      color: 'primary'
    },
    {
      number: '2',
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      outcome: 'Практика вежливых фраз и повседневной лексики.',
      icon: Hotel,
      color: 'secondary'
    },
    {
      number: '3',
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      outcome: 'Развитие гастрономического словаря и уверенности в общении.',
      icon: UtensilsCrossed,
      color: 'primary'
    },
    {
      number: '4',
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      outcome: 'Понимание устной речи и произношения в реальных ситуациях.',
      icon: Map,
      color: 'secondary'
    },
    {
      number: '5',
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      outcome: 'Важные фразы, которые могут спасти отпуск.',
      icon: AlertCircle,
      color: 'primary'
    },
    {
      number: '6–8',
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      outcome: 'Погружение в культурный контекст через язык.',
      icon: Camera,
      color: 'secondary'
    },
    {
      number: '9',
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      outcome: 'Игровая практика диалогов и неформального общения.',
      icon: Users,
      color: 'primary'
    },
    {
      number: '10',
      title: 'Дипломный проект: «Мой идеальный отпуск»',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      outcome: 'Развитие связной речи и творческого самовыражения.',
      icon: Award,
      color: 'secondary'
    }
  ];

  return (
    <section id="program" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Программа курса</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Что будем изучать</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8 модулей практического английского для реальных ситуаций в путешествиях
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isSecondary = module.color === 'secondary';
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-card border ${
                  isSecondary ? 'border-secondary/20' : 'border-primary/20'
                } rounded-xl p-6 hover:border-${module.color} transition-all duration-300 hover:shadow-lg ${
                  isSecondary ? 'hover:shadow-secondary/10' : 'hover:shadow-primary/10'
                }`}
              >
                {/* Number badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${
                  isSecondary ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                } rounded-full flex items-center justify-center font-bold text-sm`}>
                  {module.number}
                </div>

                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${
                    isSecondary ? 'bg-secondary/20' : 'bg-primary/20'
                  } rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${isSecondary ? 'text-secondary' : 'text-primary'}`} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold">{module.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {module.description}
                    </p>
                    <div className={`flex items-start gap-2 pt-2 border-t border-border/50`}>
                      <CheckCircle2 className={`w-4 h-4 ${
                        isSecondary ? 'text-secondary' : 'text-primary'
                      } flex-shrink-0 mt-0.5`} />
                      <p className="text-sm">{module.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
