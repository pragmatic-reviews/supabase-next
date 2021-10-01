import type { NextPage } from 'next'
import SignupForm from '../components/signup-form'

const Home: NextPage = () => {
  return (
    <div>
        <h1>
          Create an account
        </h1>
        <div>
          <SignupForm />
        </div>
    </div>
  )
}

export default Home
