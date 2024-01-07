import { z } from "zod";

export const recipeSchema = z.object({
  Id: z.string().optional(),
  Name: z.string().min(3),
  Price: z.coerce
    .number()
    .min(1, "atleast 1 dollar")
    .gte(0, "Must be greater than 0"),
  ImageUrl: z.string().trim().url({ message: "Invalid URL" }),
  IsPopular: z.coerce.boolean(),
  IsRecommended: z.coerce.boolean(),
});

export type recipeSchemaType = z.infer<typeof recipeSchema>;
