import { IconProps } from './types'
import { Colors } from '../../constants/colors'

const CloseIcon = ({
  width='14px',
  height='14px',
  color=Colors.WHITE_TEXT,
  style,
  onClick,
}: IconProps) => {
  return (
    <svg width={width} height={height} onClick={onClick} style={style} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill={color} />
    </svg>
  )
}

export default CloseIcon