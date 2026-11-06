# MCPB browser compatibility library

This private, browser-only fork retains the MIT-licensed browser modules from
`@anthropic-ai/mcpb` 2.1.2 and runs them against patched Zod 4.6.6 or newer.
The upstream package still requires vulnerable Zod 3. No CLI, archive, signing,
Node-only, or interactive dependencies are included. All four manifest versions
(0.1–0.4), configuration interpolation, and browser exports remain available.

Runtime JavaScript follows the published upstream browser modules. The config
helper additionally treats placeholder names and replacement values literally,
and its array-context warning omits configuration values. Provenance records
both original and current hashes for that focused change.
Schema declarations are regenerated against Zod 4 with TypeScript 5.9.3; public
type-only aliases are retained. Keep LICENSE with these files.

Upstream npm archive SHA-256: `81174993380eb930bcacecc890b1acfdb06cf336366e445404aea36467417cc1`.

To refresh, verify the upstream archive, copy its browser dependency closure,
regenerate schema and shared/common declarations with `tsc --allowJs
--declaration --emitDeclarationOnly --skipLibCheck --module NodeNext
--moduleResolution NodeNext --target ES2022`, and retain public type aliases.
Run manifest/configuration compatibility tests, application typecheck/build, and
the dependency audit before accepting a refresh. Remove this fork when upstream
supports the patched validator with equivalent compatibility.
