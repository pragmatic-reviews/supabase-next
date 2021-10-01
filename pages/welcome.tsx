import { NextPage } from "next"
import { useRouter } from "next/router"

const Welcome: NextPage = () => {
  const router = useRouter()
  const { email } = router.query

  return (
    <div>
        <h1>
          Welcome!
        </h1>
        <p>
          Thank you for signing up. Please check your {email} inbox to verify
          your e-mail address!
        </p>
    </div>
  );
}

export default Welcome