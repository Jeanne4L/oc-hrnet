import React, { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import ChevronIcon from '../../icons/Chevron'
import TextInput from '../TextInput'
import { chevronStyle, DropdownContainer, InputContainer, OptionLi, Options } from './styles'

type DropdownProps = { 
  inputId: 'firstName' | 'lastName' | 'street' | 'city' | 'zipCode' | 'state' | 'department' | 'birthDate' | 'startDate'
  label: string
  options: string[] | null
  value?: string
  error?: string
  loading?: boolean
}

const Dropdown = ({ 
  inputId, 
  label, 
  value, 
  error, 
  loading,
  options
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { register, setValue, trigger } = useFormContext()

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
      setValue(inputId, option)
      trigger(inputId)
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
          {...register(inputId)}
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
        {loading && <OptionLi>...loading</OptionLi>}
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