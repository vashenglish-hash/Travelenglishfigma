import { ArrowRight, Sparkles, Users } from 'lucide-react';

interface CallToActionProps {
  onEnrollClick: () => void;
}

export function CallToAction({ onEnrollClick }: CallToActionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-8 md:p-12 text-center space-y-8 backdrop-blur-sm">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Набор открыт!</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Запишитесь сейчас
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span>Группы маленькие — максимум 6 детей</span>
            </div>
          </div>

          <button
            onClick={onEnrollClick}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white text-lg font-semibold rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Записаться на курс
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Места ограничены! Не упустите возможность дать ребёнку навыки, которые пригодятся на всю жизнь.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
