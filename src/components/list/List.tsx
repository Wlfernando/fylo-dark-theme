import './List.css'

export default function List({
  name = '',
  children,
}: {
  children: React.ReactElement[];
  name: string;
}) {
  return (
    <>
      <section className={name}>
        <ul className={`list ${name}__list`}>{children}</ul>
      </section>
    </>
  )
}