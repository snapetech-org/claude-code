export * as v0_1 from "./0.1.js";
export * as v0_2 from "./0.2.js";
export * as v0_3 from "./0.3.js";
export * as v0_4 from "./0.4.js";
export * as vAny from "./any.js";
/**
 * Map of manifest versions to their strict schemas
 */
export const VERSIONED_MANIFEST_SCHEMAS: {
    "0.1": import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.1">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                python: "python";
                node: "node";
                binary: "binary";
            }>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, import("zod/v4/core").$strict>>>;
            }, import("zod/v4/core").$strict>;
        }, import("zod/v4/core").$strict>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            text: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                darwin: "darwin";
                win32: "win32";
                linux: "linux";
            }>>>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
        }, import("zod/v4/core").$strict>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                string: "string";
                number: "number";
                boolean: "boolean";
                file: "file";
                directory: "directory";
            }>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString>]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strict>>>;
    }, import("zod/v4/core").$strict>;
    "0.2": import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.2">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                python: "python";
                node: "node";
                binary: "binary";
            }>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, import("zod/v4/core").$strict>>>;
            }, import("zod/v4/core").$strict>;
        }, import("zod/v4/core").$strict>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            text: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                darwin: "darwin";
                win32: "win32";
                linux: "linux";
            }>>>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
        }, import("zod/v4/core").$strict>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                string: "string";
                number: "number";
                boolean: "boolean";
                file: "file";
                directory: "directory";
            }>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString>]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strict>>>;
    }, import("zod/v4/core").$strict>;
    "0.3": import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.3">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                python: "python";
                node: "node";
                binary: "binary";
            }>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, import("zod/v4/core").$strict>>>;
            }, import("zod/v4/core").$strict>;
        }, import("zod/v4/core").$strict>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            text: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                darwin: "darwin";
                win32: "win32";
                linux: "linux";
            }>>>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
        }, import("zod/v4/core").$strict>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                string: "string";
                number: "number";
                boolean: "boolean";
                file: "file";
                directory: "directory";
            }>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString>]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strict>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod/v4/core").$strict>;
    "0.4": import("zod").ZodObject<{
        $schema: import("zod").ZodOptional<import("zod").ZodString>;
        dxt_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        manifest_version: import("zod").ZodOptional<import("zod").ZodLiteral<"0.4">>;
        name: import("zod").ZodString;
        display_name: import("zod").ZodOptional<import("zod").ZodString>;
        version: import("zod").ZodString;
        description: import("zod").ZodString;
        long_description: import("zod").ZodOptional<import("zod").ZodString>;
        author: import("zod").ZodObject<{
            name: import("zod").ZodString;
            email: import("zod").ZodOptional<import("zod").ZodString>;
            url: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>;
        repository: import("zod").ZodOptional<import("zod").ZodObject<{
            type: import("zod").ZodString;
            url: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        homepage: import("zod").ZodOptional<import("zod").ZodString>;
        documentation: import("zod").ZodOptional<import("zod").ZodString>;
        support: import("zod").ZodOptional<import("zod").ZodString>;
        icon: import("zod").ZodOptional<import("zod").ZodString>;
        icons: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            src: import("zod").ZodString;
            size: import("zod").ZodString;
            theme: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        screenshots: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        localization: import("zod").ZodOptional<import("zod").ZodObject<{
            resources: import("zod").ZodString;
            default_locale: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>;
        server: import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                python: "python";
                node: "node";
                binary: "binary";
                uv: "uv";
            }>;
            entry_point: import("zod").ZodString;
            mcp_config: import("zod").ZodObject<{
                command: import("zod").ZodString;
                args: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
                env: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_overrides: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                    command: import("zod").ZodOptional<import("zod").ZodString>;
                    args: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>>;
                    env: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
                }, import("zod/v4/core").$strict>>>;
            }, import("zod/v4/core").$strict>;
        }, import("zod/v4/core").$strict>;
        tools: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$strict>>>;
        tools_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        prompts: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            arguments: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
            text: import("zod").ZodString;
        }, import("zod/v4/core").$strict>>>;
        prompts_generated: import("zod").ZodOptional<import("zod").ZodBoolean>;
        keywords: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        license: import("zod").ZodOptional<import("zod").ZodString>;
        privacy_policies: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString>>;
        compatibility: import("zod").ZodOptional<import("zod").ZodObject<{
            claude_desktop: import("zod").ZodOptional<import("zod").ZodString>;
            platforms: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
                darwin: "darwin";
                win32: "win32";
                linux: "linux";
            }>>>;
            runtimes: import("zod").ZodOptional<import("zod").ZodObject<{
                python: import("zod").ZodOptional<import("zod").ZodString>;
                node: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod/v4/core").$strict>>;
        }, import("zod/v4/core").$strict>>;
        user_config: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
            type: import("zod").ZodEnum<{
                string: "string";
                number: "number";
                boolean: "boolean";
                file: "file";
                directory: "directory";
            }>;
            title: import("zod").ZodString;
            description: import("zod").ZodString;
            required: import("zod").ZodOptional<import("zod").ZodBoolean>;
            default: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBoolean, import("zod").ZodArray<import("zod").ZodString>]>>;
            multiple: import("zod").ZodOptional<import("zod").ZodBoolean>;
            sensitive: import("zod").ZodOptional<import("zod").ZodBoolean>;
            min: import("zod").ZodOptional<import("zod").ZodNumber>;
            max: import("zod").ZodOptional<import("zod").ZodNumber>;
        }, import("zod/v4/core").$strict>>>;
        _meta: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>>;
    }, import("zod/v4/core").$strict>;
};
