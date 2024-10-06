type Props = {
  icon: any;
  title: string;
  className: string;
  classTitle?: string;
  classImg?: string;
};

export const ButtonWithIcon = ({
  title,
  className,
  icon,
  classTitle,
}: Props) => {
  return (
    <button className={className}>
      <div className={classTitle}>{title}</div>
      {icon}
    </button>
  );
};

