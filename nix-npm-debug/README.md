Welp. I initialized the project with step detailed in main README - `nix-shell -p nodePackages.. --run npm install @pliny/cli && pliny new .... hkailahi-dev`.

Then I initialized nix files with dream2nix and got to enabling direnv, running `nix flake show`, and running `nix develop` (maybe ran `nix build .#`?).

But I still got errors about missing modules when running `npm start` / `npx next dev` / etc... (`npm` / `npx` where aavailable in env via `dream2nix`)
* I saw `hkailahi/node_modules` was empty. Assumption is that they should have been available in env (`/nix/store/frwzbc4j77rw7c4maj7qhk6xv5fbn867-starter-blog-0.0.1/lib/node_modules/starter-blog/node_modules/`?) but either weren't or couldn't be found.

So I gave up and ran `npm install`. That worked, pulling in deps into `node_modules`. I could get a proper blog on localhost:3000.

Then I ran `nix build .#` or `nix develop` which downloaded a bunch of stuff and broke it as pictured [here](./img/npx_next_dev_error.png). There's a `useContext

The offending code is below. Maybe the dispatcher is resolving to wrong location (error #3) or something isn't available? Nixified `node_modules` vs unlinked classic `node_modules` issue? Idk
```js:
function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
```


So i guess this doesn't work and I'll have to just do it the pure `npm` way (or `node2nix`?)