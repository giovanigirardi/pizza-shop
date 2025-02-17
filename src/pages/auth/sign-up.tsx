import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signUpFormSchema = z.object({
  restaurantName: z.string().min(3),
  managerName: z.string().min(3),
  phone: z.string().min(11),
  email: z.string().email(),
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>();

  async function handleSignUp(data: SignUpFormData) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Restaurante cadastrado com sucesso", {
      classNames: {
        actionButton: "!bg-green-700 !text-white",
      },
      action: {
        label: "Login",
        onClick: () => navigate("/sign-in"),
      },
    });
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button className="absolute right-8 top-8" variant="ghost" asChild>
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece as suas vendas</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="text" placeholder="Digite seu e-mail" {...register("restaurantName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" type="text" placeholder="Digite seu e-mail" {...register("managerName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" placeholder="Digite seu e-mail" {...register("phone")} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar você concorda com os nossos termos de serviço e políticas de privacidade
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
