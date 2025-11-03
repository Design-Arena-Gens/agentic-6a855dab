"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquareHeart,
  Send,
  Sparkles,
  Waves,
} from "lucide-react";
import clsx from "clsx";

type Feature = {
  title: string;
  description: string;
  accent: string;
};

const features: Feature[] = [
  {
    title: "Тёплое приветствие",
    description:
      "Нативная локализация и эмоциональный тон создают ощущение живого общения.",
    accent: "from-emerald-400/40 to-cyan-400/30",
  },
  {
    title: "Лёгкий старт",
    description:
      "Мы встречаем пользователя простой навигацией и подсказками, чтобы не терять внимание.",
    accent: "from-fuchsia-400/40 to-purple-400/30",
  },
  {
    title: "Умные сценарии",
    description:
      "Интегрируйте приветственный поток в чат-бот, рассылку или лендинг за считанные минуты.",
    accent: "from-blue-400/40 to-sky-400/20",
  },
];

const milestones = [
  {
    label: "1 минута",
    title: "Привет",
    text: "Подберите тёплую фразу и добавьте эмодзи, чтобы настроить диалог на нужную волну.",
  },
  {
    label: "5 минут",
    title: "Создаем сценарий",
    text: "Накидайте ключевые вопросы и ответы, чтобы удерживать внимание и двигать к цели.",
  },
  {
    label: "15 минут",
    title: "Запуск",
    text: "Экспортируйте сценарий в любимый инструмент и подарите пользователям незабываемое знакомство.",
  },
];

const faqs = [
  {
    q: "Почему всё начинается с \"привет\"?",
    a: "Первое впечатление задаёт тон диалогу. Правильное приветствие повышает вовлечённость и доверие.",
  },
  {
    q: "Можно ли подключить свой бренд?",
    a: "Да, меняйте палитру, фон, эмодзи и голос — вся визуальная и текстовая часть полностью адаптируется.",
  },
  {
    q: "Нужны ли навыки программирования?",
    a: "Нет. Редактор сценариев работает на drag&drop, а готовые шаблоны помогут стартовать без кода.",
  },
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = {
      email: form.get("email"),
      message: form.get("message"),
    };

    // Имитация сетевого запроса — обычно здесь был бы вызов API.
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.info("Привет! Сообщение отправлено:", payload);
    setStatus("sent");
    event.currentTarget.reset();
  };

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 blur-3xl">
          <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        </div>
      </div>

      <section className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-3 text-sm text-emerald-300/80">
            <Sparkles className="h-5 w-5" aria-hidden />
            <span className="uppercase tracking-[0.35em]">Добро пожаловать</span>
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl">
            Привет! Мы создаём идеальное первое впечатление для ваших пользователей.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            Сервис «Привет» помогает брендам разговаривать по‑человечески: от первого сообщения до завершения воронки. Настройте тон общения, добавьте эмоции и удерживайте внимание с первых секунд.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Попробовать первым
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-emerald-200 hover:text-emerald-100"
            >
              Что внутри
            </Link>
          </div>
        </div>
        <div className="relative isolate mt-6 grid aspect-square w-full max-w-sm place-items-center rounded-3xl border border-white/10 bg-white/5 p-0.5 shadow-[0_0_80px_rgba(16,185,129,0.15)] backdrop-blur-sm lg:mt-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-transparent to-cyan-400/40" />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 rounded-[calc(theme(borderRadius.3xl)-0.5rem)] bg-slate-950/80 p-8 text-center">
            <MessageSquareHeart className="h-12 w-12 text-emerald-300" aria-hidden />
            <p className="text-lg font-medium text-slate-100">
              «Привет! Я ваш новый пользователь. Расскажите мне, почему стоит остаться?»
            </p>
            <p className="text-sm text-slate-400">
              Мы поможем ответить на этот вопрос красиво и искренне.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="space-y-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Сценарии, которые работают</h2>
          <p className="max-w-3xl text-base text-slate-400 sm:text-lg">
            Готовые фреймворки помогают быстрее запускать onboarding, рассылки и чат-ботов. Меняйте тон и структуру — логика и дизайн останутся на уровне.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={clsx(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition",
                "hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10"
              )}
            >
              <div
                className={clsx(
                  "absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r",
                  feature.accent
                )}
                aria-hidden
              />
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  <span className="text-xs uppercase tracking-[0.25em] text-emerald-200/70">
                    готово к запуску
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-14 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">От идеи до запуска за 15 минут</h2>
          <p className="text-base text-slate-400 sm:text-lg">
            Мы встроили готовый шаблон коммуникации, подсказки по тону и быстрый экспорт. Персонализация приветствия больше не занимает часы.
          </p>
          <div className="space-y-5">
            {milestones.map((step, index) => (
              <div
                key={step.label}
                className="relative flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-semibold text-emerald-200">
                  {index + 1}
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
                    {step.label}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-sky-500/10 p-8 shadow-[0_25px_80px_rgba(16,185,129,0.15)]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-emerald-200/80">
              <Waves className="h-5 w-5" aria-hidden />
              <span className="text-sm uppercase tracking-[0.35em]">Результат</span>
            </div>
            <p className="text-3xl font-semibold text-slate-50">
              82% пользователей продолжают взаимодействие, когда первое сообщение звучит по‑дружески.
            </p>
            <p className="text-sm text-slate-200/80">
              Сервис «Привет» анализирует реакцию, измеряет отклик и предлагает улучшения, чтобы каждое «привет» было ещё теплее.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Частые вопросы</h2>
          <p className="text-base text-slate-400 sm:text-lg">
            Собрали ответы на вопросы, с которых обычно начинается знакомство с платформой.
          </p>
        </div>
        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-300/40 hover:bg-white/10"
            >
              <summary className="cursor-pointer text-lg font-semibold text-slate-100">
                {item.q}
              </summary>
              <p className="pt-3 text-sm text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(2,132,199,0.15)] lg:grid-cols-[1.1fr,1fr]"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sky-200/80">
            <Send className="h-5 w-5" aria-hidden />
            <span className="text-sm uppercase tracking-[0.35em]">Напишите нам</span>
          </div>
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl">Получите ранний доступ и персональную консультацию</h2>
          <p className="text-base text-slate-300">
            Оставьте контакты — мы пришлём подборку сценариев для вашего бизнеса и расскажем, как адаптировать приветствие под бренд.
          </p>
          <ul className="space-y-2 text-sm text-slate-200/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
              <span>Подборка из 5 сценариев уже через пару часов</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
              <span>Индивидуальные рекомендации по тону и эмодзи</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
              <span>Без спама и лишних писем</span>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="space-y-2 text-sm">
            <span className="text-slate-200">Email</span>
            <input
              required
              name="email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-base text-slate-50 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
          </label>
          <label className="space-y-2 text-sm">
            <span className="text-slate-200">Сообщение</span>
            <textarea
              required
              name="message"
              placeholder="Расскажите, чем мы можем помочь"
              rows={4}
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-base text-slate-50 placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
          </label>
          <button
            type="submit"
            disabled={status !== "idle"}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-sky-950 transition focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" && <span>Отправляем...</span>}
            {status === "sent" && <span>Спасибо! Мы на связи.</span>}
            {status === "idle" && (
              <>
                <span>Отправить привет</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
              </>
            )}
          </button>
        </form>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Привет. Создаём тёплые цифровые встречи.
        </p>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="#features" className="transition hover:text-emerald-200">
            Возможности
          </Link>
          <Link href="#contact" className="transition hover:text-emerald-200">
            Контакты
          </Link>
          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-200"
          >
            Запуск на Vercel
          </Link>
        </div>
      </footer>
    </main>
  );
}
