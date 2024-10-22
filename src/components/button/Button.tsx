import './Button.css'

export default function Button({children, className = ''}: {children: string, className?: string}) {
  return (
    <>
      <a className={`button${className && ` ${className}`}`} href="#">{children}</a>
    </>
  )
}