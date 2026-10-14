import { SectionHeading } from "@/components/ui/SectionHeading";

type ProcessStepsProps = {
  eyebrow: string;
  title: string;
  steps: { title: string; body: string }[];
};

export function ProcessSteps({ eyebrow, title, steps }: ProcessStepsProps) {
  return (
    <section aria-labelledby="proceso-title" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading id="proceso-title" eyebrow={eyebrow} title={title} />
        <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((step, index) => (
            <li key={step.title} className="shadow-card rounded-[var(--radius-card)] bg-white p-6 sm:p-7">
              <span className="text-sky block text-5xl leading-none font-extrabold" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="text-ink-soft mt-2 text-[0.95rem]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
