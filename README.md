# heneli.dev

## Initial Setup

1. Apply Tailwind Next.js Starter Blog template

Run lightly-modified version of [templater directions](https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide) to get Tailwind Next.js Starter Blog template.

NOTE: I tried VERY HARD to avoid an global `npm` installation of `pliny` templater but still ended up with a bunch of junk. See Graveyard for failed attempts.

```bash
$ nix-shell -p pkgs.nodejs-19_x
nix-shell> $ npm install @pliny/cli
nix-shell> $ ./node_modules/.bin/pliny new --template=starter-blog hkailahi-dev
nix-shell> $ npm uninstall @pliny/cli
nix-shell> $ rm -rf node_modules package.json package-lock.json

```

1. Nixify `hkailahi-dev`

Use `dream2nix` over of `pnpm` or `npm` directly. Per `dream2nix` [project setup example](https://nix-community.github.io/dream2nix/guides/getting-started-nodejs.html):

```bash
$ nix flake init -t github:nix-community/dream2nix#simple
$ nix eval --impure --raw --expr 'builtins.currentSystem' > ./nix_systems
$ rm -rf node_modules  # Resolve parsing issue in following command per https://github.com/nix-community/dream2nix/issues/484
$ nix run github:nix-community/dream2nix#detect-projects . > projects.toml
$ git add .
```

Run `nix flake show` to check flake outputs (will generate `flake.lock`).

Once everything is working, run `direnv allow`.

3. TBD

* `nix develop` into `npm start`? `pnpm`? Or will some `dream2nix` utility?

I guess npm install since `npx next dev` and `npx next start` can't find deps like `react` and `next-contentlayer`?
```bash
$ cd hkailahi-dev
$ npm install
```

## Resources

https://nix-community.github.io/dream2nix/
https://github.com/nix-community/dream2nix

https://flake.parts/options/dream2nix.html

https://johns.codes/blog/building-typescript-node-apps-with-nix

## Expanded

```bash
$ nix-shell -p pkgs.nodejs-19_x
nix-shell> $ npm install @pliny/cli
# nix-shell> $ exa -lhTL 1  # Show npm generated junk 
# Permissions Size User     Date Modified Name
# drwxr-xr-x     - hkailahi 29 Mar 22:19  .
# .rw-r--r--  1.1k hkailahi 29 Mar 21:57  ├── LICENSE
# drwxr-xr-x     - hkailahi 29 Mar 22:19  ├── node_modules
# .rw-r--r--  292k hkailahi 29 Mar 22:19  ├── package-lock.json
# .rw-r--r--    55 hkailahi 29 Mar 22:19  ├── package.json
# .rw-r--r--  5.0k hkailahi 29 Mar 22:15  └── README.md

nix-shell> $ ./node_modules/.bin/pliny new --template=starter-blog hkailahi-dev
# (node:40110) Warning: Mismatched version in @pliny/cli plugin manifest. Expected: 0.0.6 Received: 0.0.5
# This usually means you have an oclif.manifest.json file that should be deleted in development. This file should be automatically generated when publishing.
# (Use `node --trace-warnings ...` to show where the warning was created)
# ✔ Pick a new project's language · TypeScript
# npx create-next-app --example https://github.com/timlrx/pliny --example-path starter-blog hkailahi-dev --use-npm --ts
# Need to install the following packages:
#   create-next-app@13.2.4
# Ok to proceed? (y) y
# Creating a new Next.js app in /Users/hkailahi/dev/sites/heneli.dev/hkailahi-dev.

# Downloading files from repo https://github.com/timlrx/pliny. This might take a moment.

# Installing packages. This might take a couple of minutes.

# npm WARN ERESOLVE overriding peer dependency
# npm WARN ERESOLVE overriding peer dependency
# npm WARN ERESOLVE overriding peer dependency
# npm WARN ERESOLVE overriding peer dependency
# npm WARN ERESOLVE overriding peer dependency
# npm WARN ERESOLVE overriding peer dependency
# npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
# npm WARN deprecated formidable@1.2.6: Please upgrade to latest, formidable@v2 or formidable@v3! Check these notes: https://bit.ly/2ZEqIau
# npm WARN deprecated superagent@3.8.1: Please upgrade to v7.0.2+ of superagent.  We have fixed numerous issues with streams, form-data, attach(), filesystem errors not bubbling up (ENOENT on attach()), and all tests are now passing.  See the releases tab for more information at <https://github.com/visionmedia/superagent/releases>.
# npm WARN deprecated @opentelemetry/api-metrics@0.31.0: Please use @opentelemetry/api >= 1.3.0
# npm WARN deprecated @opentelemetry/sdk-metrics-base@0.31.0: Please use @opentelemetry/sdk-metrics

# added 1082 packages, and audited 1083 packages in 2m

# 364 packages are looking for funding
#   run `npm fund` for details

# found 0 vulnerabilities

# Success! Created hkailahi-dev at /Users/hkailahi/dev/sites/heneli.dev/hkailahi-dev

nix-shell> $ npm uninstall @pliny/cli

# removed 661 packages, and audited 1 package in 2s

# found 0 vulnerabilities
nix-shell> $ rm -rf node_modules package.json package-lock.json
# nix-shell>$ exa -lhTL 1
# Permissions Size User     Date Modified Name
# drwxr-xr-x     - hkailahi 29 Mar 22:37  .
# drwxrwxr-x     - hkailahi 29 Mar 22:31  ├── hkailahi-dev
# .rw-r--r--  1.1k hkailahi 29 Mar 21:57  ├── LICENSE
# .rw-r--r--   11k hkailahi 29 Mar 22:37  └── README.md
```

## Graveyard

<!-- 
The following avoids `npm` global installation of `pliny` templater with temporary `pnpm` installation in `nix-shell`:

```bash
$ nix-shell -p pkgs.nodePackages.pnpm
nix-shell> $ pnpm install @pliny/cli
nix-shell> $ pliny new --template=starter-blog hkailahi-dev
```

* Any need to run `pnpm` remove? `pnpm2nix` looks unmaintained - https://github.com/nix-community/pnpm2nix

NOTE: This shit failed:
```bash
[nix-shell:~/dev/sites/heneli.dev]$ pnpm install @pliny/cli

   ╭─────────────────────────────────────────────────────────────────╮
   │                                                                 │
   │                Update available! 7.29.1 → 8.1.0.                │
   │   Changelog: https://github.com/pnpm/pnpm/releases/tag/v8.1.0   │
   │                Run "pnpm add -g pnpm" to update.                │
   │                                                                 │
   │     Follow @pnpmjs for updates: https://twitter.com/pnpmjs      │
   │                                                                 │
   ╰─────────────────────────────────────────────────────────────────╯

 WARN  deprecated @oclif/screen@3.0.4: Deprecated in favor of @oclif/core
 WARN  deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
 WARN  deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
 WARN  deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
 WARN  deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
Packages: +506
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Packages are hard linked from the content-addressable store to the virtual store.
  Content-addressable store is at: /Users/hkailahi/Library/pnpm/store/v3
  Virtual store is at:             node_modules/.pnpm
Progress: resolved 505, reused 0, downloaded 505, added 506, done
node_modules/.pnpm/core-js@3.29.1/node_modules/core-js: Running postinstall script, done in 119ms
node_modules/.pnpm/yarn@1.22.19/node_modules/yarn: Running preinstall script, done in 105ms

dependencies:
+ @pliny/cli 0.0.6

 WARN  Issues with peer dependencies found
.
└─┬ @pliny/cli 0.0.6
  ├─┬ @pliny/installer 0.0.6
  │ ├─┬ jscodeshift 0.13.1
  │ │ └── ✕ missing peer @babel/preset-env@^7.1.6
  │ └─┬ ink 3.2.0
  │   └─┬ react-reconciler 0.26.2
  │     └── ✕ unmet peer react@^17.0.2: found 18.2.0 in @pliny/installer
  └─┬ ts-node 10.9.1
    ├── ✕ missing peer @types/node@"*"
    └── ✕ missing peer typescript@>=2.7
Peer dependencies that should be installed:
  @babel/preset-env@^7.1.6  @types/node@"*"           typescript@>=2.7

Done in 16.5s

[nix-shell:~/dev/sites/heneli.dev]$ pnpm remove @pliny/cli
Packages: -505
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

dependencies:
- @pliny/cli 0.0.6

Done in 702ms
```
-->

<!-- 
The following avoids `npm` global installation of `pliny` templater with temporary `node2nix` installation in `nix-shell`:

```bash
$ nix-shell -p pkgs.node2nix
nix-shell> $ node2nix -18
```

NOTE: This shit failed because there's no `node2nix install` and I don't want to figure out the `@pliny/cli` package.json spelling
-->