import { useState } from "react";
import { z } from "zod";
import { useAuth } from "../../hooks/useAuth";
import { ApiError } from "../../api/axios";
import type { LoginData } from "../../types/auth";
import { useTranslationContext } from "../../hooks/useTranslationContext";





const loginSchema = z.object({
  
  email: z.string().email( "enter email" ),
  password: z.string().min(1, "enter password"),
});

type Props = {
  onSwitch: () => void;
  onSuccess: () => void;
};

export function LoginForm({ onSwitch, onSuccess }: Props) {
  const { login } = useAuth();
  const [form, setForm] = useState<LoginData>({ email: "", password: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginData, string>>>({});
  const [serverError, setServerError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const {translationData, lang, loading: translationDataLoading} = useTranslationContext()

  const [noAccount, makeAccount] = translationData?.loginForm?.noAccount[lang].split("?") ?? ["",""]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as keyof LoginData] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoginLoading(true);
    try {
      await login(form);
      onSuccess();
    } catch (err) {
      if (err instanceof ApiError) {
        setServerError(err.message);
      } else {
        setServerError("something went wrong try again later");
      }
    } finally {
      setLoginLoading(false);
    }
  };

  return (

    <>
    {translationData && !translationDataLoading && (
    <form className="authForm" onSubmit={handleSubmit}>
      <h2>{translationData.loginForm.login[lang]}</h2>

      <div className="authForm__field">
        <input
          type="email"
          name="email"
          placeholder={translationData.global.authPlaceholders.email[lang]}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="fieldError">{errors.email}</span>}
      </div>

      <div className="authForm__field">
        <input
          type="password"
          name="password"
          placeholder={translationData.global.authPlaceholders.password[lang]}
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <span className="fieldError" >{errors.password}</span>}
      </div>

      {serverError && <p className="error" >{serverError}</p>}

      <button type="submit" disabled={loginLoading}>
        {loginLoading ? `${translationData.global.authPlaceholders.logging[lang]}...` : translationData.global.buttons.loginBtn[lang]}
      </button>

      <p className="loginForm__switch">
        {noAccount}? <span onClick={onSwitch}>{makeAccount}</span>
      </p>
    </form>
  )

}
    </>
    
  );
}