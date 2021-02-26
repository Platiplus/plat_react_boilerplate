import * as S from './Button.style'

export interface ButtonProps {
  /** Este botão é o botão principal da página? */
  primary?: boolean
  /** Qual cor de fundo deseja usar */
  backgroundColor?: string
  /** Qual será o tamanho do botão */
  size?: 'small' | 'medium' | 'large'
  /** Conteúdo do botão */
  label: string
  /** Uma função de clique opcional para o botão */
  onClick?: () => void
}

/** Botão simples para interação do usuário */
export const Button: React.FC<ButtonProps> = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => (
  <S.Button primary={primary} size={size} backgroundColor={backgroundColor} {...props}>
    {label}
  </S.Button>
)
