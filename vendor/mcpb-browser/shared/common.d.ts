export const McpbUserConfigValuesSchema: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>;
export const McpbSignatureInfoSchema: z.ZodObject<{
    status: z.ZodEnum<{
        signed: "signed";
        unsigned: "unsigned";
        "self-signed": "self-signed";
    }>;
    publisher: z.ZodOptional<z.ZodString>;
    issuer: z.ZodOptional<z.ZodString>;
    valid_from: z.ZodOptional<z.ZodString>;
    valid_to: z.ZodOptional<z.ZodString>;
    fingerprint: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
import { z } from "zod";

export type McpbSignatureInfo = import("zod").infer<typeof McpbSignatureInfoSchema>;
export type McpbUserConfigValues = import("zod").infer<typeof McpbUserConfigValuesSchema>;
