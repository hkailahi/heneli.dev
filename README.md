# heneli.dev

## Initial Setup

1. Apply Tailwind Next.js Starter Blog template

Run lightly-modified version of [templater directions](https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide) to get Tailwind Next.js Starter Blog template.

The following avoids `npm` global installation of `pliny` templater with temporary `node2nix` installation in `nix-shell`:

```bash
$ nix-shell -p pkgs.node2nix
nix-shell> $ node2nix -18


nix-shell> $ pnpm install @pliny/cli
nix-shell> $ pliny new --template=starter-blog hkailahi-dev
```

NOTE: See Graveyard for failed attempt with `pnpm`.

2. Nixify `hkailahi-dev`

Use `dream2nix` over of `pnpm` or `npm` directly. Per `dream2nix` [project setup example](https://nix-community.github.io/dream2nix/guides/getting-started-nodejs.html):

```bash
$ nix flake init -t github:nix-community/dream2nix#simple
$ git add flake.nix

$ nix eval --impure --raw --expr 'builtins.currentSystem' > ./nix_systems
$ git add ./nix_systems
nix run github:nix-community/dream2nix#detect-projects . > projects.toml
git add projects.toml
```

Run `nix flake show` to check flake outputs (will generate `flake.lock`).

Once everything is working, run `direnv allow`.

3. TBD

* `nix develop` into `npm start`? `pnpm`? Or will some `dream2nix` utility?

## Resources

https://nix-community.github.io/dream2nix/
https://github.com/nix-community/dream2nix

https://flake.parts/options/dream2nix.html

https://johns.codes/blog/building-typescript-node-apps-with-nix

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