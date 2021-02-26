import styled from 'styled-components'

export const Button = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${(props) => (props.primary ? 'white' : '#333')};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : props.primary ? '#1ea7fd' : '#transparent')};
  box-shadow: ${(props) => (props.primary ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset' : 'none')};

  font-size: ${(props) => handleSize('fontSize', props.size)};
  padding: ${(props) => handleSize('padding', props.size)};
`

// HELPER FUNCTIONS AND INTERFACES
export interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
}

const handleSize = (type: string, buttonSize?: string) => {
  if (type == 'fontSize') {
    switch (buttonSize) {
      case 'small':
        return '12px'
      case 'medium':
        return '14px'
      case 'large':
        return '16px'
      default:
        return '12px'
    }
  } else {
    switch (buttonSize) {
      case 'small':
        return '10px 16px'
      case 'medium':
        return '11px 20px'
      case 'large':
        return '12px 24px'
      default:
        return '10px 16px'
    }
  }
}
