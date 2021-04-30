import * as S from './styles'

const Header = ({
  title = 'Welcome to Next.js Boilerplate!',
  description = 'Teste descrição'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Title>{description}</S.Title>
  </S.Wrapper>
)

export default Header
