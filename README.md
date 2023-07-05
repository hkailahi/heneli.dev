# heneli.dev

<p align="center" width="100%">
  <img src="./heneli-dot-dev/public/static/images/twitter-card.png" alt="Heap State Logo - heneli.dev" width=75% height=75%>
</p>

## Contents
- [heneli.dev](#henelidev)
  - [Contents](#contents)
  - [About](#about)
  - [Blog Discussions](#blog-discussions)
  - [Initial Setup](#initial-setup)

## About

This is my blog. Articles are written in MDX/Markdown files in `heneli-dot-dev/data/blog`. Bibliographies and research notes for each article are found in the `references` directory. Some of my posts include:

- [Fearless Tinkering is Functional](https://www.heneli.dev/blog/fearless-tinkering-is-functional)

This site is written in React + Next.js, and deployed via Vercel. Cookieless, privacy-first analytics are provided through Plausible. Comments are provided through Github Discussions and Giscus.

## Blog Discussions

Discussions are hosted in the 'Discussions' tab here on Github above this repo. Comments on blogposts can be added here or and on the posts themselves via [`giscus`](https://github.com/laymonage/giscus).

## Initial Setup

Checkout the [first PR](https://github.com/hkailahi/heneli.dev/pull/2)! These are the steps I took to initially set up this repo ([Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide) + a little [`Nix`](zero-to-nix.com)). I highly recommend creating your own blog with this template, but change up your theme so I can keep mine. 😛

1. Apply Tailwind Next.js Starter Blog template

Run lightly-modified version of [templater directions](https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide) to get Tailwind Next.js Starter Blog template.

```bash
$ nix-shell -p pkgs.nodejs-19_x
nix-shell> $ npm install @pliny/cli
nix-shell> $ ./node_modules/.bin/pliny new --template=starter-blog heneli-dot-dev
# Optional cleanup
nix-shell> $ npm uninstall @pliny/cli
nix-shell> $ rm -rf node_modules package.json package-lock.json
```

NOTE: In future attempts, figure out how to avoid raw, non-`nix` managed interactions with `npm`.


2. Nix It Up

Following https://flake.parts/getting-started.html to initialize cross-platform configuration (linux, apple silicon,  apple intel, etc)

Install npm/node via nix and let npm manage dependencies for now (migrate to fully-managed nix config like `dream2nix` later)

```bash
$ cd heneli-dot-dev
# # Paranoid check of current project contents (for understanding)
# $ exa -aThL 1 > old.txt
$ nix flake init -t github:hercules-ci/flake-parts
# # Sanity check current project contents
# $ exa -aThL 1 > new.txt && diff old.txt new.txt
# 13a14
# > ├── flake.nix
# ...
# $ rm old.txt new.txt
```

3. Add current system

```bash
# Check systems set configured in nix config
$ grep systems flake.nix | bat
───────┬──────────────────────────────────────────────────────────────────────────────────────────────────────
       │ STDIN
───────┼──────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │       systems = [ "x86_64-linux" "aarch64-darwin" ];
# Check current system and add to flake.nix if not specified above
$ nix eval --impure --raw --expr 'builtins.currentSystem' | bat
───────┬──────────────────────────────────────────────────────────────────────────────────────────────────────
       │ STDIN
───────┼──────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │ x86_64-darwin
# Manually modify flake.nix to add "x86_64-darwin" (or whatever yours is) system string
-bash-3.2$ grep systems flake.nix | bat
───────┬──────────────────────────────────────────────────────────────────────────────────────────────────────
       │ STDIN
───────┼──────────────────────────────────────────────────────────────────────────────────────────────────────
   1   │       systems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
───────┴──────────────────────────────────────────────────────────────────────────────────────────────────────
```

4.  Configure devshell

[`Devshell`]() will give us a nice developer environment

Per flake-parts devshell integration instructions at https://flake.parts/options/devshell.html#installation:

To use these options, add to your flake inputs:

```diff
inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
+   devshell.url = "github:numtide/devshell";
  };
```

and inside the mkFlake:

```diff
imports = [
+   inputs.devshell.flakeModule
];
```

Run nix flake lock and you're set
```bash
# $ exa -aThL 1 > old.txt
$ git add -A  # Needed since Nix uses Git Tree to check what to (re)build
$ nix flake lock
# $ exa -aThL 1 > new.txt && diff old.txt new.txt
# 13a14
# > ├── flake.lock
# ...
# $ rm old.txt new.txt
```

1. Configure devshell with project-local npm installation

Unlike before with `nix-shell -p`, this and other additions to the `flake.nix` will stay downloaded:

```bash
$ npm
-bash: npm: command not found
```

Add `npm` and `node` to flake config
```diff
# flake.nix
       perSystem = { config, self', inputs', pkgs, system, ... }: {
-        packages.default = pkgs.hello;
+        devshells.default = {
+          env = [
+            {
+              name = "HTTP_PORT";
+              value = 3000;
+            }
+          ];
+          packages = [
+            pkgs.nodejs-19_x
+          ];
+        };
```

```bash
$ nix flake lock
$ nix develop
# warning: Git tree '/Users/hkailahi/dev/sites/heneli.dev' is dirty
# 🔨 Welcome to devshell
#
# [general commands]
#
#   menu - prints this menu
#
(nix:devshell-env) [devshell]$ npm --v
9.5.1
```

Success!!

Follow https://github.com/timlrx/tailwind-nextjs-starter-blog#quick-start-guide start customizing!