import { Tag } from "@/components/atoms/Tag";
import { Divider } from "@/components/atoms/Divider";
import { cn } from "@/lib/utils";
import type { ExperienceItem as ExperienceItemType } from "@/types/portfolio";

interface ExperienceItemProps {
  item: ExperienceItemType;
  isLast?: boolean;
  className?: string;
}

export function ExperienceItem({ item, isLast = false, className }: ExperienceItemProps) {
  return (
    <li className={cn("py-5", className)}>
      <div className="grid grid-cols-2 gap-4 items-start">
        <div>
          <p className="text-sm font-semibold text-foreground">{item.company}</p>
          <p className="text-xs text-foreground-muted mt-0.5">{item.location}</p>
          <p className="text-xs text-foreground-muted mt-0.5">{item.period}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{item.role}</p>
          <p className="text-xs text-foreground-muted mt-1 leading-relaxed">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.skills.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </div>
      {!isLast && <Divider className="mt-5" />}
    </li>
  );
}
