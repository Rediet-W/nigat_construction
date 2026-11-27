import { SectionTitle } from "@/components/ui/SectionTitle";
import { getDictionary } from "@/i18n/server";
import { wowDelay } from "@/lib/animation";

/** "How we work": Consult → Plan & quote → Build & hand over. */
export async function ProcessSteps() {
  const t = (await getDictionary()).process;
  return (
    <div className="process-steps light-section">
      <div className="container">
        <SectionTitle subtitle={t.subtitle} title={t.title} center />
        <ol className="process-step-list">
          {t.steps.map((step, index) => (
            <li key={step.title} className="process-step wow fadeInUp" data-wow-delay={wowDelay(index)}>
              <span className="process-step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
