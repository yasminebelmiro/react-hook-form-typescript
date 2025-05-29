import { z } from "zod";

//schema de validação do formulario
export const formSchema = z
  .object({
    name: z
      .string()

      .min(3, "O número mínimo de caracteres é 3."),
    lastname: z
      .string()

      .min(3, "O número mínimo de caracteres é 3."),
    gender: z
      .string()
      .refine((field) => field !== "select", { message: "Escolha um genêro." }),
    email: z
      .string()
      .min(1, "Campo obrigatótio.")
      .email("Use um email válido."),
    password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confimrPassword: z
      .string()
      .min(6, "A confirmação precisa ter no mínimo 6 caracteres"),
    agree: z.boolean().refine((filed) => filed === true, {
      message: "você precisa concordar com os termos.",
    }),
  })
  .refine((filed) => filed.password === filed.confimrPassword, {
    message: "As senha devem ser identicas",
    path: ["confirmpassword"]
  });

  //tipando formulário
  export type FormSchema = z.infer<typeof formSchema>
