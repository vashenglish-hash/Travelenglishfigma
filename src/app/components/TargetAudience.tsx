import { Users, GraduationCap } from 'lucide-react';

export function TargetAudience() {
  const groups = [
    {
      title: 'Первая группа',
      grade: '4–5 класс',
      schedule: 'Четверг, 15:00 (МСК)',
      icon: Users,
      color: 'primary'
    },
    {
      title: 'Вторая группа',
      grade: '6–8 класс',
      schedule: 'Пятница, 15:30 (МСК)',
      icon: GraduationCap,
      color: 'secondary'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Для кого курс</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Выберите группу для вашего ребёнка</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {groups.map((group, index) => {
            const Icon = group.icon;
            const isSecondary = group.color === 'secondary';
            
            return (
              <div
                key={index}
                className={`relative overflow-hidden bg-card border ${
                  isSecondary ? 'border-secondary/30' : 'border-primary/30'
                } rounded-xl p-8 hover:border-${group.color} transition-all duration-300 group`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  isSecondary ? 'bg-secondary/10' : 'bg-primary/10'
                } rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative z-10 space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${
                    isSecondary ? 'bg-secondary/20' : 'bg-primary/20'
                  } rounded-lg`}>
                    <Icon className={`w-7 h-7 ${isSecondary ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{group.title}</h3>
                    <div className={`inline-block px-3 py-1 ${
                      isSecondary ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'
                    } rounded-full text-sm mb-4`}>
                      {group.grade}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground mb-1">Расписание:</div>
                    <div className="font-semibold">{group.schedule}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Группы маленькие — максимум <span className="text-primary font-semibold">6 детей</span>, 
            чтобы каждый получил внимание
          </p>
        </div>
      </div>
    </section>
  );
}
