import { IconType } from 'react-icons';

interface TechBadgeProps {
  icon?: IconType;
  text: string;
}

export default function TechBadge({ icon: Icon, text }: TechBadgeProps) {
  return (
    <div className="tech-badge">
      {Icon && (
        <div className="tech-badge-icon">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <span className="tech-badge-text">{text}</span>
    </div>
  );
} 