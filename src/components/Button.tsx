import React from 'react'
import { debounce } from 'lodash'
import { cn } from 'utils/cn'

interface IButton extends React.ComponentPropsWithoutRef<'div'> {
  onClick?: () => void
  debounceTime?: number
  className?: string
  isEffect?: boolean
  disabled?: boolean
}

export const Button: React.FC<IButton> = ({
  onClick,
  debounceTime,
  className,
  disabled,
  children,
  isEffect = true,
  ...props
}) => {
  const btnRef = React.useRef<HTMLDivElement>(null)

  const debouncedOnClick = React.useCallback(debounce(onClick ? onClick : () => { }, debounceTime), [
    onClick,
    debounceTime
  ])

  React.useEffect(() => {
    const handleEffectButton = (event) => {
      if (!disabled) {
        debouncedOnClick()
      }
      if (isEffect) {
        const btn = btnRef.current
        if (!btn) return

        const circle = document.createElement('span')
        const rect = btn.getBoundingClientRect()
        const diameter = Math.max(btn.clientWidth, btn.clientHeight)
        const radius = diameter / 2

        const offsetX = event.clientX - rect.left
        const offsetY = event.clientY - rect.top

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${offsetX - radius}px`
        circle.style.top = `${offsetY - radius}px`
        circle.classList.add('ripple')

        const ripple = btn.getElementsByClassName('ripple')[0]

        if (ripple) {
          ripple.remove()
        }

        btn.appendChild(circle)
      }
    }

    if (btnRef.current) {
      btnRef.current.addEventListener('click', handleEffectButton)
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener('click', handleEffectButton)
      }
    }
  }, [])

  return (
    <div
      {...props}
      className={cn('relative overflow-hidden disabled:opacity-50 transition-opacity duration-300', className, {
        'bg-opacity-50 cursor-pointer': disabled
      })}
      ref={btnRef}
    >
      {children}
    </div>
  )
}