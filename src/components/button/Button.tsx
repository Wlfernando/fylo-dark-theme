import './Button.css'

export default function Button({
  children,
  className = '',
  submit = false,
}: {
  children: string,
  className?: string;
  submit?: boolean;
}) {
  const btnClass = `button${className && ` ${className}`}`;

  if(submit) return <button className={btnClass}>{children}</button>

  return (
    <>
      <a className={btnClass} href="#">{children}</a>
    </>
  )
}