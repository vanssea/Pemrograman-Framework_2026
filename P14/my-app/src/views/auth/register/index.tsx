import Link from "next/link";
import style from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router"

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullname = formData.get("fullname") as string;
    const password = formData.get("password") as string;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullname, password }),
    });
    // const result = await response.json();
    // console.log(result);
    if (response.status === 200) {
      form.reset();
      // event.currentTarget.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        response.status === 400 ? "User already exists" : "An error occurred",
      );
    }
  };
  
    return (
        <div className={style.register}>
            <h1 className={style.register_title}>Halaman Register</h1>
            <div className={style.register_form}>
                <form action="" onSubmit={handleSubmit}>
                    <div className={style.register_form_item}>
                        <label 
                        htmlFor="email" 
                        className={style.register_form_item_label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.register_form_item_input}
                        />
                    </div>

                    <div className={style.register_form_item}>
                        <label 
                        htmlFor="fullname" 
                        className={style.register_form_item_label}
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="Fullname"
                            className={style.register_form_item_input}
                        />
                    </div>

                    <div className={style.register_form_item}>
                        <label 
                        htmlFor="password" 
                        className={style.register_form_item_label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={style.register_form_item_input}
                        />
                    </div>

                    <button type="submit" className={style.register_form_item_button}>
                        Register
                    </button>
                </form>

                <div className={style.register_form_item_text}>
                    Sudah punya akun? <Link href="/auth/login">Ke halaman Login</Link>
                </div>
            </div>
        </div>
    );
};

export default TampilanRegister;
