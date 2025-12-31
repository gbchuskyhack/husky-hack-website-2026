import { supabase } from "./client";
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

export async function invokeFunction<TRequest, TError>(
    functionName: string,
    errorSchema: z.ZodType<TError>, 
    body: TRequest
): Promise<InvokeResponse<TError>> {

    const ResponseSchema = z.object({
        message: z.string(),
        data: z.object({}).default({}),
        type: z.enum(["success", "error"]).default("error"),
        error: errorSchema,
    });

    const { data, error } = await supabase.functions.invoke(functionName, {
        body,
    });

    if (error instanceof FunctionsHttpError) {
        const errorMessage = await error.context.json();

        const result = ResponseSchema.safeParse(errorMessage);

        if (!result.success) {
            console.log("Schema mismatch on error response:", result.error);
            return {
                message: "Something went wrong. Please try again later.",
                type: "error",
                error: null,
                data: {},
            };
        }

    return {
        message: result.data.message || "Something went wrong.",
        type: "error",
        error: result.data.error, 
        data: result.data.data,
    };
    } 

    if (error instanceof FunctionsRelayError) {
        return {
            message: "Network error. Please try again later.",
            type: "error",
            error: null,
            data: {},
        };
    }

    return { ...data, type: "success" };
}
