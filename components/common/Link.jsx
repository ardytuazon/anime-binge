export default function Link({children, className, ...props}) {
  return (
    <a
      href="#"
      className={`${className} small-text`}
      {...props}
      >
        {children}
      </a>
  )
}