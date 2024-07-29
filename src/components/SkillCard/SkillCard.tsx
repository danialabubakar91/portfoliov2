import {ReactNode} from 'react'

interface Props {
    title:string;
    children:ReactNode;
    containerStyle:string;
    headerStyle?:string;
}

const SkillCard: React.FC<Props> = ({title, children, containerStyle, headerStyle='mb-3 font-semibold'}:Props) => {
  return (
    <div className={containerStyle}>
        <h1 className={headerStyle}>{title}</h1>
        {children}
    </div>
  );
};

export default SkillCard;
