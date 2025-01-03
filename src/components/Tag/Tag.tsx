type TagProps = {
  variant?: 'primary' | 'gray';
  title: string;
};

export default function Tag({ variant = 'primary', title }: TagProps) {
  return (
    <span
      className={`${
        variant === 'primary' ? 'bg-cream text-primary' : 'text-gray bg-gray-300'
      } rounded-md px-md py-xs text-sm font-semibold`}
    >
      {title}
    </span>
  );
}
