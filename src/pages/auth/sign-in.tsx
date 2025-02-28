import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signInFormSchema = z.object({
  email: z.string().email(),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>();

  async function handleSignIn(data: SignInFormData) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Enviamos um link de autenticação para o seu email", {
      classNames: {
        actionButton: "!bg-green-700 !text-white",
      },
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      },
    });
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" variant="ghost" asChild>
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" {...register("email")} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
