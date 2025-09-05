import { Colors } from '../../constants/colors'
import { IconProps } from './types'

const ArrowIcon = ({
  width = '24px',
  height = '24px',
  color = Colors.YELLOW
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 12V0H10.5V12H0L12 24L24 12H13.5Z" fill={color} />
    </svg>
  )
}

export default ArrowIcon