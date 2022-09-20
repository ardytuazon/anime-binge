export default function Button({children, type='submit', className, ...props}) {
  return (
    <button
      type={type}
      className={`${className}`}
      {...props}
      >
        {children}
      </button>
  )
}