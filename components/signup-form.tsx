import { NextPage } from "next";
import { useRouter } from "next/router"

const SignupForm: NextPage = () => {
  const router = useRouter();

  const signup = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/api/signup", {
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { user } = await res.json();
    if (user) router.push(`/welcome?email=${user.email}`);
  };

  return (
    <form onSubmit={signup}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <label htmlFor="password">Password</label>
      
      <input
        type="password"
        id="password"
        name="password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default SignupForm