import { Monitor, Wifi, Headphones } from 'lucide-react';

export function Requirements() {
  const requirements = [
    {
      icon: Monitor,
      text: 'Стационарный компьютер или ноутбук с наушниками и микрофоном'
    },
    {
      icon: Wifi,
      text: 'Стабильный интернет и Zoom'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-4">
            <Headphones className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Требования</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Что потребуется</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            
            return (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="flex-1 pt-2">{req.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
