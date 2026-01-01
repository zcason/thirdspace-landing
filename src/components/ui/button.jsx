
import React from 'react'
export const Button = React.forwardRef(function Button({ className = "", as: As = 'button', ...props }, ref){
  return <As ref={ref} className={"inline-flex items-center justify-center rounded-md px-3 py-2 bg-white/10 hover:bg-white/20 " + className} {...props} />
})
export default Button
