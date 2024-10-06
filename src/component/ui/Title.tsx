const Title = ({ name, project }: any) => {
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-4xl font-bold text-neutral-700 uppercase">{name}</p>
      <p className="text-base text-stone-500">{project}</p>
    </div>
  );
};

export default Title;