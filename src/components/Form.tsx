import { useForms } from "../hooks/useForms";
import type { FormSchema } from "../schemas/userFormSchema";

const Form = () => {
  const { register, handleSubmit, errors} = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 p-4 bg-white rounded-md border border-slate-300"
    >
      {/* Nome */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="name">Nome:</label>
        <input
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && (
          <small className="text-red-500 italic">{errors.name.message}</small>
        )}
      </div>

      {/* Sobrenome */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="lastname">Sobrenome:</label>
        <input
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="text"
          id="lastname"
          placeholder="Digite seu sobrenome"
          {...register("lastname")}
        />
        {errors.lastname && (
          <small className="text-red-500 italic">{errors.lastname.message}</small>
        )}
      </div>

      {/* Gênero */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="gender">Gênero:</label>
        <select id="gender" {...register("gender")} className="h-10 pl-1">
          <option value="" disabled selected>Selecione</option>
          <option value="mulher">Mulher</option>
          <option value="homem">Homem</option>
          <option value="nao-binario">Não binárie</option>
          <option value="transgenero">Transgênero</option>
          <option value="agenero">Agênero</option>
          <option value="prefiro-nao-dizer">Prefiro não dizer</option>
          <option value="outro">Outro (especificar)</option>
        </select>
        {errors.gender && (
          <small className="text-red-500 italic">{errors.gender.message}</small>
        )}

        
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="email">Email:</label>
        <input
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="email"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && (
          <small className="text-red-500 italic">{errors.email.message}</small>
        )}
      </div>

      {/* Senha */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="password">Senha:</label>
        <input
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && (
          <small className="text-red-500 italic">{errors.password.message}</small>
        )}
      </div>

      {/* Confirmar senha */}
      <div className="flex flex-col gap-2 mb-2">
        <label htmlFor="confirmPassword">Confirme a senha:</label>
        <input
          className="h-10 pl-2 rounded-md border border-slate-300"
          type="password"
          id="confirmPassword"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <small className="text-red-500 italic">{errors.confirmPassword.message}</small>
        )}
      </div>

      {/* Termos */}
      <div className="flex flex-row gap-2 mb-2">
        <input
          type="checkbox"
          id="agree"
          {...register("agree")}
        />
        <label htmlFor="agree">Aceite os termos</label>
        {errors.agree && (
          <small className="text-red-500 italic">{errors.agree.message}</small>
        )}
      </div>

      {/* Botão */}
      <button
        type="submit"
        className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all cursor-pointer"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
