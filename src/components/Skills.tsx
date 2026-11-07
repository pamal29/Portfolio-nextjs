import Section from "./Section";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-subtle">{group.label}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}