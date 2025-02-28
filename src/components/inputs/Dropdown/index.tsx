import React, { useEffect, useRef, useState } from 'react'

import ChevronIcon from '../../icons/Chevron'
import TextInput from '../TextInput'
import { chevronStyle, DropdownContainer, InputContainer, OptionLi, Options } from './styles'

type DropdownProps = { 
  inputId: string
  label: string
  value?: string
  error: string | null
  options: string[] | null
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSelect: (option: string) => void
}

const Dropdown = ({ 
  inputId, 
  label, 
  value, 
  error, 
  options, 
  onInputChange, 
  handleSelect 
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(isOpen === false) {
      setIsOpen(true)
    }
    onInputChange(event)
  }

  const handleDropdownDisplay = (event?: React.KeyboardEvent<SVGSVGElement>) => {
    if(!event || event.key === 'Enter') {
      setIsOpen(!isOpen)
    }
  }

  const handleOptionSelect = (option: string, event?: React.KeyboardEvent<HTMLElement>) => {
    if (!event || event.key === 'Enter') {
      handleSelect(option)
      setIsOpen(false)
      chevronRef.current?.focus()
    }
  }
  
  return (
    <DropdownContainer ref={dropdownRef}>
      <InputContainer>
        <TextInput 
          inputId={inputId} 
          label={label} 
          error={error} 
          value={value} 
          onChange={handleInputChange} 
        />
        <ChevronIcon 
          ref={chevronRef}
          tabIndex={0} 
          width='48px' 
          height='42px' 
          style={chevronStyle} 
          isReturned={isOpen} 
          onKeyDown={() => handleDropdownDisplay()} 
          onClick={() => handleDropdownDisplay()} 
        />
      </InputContainer>
      <Options isOpen={isOpen}>
        {options?.map((option, index) => (
          <OptionLi 
            onClick={() => handleOptionSelect(option)} 
            onKeyDown={(e) => handleOptionSelect(option, e)} 
            key={index} 
            tabIndex={isOpen ? 0 : -1}
          >
            {option}
          </OptionLi>
        ))}
      </Options>
    </DropdownContainer>
  )
}

export default Dropdown