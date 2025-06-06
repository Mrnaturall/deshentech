import { UserSignInSchema, UserInputSchema } from "@/lib/validator";
import z from "zod";

export type Dataa = {
  user: IUserInput[];
};
export type IUserInput = z.infer<typeof UserInputSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
