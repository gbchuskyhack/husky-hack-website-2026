import { InvokeResponse } from "../utils/supabase/edgeFunction";

interface FieldErrorProps<T> {
    status: InvokeResponse<T> | null;
    fieldName: string;
}

export default function FieldError<T>({
    status,
    fieldName,
}: FieldErrorProps<T>) {
    return (<>
        {status?.error?.[fieldName] && status.error[fieldName].map((msg: string) => (
            <p className="text-sm text-red-500" key={msg}>{msg}</p>
        ))}
    </>)
}