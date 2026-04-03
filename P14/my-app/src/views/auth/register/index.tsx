import Link from "next/link";
import style from "./register.module.scss";

const TampilanRegister = () => {
    return (
        <div className={style.register}>
            <h1 className={style.register_title}>Halaman Register</h1>
            <div className={style.register_form}>
                <form action="">
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
