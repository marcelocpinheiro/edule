import Container from '../components/container'
import LoginPanel from '../components/login/login-panel'
import MainHeader from '../components/main-header/main-header'

export default function Signin() {
  return (
    <>
      <MainHeader />
      <Container>
          <div className="flex items-center justify-center h-96">
                <LoginPanel />
          </div>
      </Container>
    </>
  )
}
