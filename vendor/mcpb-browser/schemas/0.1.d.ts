export const MANIFEST_VERSION: "0.1";
export const McpServerConfigSchema: z.ZodObject<{
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString>>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strict>;
export const McpbManifestAuthorSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export const McpbManifestRepositorySchema: z.ZodObject<{
    type: z.ZodString;
    url: z.ZodString;
}, z.core.$strict>;
export const McpbManifestPlatformOverrideSchema: z.ZodObject<{
    command: z.ZodOptional<z.ZodString>;
    args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
}, z.core.$strict>;
export const McpbManifestMcpConfigSchema: z.ZodObject<{
    command: z.ZodString;
    args: z.ZodOptional<z.ZodArray<z.ZodString>>;
    env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        command: z.ZodOptional<z.ZodString>;
        args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
        env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export const McpbManifestServerSchema: z.ZodObject<{
    type: z.ZodEnum<{
        python: "python";
        node: "node";
        binary: "binary";
    }>;
    entry_point: z.ZodString;
    mcp_config: z.ZodObject<{
        command: z.ZodString;
        args: z.ZodOptional<z.ZodArray<z.ZodString>>;
        env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            command: z.ZodOptional<z.ZodString>;
            args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
            env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export const McpbManifestCompatibilitySchema: z.ZodObject<{
    claude_desktop: z.ZodOptional<z.ZodString>;
    platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        darwin: "darwin";
        win32: "win32";
        linux: "linux";
    }>>>;
    runtimes: z.ZodOptional<z.ZodObject<{
        python: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export const McpbManifestToolSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export const McpbManifestPromptSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    arguments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    text: z.ZodString;
}, z.core.$strict>;
export const McpbUserConfigurationOptionSchema: z.ZodObject<{
    type: z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        file: "file";
        directory: "directory";
    }>;
    title: z.ZodString;
    description: z.ZodString;
    required: z.ZodOptional<z.ZodBoolean>;
    default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>;
    multiple: z.ZodOptional<z.ZodBoolean>;
    sensitive: z.ZodOptional<z.ZodBoolean>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export const McpbManifestSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    dxt_version: z.ZodOptional<z.ZodLiteral<"0.1">>;
    manifest_version: z.ZodOptional<z.ZodLiteral<"0.1">>;
    name: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
    description: z.ZodString;
    long_description: z.ZodOptional<z.ZodString>;
    author: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    repository: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        url: z.ZodString;
    }, z.core.$strict>>;
    homepage: z.ZodOptional<z.ZodString>;
    documentation: z.ZodOptional<z.ZodString>;
    support: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodString>>;
    server: z.ZodObject<{
        type: z.ZodEnum<{
            python: "python";
            node: "node";
            binary: "binary";
        }>;
        entry_point: z.ZodString;
        mcp_config: z.ZodObject<{
            command: z.ZodString;
            args: z.ZodOptional<z.ZodArray<z.ZodString>>;
            env: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            platform_overrides: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                command: z.ZodOptional<z.ZodString>;
                args: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
                env: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>>;
            }, z.core.$strict>>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>>;
    tools_generated: z.ZodOptional<z.ZodBoolean>;
    prompts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        arguments: z.ZodOptional<z.ZodArray<z.ZodString>>;
        text: z.ZodString;
    }, z.core.$strict>>>;
    prompts_generated: z.ZodOptional<z.ZodBoolean>;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString>>;
    license: z.ZodOptional<z.ZodString>;
    compatibility: z.ZodOptional<z.ZodObject<{
        claude_desktop: z.ZodOptional<z.ZodString>;
        platforms: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            darwin: "darwin";
            win32: "win32";
            linux: "linux";
        }>>>;
        runtimes: z.ZodOptional<z.ZodObject<{
            python: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    user_config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodEnum<{
            string: "string";
            number: "number";
            boolean: "boolean";
            file: "file";
            directory: "directory";
        }>;
        title: z.ZodString;
        description: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        default: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>;
        multiple: z.ZodOptional<z.ZodBoolean>;
        sensitive: z.ZodOptional<z.ZodBoolean>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
import * as z from "zod";
