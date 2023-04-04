{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    devshell.url = "github:numtide/devshell";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devshell.flakeModule
      ];
      systems = [ "x86_64-linux" "aarch64-darwin" "x86_64-darwin" ];
      perSystem = { config, self', inputs', pkgs, system, ... }: {
        devshells.default = {
          env = [
            {
              name = "HTTP_PORT";
              value = 3000;
            }
          ];
          # commands = [
          #   {
          #     # From package.json/scripts:
          #     start   = "next dev";
          #     dev     = "cross-env INIT_CWD=$PWD next dev";
          #     build   = "cross-env INIT_CWD=$PWD next build && cross-env NODE_OPTIONS='--experimental-json-modules' node -r esbuild-register ./scripts/postbuild.mjs";
          #     serve   = "next start";
          #     analyze = "cross-env ANALYZE=true next build";
          #     lint    = "next lint --fix --dir pages --dir components --dir lib --dir layouts --dir scripts";
          #   }
          # ];
          packages = [
            pkgs.nodejs-19_x
          ];
        };  
      };
      flake = {

      };
    };
}
