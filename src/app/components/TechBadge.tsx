import { IconType } from 'react-icons';

interface TechBadgeProps {
  icon?: IconType;
  text: string;
}

export default function TechBadge({ icon: Icon, text }: TechBadgeProps) {
  return (
    <div className="inline-flex items-center bg-gray-800/50 border border-gray-700 rounded-full px-4 py-1.5 text-sm text-gray-200">
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {text}
    </div>
  );
} 