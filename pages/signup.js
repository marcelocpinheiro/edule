import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { loadingState } from '../components/states'
import Container from '../components/container'
import MainHeader from '../components/main-header/main-header'
import SignupPanel from '../components/signup/signup-panel'
import { handleSubmitRule } from '../rules/signup.rules'
import LoadingOverlay from '../components/loading-overlay'

export default function Signup() {

  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState(false)
  const [_, setLoading] = useRecoilState(loadingState);

  return (
    <>
      <LoadingOverlay />
      <MainHeader />
      <Container>
        <div className="flex justify-center h-auto">
          <SignupPanel errors={errors}  
          success={success}
          onSubmitHandler={value => handleSubmitRule(value, setErrors, setSuccess, setLoading )}/>
        </div>
      </Container>
    </>
  )
}
