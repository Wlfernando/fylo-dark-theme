import './BlackBoard.css'

const titleSel = 'black-board__title';

export default function({
  img: {
    img,
    alt,
  },
  titlePage,
  title,
  text,
  children,
  className = '',
  row = false,
  ref_,
}:{
  img: {img: string, alt: string};
  titlePage?: string;
  title?: string;
  text: string;
  children: React.ReactElement;
  className?: string;
  row?: boolean;
  ref_?: React.LegacyRef<HTMLElement>;
}) {  
  return (
    <>
      <section className={`black-board${className && ` ${className}`}${row ? ' black-board_row' : ''}`} ref={ref_}>
        <img className={`black-board__img`} src={img} alt={alt} />
        {titlePage ? 
          <h1 className={titleSel}>{titlePage}</h1> :
          <h2 className={titleSel}>{title}</h2>
        }
        <p className='black-board__txt'>{text}</p>
        {children}
      </section>
    </>
  )
}