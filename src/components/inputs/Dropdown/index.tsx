import React, { useEffect, useRef, useState } from 'react'

import ChevronIcon from '../../icons/Chevron'
import TextInput from '../TextInput'
import { chevronStyle, DropdownContainer, InputContainer, OptionLi, Options } from './styles'

type DropdownProps = { 
  label: string
  options: string[] | null
  error?: string
  loading?: boolean
  id: string
  onChange: (option: string) => void
  value: string
}

const Dropdown = ({ 
  label,
  error, 
  loading,
  options,
  id,
  onChange,
  value
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const chevronRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleDropdownDisplay = (event: React.KeyboardEvent<SVGSVGElement>) => {
    if(event.key === 'Enter') {
      setIsOpen(!isOpen)
    }
  }

  const handleOptionSelect = (option: string, event?: React.KeyboardEvent<HTMLElement>) => {
    if (!event || event.key === 'Enter') {
      onChange(option)
      setIsOpen(false)
      chevronRef.current?.focus()
    }
  }
  
  return (
    <DropdownContainer ref={dropdownRef}>
      <InputContainer>
        <TextInput 
          label={label} 
          error={error} 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          id={id}
        />
        <ChevronIcon 
          ref={chevronRef}
          tabIndex={0} 
          width='48px' 
          height='42px' 
          style={chevronStyle} 
          isReturned={isOpen} 
          onKeyDown={(event) => handleDropdownDisplay(event)} 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </InputContainer>
      <Options isOpen={isOpen}>
        {loading && <OptionLi isNotClickable>...loading</OptionLi>}
        {options?.length ? (
          options.map((option, index) => (
            <OptionLi 
              onClick={() => handleOptionSelect(option)} 
              onKeyDown={(e) => handleOptionSelect(option, e)} 
              key={index} 
              tabIndex={isOpen ? 0 : -1}
            >
              {option}
            </OptionLi>
          ))
        ) : (
          <OptionLi isNotClickable>No result</OptionLi>
        )}
      </Options>
    </DropdownContainer>
  )
}

export default Dropdown