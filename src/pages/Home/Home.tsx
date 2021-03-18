import * as S from './Home.style'
import Platy from 'assets/images/platy.png'

export const Home: React.FC = () => (
  <S.Wrapper>
    <S.Logo src={Platy} />
    <S.Title>BOILERPLATE</S.Title>
  </S.Wrapper>
)

export default Home
