// import { supabase } from "./client";
import {
    FunctionsHttpError,
    FunctionsRelayError,
} from "@supabase/supabase-js";
import { z } from "zod";

export type InvokeResponse<TError> = {
    message: string;
    type: "success" | "error";
    data: Record<string, any>;
    error: TError | null;
};

export function validateRequest<T>(
    schema: z.ZodType<T>,
    data: unknown
): InvokeResponse<z.inferFlattenedErrors<typeof schema>["fieldErrors"]> | null {
    const result = schema.safeParse(data);

    if (!result.success) {
        return {
            message: "Something went wrong. Please try again.",
            data: {},
            type: "error",
            error: result.error.flatten().fieldErrors,
        };
    }

    return null;
}
