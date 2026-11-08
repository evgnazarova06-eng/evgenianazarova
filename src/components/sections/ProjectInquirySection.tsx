import { useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// ←←← Вставь сюда URL своего Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVOtXy13cNt3TsOUwNCjJq1eoHcXG_NwrN3LA43kOe4-Avk3lCkMbaXoWGTsgjFDbx/exec';

const serviceOptions = [
  'Монтаж Reels',
  'Съёмка камерных мероприятий',
  'Создание постов',
  'Контент-менеджер',
];

export function ProjectInquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState(''); // Телефон или Telegram
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          service,
          description,
        }),
      });

      setSubmitted(true);

      // Очищаем форму
      setName('');
      setEmail('');
      setContact('');
      setService('');
      setDescription('');
    } catch (err) {
      setError('Не удалось отправить заявку. Попробуйте ещё раз.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className="relative flex min-h-[550px] w-full items-start justify-center overflow-hidden bg-neutral-50 px-4 py-10 sm:px-8 lg:py-[60px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[204px] left-1/2 h-[754px] w-[2563px] -translate-x-1/2 rounded-[1281.5px/377px] bg-coral-light/30"
      />
      <Card className="relative z-10 w-full max-w-[1020px] overflow-hidden rounded-[40px] border-0 bg-coral-mid shadow-none lg:min-h-[430px] lg:rounded-[80px]">
        <CardContent className="relative z-10 p-6 sm:p-10 lg:px-[90px] lg:pt-[50px] lg:pb-[49px]">
          {submitted ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center gap-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-inter text-2xl font-semibold text-white lg:text-[32px]">
                Заявка отправлена!
              </h2>
              <p className="font-inter text-lg font-medium text-[#ffffffcc]">
                Спасибо! Я свяжусь с вами в течение 5 минут.
              </p>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setSubmitted(false)}
                className="rounded-[20px] bg-white px-8 py-2.5 font-inter text-lg font-semibold text-coral-mid hover:bg-white/90"
              >
                Отправить ещё одну заявку
              </Button>
            </div>
          ) : (
            <form
              className="flex flex-col items-center gap-8 lg:gap-10"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center font-inter text-2xl font-semibold text-white lg:text-[32px]">
                Обсудим ваш проект
              </h2>

              <div className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-2 lg:gap-10">
                {/* Левая колонка */}
                <div className="flex flex-col gap-5">
                  {/* Имя */}
                  <div className="flex flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-name"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Имя
                    </Label>
                    <Input
                      id="project-inquiry-name"
                      type="text"
                      placeholder="Иван Иванов"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-email"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Email
                    </Label>
                    <Input
                      id="project-inquiry-email"
                      type="email"
                      placeholder="ivanivanov@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                    />
                  </div>

                  {/* Телефон или Telegram */}
                  <div className="flex flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-contact"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Телефон или Telegram
                    </Label>
                    <Input
                      id="project-inquiry-contact"
                      type="text"
                      placeholder="+7 999 123-45-67 или @username"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                    />
                  </div>

                  {/* Услуга */}
                  <div className="flex flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-service"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Какая услуга вас интересует?
                    </Label>
                    <Select value={service} onValueChange={setService} required>
                      <SelectTrigger
                        id="project-inquiry-service"
                        className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white focus:ring-1 focus:ring-white/70"
                      >
                        <SelectValue placeholder="Выбор услуги" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Правая колонка */}
                <div className="flex min-h-[220px] flex-col gap-5 lg:min-h-0">
                  <div className="flex flex-1 flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-description"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Немного расскажите о задаче
                    </Label>
                    <Textarea
                      id="project-inquiry-description"
                      placeholder="Например: нужно вести Instagram и делать 8–12 Reels в месяц"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[180px] flex-1 resize-none rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-200">{error}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-auto w-full rounded-[20px] bg-white px-0 py-2.5 font-inter text-lg font-semibold text-coral-mid hover:bg-white/90 disabled:opacity-70 lg:text-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      <>
                        Оставить заявку
                        <ArrowUpRight className="ml-2.5 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}