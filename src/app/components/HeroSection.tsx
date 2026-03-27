import { Globe2, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onEnrollClick: () => void;
}

export function HeroSection({ onEnrollClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#141824] to-[#0a0e1a]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Набор открыт</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Курс{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              «Английский для путешествий»
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
            Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
            в отпуске, поездках и будущих путешествиях!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onEnrollClick}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white rounded-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:scale-105 flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Globe2 className="w-5 h-5" />
              Записаться на курс
            </button>
            <button 
              onClick={() => {
                document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-card hover:bg-card/80 border border-border text-foreground rounded-lg transition-all duration-300 min-w-[200px]"
            >
              Узнать больше
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">10</div>
              <div className="text-sm text-muted-foreground">Уроков</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-secondary">6</div>
              <div className="text-sm text-muted-foreground">Детей макс.</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">A2–B1</div>
              <div className="text-sm text-muted-foreground">Уровень</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-secondary">2</div>
              <div className="text-sm text-muted-foreground">Группы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
