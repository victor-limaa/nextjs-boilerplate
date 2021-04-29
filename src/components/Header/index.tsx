import * as S from './styles'

const Header = ({ title = 'Welcome to Next.js Boilerplate!' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
