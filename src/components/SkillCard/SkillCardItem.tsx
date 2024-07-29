interface Props {
    item:string;
    rating:string;
}

const SkillCardItem: React.FC<Props> = ({item,rating}:Props) => {
  
  
  return (
    <>
      <p>{item} {rating}%</p>
      <div className="w-full h-3 mb-2 border border-white rounded-md">
        <div className={`h-full border rounded-md bg-green-400`} style={{width:`${rating}%`}}></div>
      </div>
    </>
  );
};

export default SkillCardItem;
