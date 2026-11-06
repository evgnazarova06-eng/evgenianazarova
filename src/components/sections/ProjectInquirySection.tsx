import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
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

const contactFields = [
  {
    id: 'project-inquiry-name',
    label: 'Имя',
    placeholder: 'Иван Иванов',
    type: 'text',
  },
  {
    id: 'project-inquiry-email',
    label: 'Email',
    placeholder: 'ivanivanov@gmail.com',
    type: 'email',
  },
];

const serviceOptions = [
  'Монтаж Reels',
  'Съёмка камерных мероприятий',
  'Создание постов',
  'Контент-менеджер',
];

export function ProjectInquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
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
                <div className="flex flex-col gap-5">
                  {contactFields.map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-start gap-[5px]"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-inter text-lg font-medium text-white lg:text-xl"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                      />
                    </div>
                  ))}

                  <div className="flex flex-col items-start gap-[5px]">
                    <Label
                      htmlFor="project-inquiry-service"
                      className="font-inter text-lg font-medium text-white lg:text-xl"
                    >
                      Какая услуга вас интересует?
                    </Label>
                    <Select name="project-inquiry-service">
                      <SelectTrigger
                        id="project-inquiry-service"
                        className="h-[42px] w-full rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-[#ffffff99] focus:ring-1 focus:ring-white/70"
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
                      name="project-inquiry-description"
                      placeholder="Например: нужно вести Instagram и делать 8–12 Reels в месяц"
                      className="min-h-[132px] flex-1 resize-none rounded-[20px] border-[#ffffff99] bg-[#ffffff1a] px-5 py-2.5 font-inter text-base font-medium text-white placeholder:text-[#ffffff99] focus-visible:ring-1 focus-visible:ring-white/70"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-auto w-full rounded-[20px] bg-white px-0 py-2.5 font-inter text-lg font-semibold text-coral-mid hover:bg-white/90 lg:text-xl"
                  >
                    Оставить заявку
                    <ArrowUpRight className="ml-2.5 h-5 w-5" />
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
