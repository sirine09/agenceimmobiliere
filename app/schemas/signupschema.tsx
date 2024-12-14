import { z } from "zod";

// const signupSchema = z
//   .object({
//     nom: z
//       .string()
//       .min(1, "Le nom est requis")
//       .max(100, "Le nom est trop long"),
//     email: z
//       .string()
//       .email("L'adresse email est invalide"),
//     téléphone: z
//       .string()
//       .regex(/^\d{8}$/, "Numéro de téléphone invalide, doit comporter exactement 8 chiffres"),
   
//     password: z
//       .string()
//       .min(6, "Le mot de passe doit comporter au moins 6 caractères"),
//     confirmPassword: z
//       .string()
//       .min(6, "La confirmation du mot de passe est requise"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Les mots de passe ne correspondent pas",
//     path: ["confirmPassword"],
//   });

// export default signupSchema;


const signupSchema = z
  .object({
    nom: z.string().min(1, "Le nom est requis").max(100, "Le nom est trop long"),
    email: z.string().email("L'adresse email est invalide"),
    téléphone: z
      .string()
      .regex(/^\d{8}$/, "Numéro de téléphone invalide, doit comporter exactement 8 chiffres"),
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères"),
    confirmPassword: z.string().min(6, "La confirmation du mot de passe est requise"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export default signupSchema;