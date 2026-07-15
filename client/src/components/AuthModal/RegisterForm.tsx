import { useState } from "react";
import { z } from "zod";
import { useAuth } from "../../hooks/useAuth";
import { ApiError } from "../../api/axios";
import type { RegisterData } from "../../types/auth";
import { useTranslationContext } from "../../hooks/useTranslationContext";

const registerSchema = z.object({
  name: z.string().min(3, "Name contain 3 characters"),
  email: z.string().email("worng email"),
  password: z.string().min(8, "password contain 8 character"),
});

type Props = {
  onSwitch: () => void;
  onSuccess: () => void;
};

export function RegisterForm({ onSwitch, onSuccess }: Props) {
  const { register } = useAuth();
  const [form, setForm] = useState<RegisterData>({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterData, string>>>({});
  const [serverError, setServerError] = useState("");
  const [registrationLoading, setLoading] = useState(false);

  const {translationData, lang, loading:translationDataLoading} = useTranslationContext()

  const [haveAccount, login] = translationData?.registrationForm?.haveAccount[lang].split("?") ?? ["",""]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setServerError("");

    const result = registerSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as keyof RegisterData] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await register(form);
      onSuccess();
    } catch (error) {
      if (error instanceof ApiError) {
        setServerError(error.message);
      } else {
        setServerError("Something went wrong. Try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (

    <>
    {translationData && !translationDataLoading && (
      <form className="authForm" onSubmit={handleSubmit}>
      <h2>{translationData.registrationForm.register[lang]}</h2>

      <div className="authForm__field">
        <input
          type="text"
          name="name"
          placeholder={translationData.global.authPlaceholders.name[lang]}
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="fieldError">{errors.name}</span>}
      </div>

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
        {errors.password && <span className="fieldError">{errors.password}</span>}
      </div>

      {serverError && <p className="error">{serverError}</p>}

      <button type="submit" disabled={registrationLoading}>
        {registrationLoading ? `${translationData.global.authPlaceholders.registering[lang]}...` : translationData.global.buttons.createAccountBtn[lang]}
      </button>

      <p className="authForm__switch">
        {haveAccount}? <span onClick={onSwitch}>{login}</span>
      </p>
    </form>
    )
    }
    </>

    
  );
}