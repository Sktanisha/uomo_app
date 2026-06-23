const ContentCard = ({item}) => {
  return (
    <div className="flex items-center gap-4.5 pt-13.5 pb-13.75">
      <div>{item.icon}</div>
      <div>
        <h2 className="font-medium text-base text-black">{item.title}</h2>
        <p className="text-[15px] font-normal text-primary-gray mt-1">{item.description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
