import { CreditCard, Check, Sparkles } from 'lucide-react';

interface PricingProps {
  onEnrollClick: () => void;
}

export function Pricing({ onEnrollClick }: PricingProps) {
  const plans = [
    {
      name: 'Абонемент',
      price: '1 300',
      unit: '/ урок',
      description: 'Оплата по одному уроку',
      features: [
        'Доступ к уроку',
        'Все материалы',
        'Поддержка преподавателя',
        'Сертификат по завершению'
      ],
      recommended: false
    },
    {
      name: 'Полный курс',
      price: '12 000',
      unit: '/ 10 уроков',
      description: 'Выгодная цена за весь курс',
      features: [
        'Все 10 уроков',
        'Все материалы',
        'Поддержка преподавателя',
        'Сертификат по завершению',
        'Дипломный проект',
        'Экономия 1 000 ₽'
      ],
      recommended: true
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Стоимость</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Выберите удобный вариант</h2>
          <p className="text-lg text-muted-foreground">
            Инвестиция в будущее вашего ребёнка
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl ${
                plan.recommended
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary'
                  : 'bg-card border border-border'
              } p-8 hover:scale-105 transition-transform duration-300`}
            >
              {plan.recommended && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold text-white">
                    <Sparkles className="w-3 h-3" />
                    Рекомендуем
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold ${
                    plan.recommended ? 'text-primary' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">₽</span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.recommended ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onEnrollClick}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40'
                      : 'bg-card hover:bg-muted border border-border'
                  }`}
                >
                  Выбрать план
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Все цены указаны в российских рублях. Оплата производится до начала курса.
          </p>
        </div>
      </div>
    </section>
  );
}
