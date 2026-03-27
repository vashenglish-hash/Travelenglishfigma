import { X } from 'lucide-react';
import { useEffect } from 'react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollmentModal({ isOpen, onClose }: EnrollmentModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Запись на курс</h3>
            <p className="text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-2">
                Имя родителя <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Телефон <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Имя ребёнка <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Введите имя ребёнка"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                Группа <span className="text-destructive">*</span>
              </label>
              <select
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              >
                <option value="">Выберите группу</option>
                <option value="4-5">4–5 класс (Четверг, 15:00 МСК)</option>
                <option value="6-8">6–8 класс (Пятница, 15:30 МСК)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Комментарий
              </label>
              <textarea
                className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Дополнительная информация (необязательно)"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              Отправить заявку
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
