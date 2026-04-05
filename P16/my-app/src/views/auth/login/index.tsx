import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const [error, setError] = useState("");
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    // const form = event.currentTarget;
    // }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      // console.log("signIn response:", res);
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <>
      <div className={style.login}>
        {error && <p className={style.login_form_error}>{error}</p>}
        <h1 className={style.login_title}>Halaman Login</h1>
        <div className={style.login_form}>
          <form action="" onSubmit={handleSubmit}>
            <div className={style.login_form_item}>
              <label htmlFor="email" className={style.login_form_item_label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={style.login_form_item_input}
                required
              />
            </div>

            <div className={style.login_form_item}>
              <label htmlFor="password" className={style.login_form_item_label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className={style.login_form_item_input}
                required
                minLength={6}
              />
            </div>
            <button type="submit" className={style.login_form_item_button} disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
            <br /> <br />
            <button
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className={style.login_form_item_button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "sign in with google"}
            </button>
          </form>

          <div className={style.login_form_item_text}>
            Sudah punya akun? <Link href="/auth/register">Ke halaman Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TampilanLogin;