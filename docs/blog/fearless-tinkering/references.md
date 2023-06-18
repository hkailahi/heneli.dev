## Fearless Tinkering is Functional References

https://heneli.dev/blog/fearless-tinkering-is-functional

## Contents
- [Fearless Tinkering is Functional References](#fearless-tinkering-is-functional-references)
- [Contents](#contents)
- [Introduction](#introduction)
      - [Inline](#inline)
      - [Footnotes](#footnotes)
- [Fearless in Theory](#fearless-in-theory)
  - [Fear and Complexity](#fear-and-complexity)
      - [Inline](#inline-1)
      - [Research Stage](#research-stage)
  - [On Functional Programming](#on-functional-programming)
      - [Inline](#inline-2)
    - [Footnotes](#footnotes-1)
      - [Quoted + Paraphrased](#quoted--paraphrased)
      - [Research Stage](#research-stage-1)
  - [Ideas over Implementation Details](#ideas-over-implementation-details)
      - [Footnotes](#footnotes-2)
      - [Research Stage](#research-stage-2)
  - [Constraints Liberate](#constraints-liberate)
      - [Inline](#inline-3)
      - [Quoted + Paraphrased](#quoted--paraphrased-1)
      - [Research Stage](#research-stage-3)
- [Fearless in Practice](#fearless-in-practice)
      - [Quoted + Paraphrased](#quoted--paraphrased-2)
    - [Footnotes](#footnotes-3)
  - [Nix \& NixOS](#nix--nixos)
      - [Inline](#inline-4)
      - [Quoted + Paraphrased](#quoted--paraphrased-3)
      - [Research Stage](#research-stage-4)
    - [Road to Reproducibility](#road-to-reproducibility)
      - [Inline](#inline-5)
      - [Quoted + Paraphrased](#quoted--paraphrased-4)
      - [Research Stage](#research-stage-5)
    - [Nix: A Minimal Primer](#nix-a-minimal-primer)
      - [Inline](#inline-6)
      - [Quoted + Paraphrased](#quoted--paraphrased-5)
      - [Research Stage](#research-stage-6)
    - [Fearless Environments](#fearless-environments)
      - [Inline](#inline-7)
      - [Quoted + Paraphrased](#quoted--paraphrased-6)
      - [Research Stage](#research-stage-7)
    - [Fearless Sharing](#fearless-sharing)
      - [Inline](#inline-8)
      - [Quoted + Paraphrased](#quoted--paraphrased-7)
      - [Research Stage](#research-stage-8)
- [To Be Continued...](#to-be-continued)
      - [Inline](#inline-9)
      - [Quoted + Paraphrased](#quoted--paraphrased-8)
      - [Research Stage](#research-stage-9)


This disorderly mess is a work in progress. Right now, this is kept separate from page size and length reasons, but I might find a way to resolve this in the future (esp if can be done cheaply with interactive hovering). Maybe in a `references-data.bib` file.

Pages directly inlined in the blog are intended to validate claims or for the reader to follow-up immediately if they have further interest.

## Introduction

##### Inline
- https://blog.janestreet.com/why-ocaml/
- https://discord.com/blog/how-discord-scaled-elixir-to-5-000-000-concurrent-users
- https://blog.replit.com/nix
- https://hasura.io/blog/from-zero-to-hipster-haskell-in-production-97ea99d90c3b/
- https://www.pagerduty.com/blog/tag/elixir/
- https://mercury.com/
- https://elixir-lang.org/blog/2022/10/05/my-future-with-elixir-set-theoretic-types/
- https://blog.janestreet.com/oxidizing-ocaml-locality/
- https://haskell.foundation/projects/
- https://www.amazon.com/Production-Haskell-Succeeding-Industry/dp/B0BTNVFR2N
- https://zero-to-nix.com/
- https://pijul.org/posts/2023-05-23-nest-a-new-hope/
- https://zaid-ajaj.github.io/the-elmish-book/#/
- https://leanpub.com/fp-made-easier

##### Footnotes

- https://survey.stackoverflow.co/2022/#technology
- https://www.tiobe.com/tiobe-index/
- https://survey.stackoverflow.co/2022/#technology-most-popular-technologies
- https://survey.stackoverflow.co/2022/#worked-with-vs-want-to-work-with-language-worked-want
- https://web.archive.org/web/20201105061430/http://worrydream.com/LearnableProgramming/

## Fearless in Theory
https://heneli.dev/blog/fearless-tinkering-is-functional#fearless-in-theory

### Fear and Complexity
https://heneli.dev/blog/fearless-tinkering-is-functional#fearless-and-complexity

##### Inline
- https://en.wikipedia.org/wiki/No_Silver_Bullet
- https://github.com/papers-we-love/papers-we-love/blob/2eb8d21/design/out-of-the-tar-pit.pdf

##### Research Stage
- https://kmdouglass.github.io/posts/summary-out-of-the-tar-pit/

### On Functional Programming

##### Inline
- https://en.wikipedia.org/wiki/Fold_%28higher-order_function%29
- https://en.wikipedia.org/wiki/Software_transactional_memory

#### Footnotes
- https://twitter.com/lexi_lambda/status/1242878496076189702?s=20
> LL: currently making Haskell programmers uncomfortable on the FP slack by pointing out that all the same rigor people try to use to explain why the `State` monad is “actually pure” also applies to `IO`
>
> HC: QT: `State s a` and `IO a` are both pure values representing impure computations. readLn is referentially transparent (you can replace it with its definition) but if you write `readLn >>= \x -> ...`, you can't replace `x` with `readLn`.
>
> LL: QT: or those unsure what I’m talking about, this explanation is true. From the perspective of the host language (Haskell), `IO` and `State` are both pure. But I’m actually arguing for a different interpretation, one that seems even more unsettling: `IO` and `State` are both impure EDSLs.
>
> (Note that both interpretations are true and useful, and they are not contradictory. They are also not the only two valid interpretations.)
- https://existentialtype.wordpress.com/2011/03/16/what-is-a-functional-language/
> It should support both _computation by evaluation_ and _computation by execution_.  Evaluation is a smooth generalization of high school- and university-level mathematics, and is defined in terms of standard mathematical concepts such as tuples, functions, numbers, and so forth.  Variables are given meaning by substitution, and evaluation consists of simplifying expressions.  Execution is the action of a program on another agent or data structure conceived of as existing independently of the program itself.  The data lives “over there” and the program “over here” diddles that data.  Assignables (my word for what in imperative languges are wrongly called variables) are given meaning by get and put operations (fetch and store), not by substitution.  Execution consists of performing these operations.
- "Is Haskell a purely functional language?", http://conal.net/blog/posts/is-haskell-a-purely-functional-language
> It’s because of this confusion that I’ve started using the more specific term “denotational programming” in my blog subtitle and elsewhere, as an alternative to what I used to call “functional programming”. While there are other notions of “functional”, applicable even to monadic IO, I think “denotational” captures the fundamental and far-reaching benefits that we called “good for reasoning about” and “powerfully compositional”.
> ...
> > Nobody’s mentioned it, but isn’t this what Landin called “denotative”?
>
> Oh — I’d forgotten about Landin’s use of “denotative”. Thanks for the reminder.
>
> From section 8 of The Next 700 Programming Languages:
>
> > The commonplace expressions of arithmetic and algebra have a certain simplicity that most communications to computers lack. In particular, (a) each expression has a nesting subexpression structure, (b) each subexpression denotes something (usually a number, truth value or numerical function), (c) the thing an expression denotes, i.e., its “value”, depends only on the values of its subexpressions, not on other properties of them.
>
> > It is these properties, and crucially (c), that explains why such expressions are easier to construct and understand. Thus it is (c) that lies behind the evolutionary trend towards “bigger righthand sides” in place of strings of small, explicitly sequenced assignments and jumps. When faced with a new notation that borrows the functional appearance of everyday algebra, it is (c) that gives us a test for whether the notation is genuinely functional or merely masquerading.
>
> Then in section 9:
>
> > An important distinction is the one between indicating what behavior, step-by-step, you want the machine to perform, and merely indicating what outcome you want. Put that way, the distinction will not stand up to close investigation. I suggest that the conditions (a-c) in Section 8 are a necessary part of “merely indicating what outcome you want.” The word “denotative” seems more appropriate than nonprocedural, declarative or functional. The antithesis of denotative is “imperative.” Effectively “denotative” means “can be mapped into ISWIM without using jumping or assignment,” given appropriate primitives.
> I think Landin does indeed mean what I mean. I’m uncertain, as his conditions (b) & (c) say that subexpressions “denote something”, but he doesn’t say that the something must be explicitly defined. One could say that Haskell IO expressions “denote something” but we don’t quite know what, but then how could we test the claim for validity? What I mean by “denotational programming” requires well-defined, precise and tractable denotations. Those denotations then serve as the basis for implementation correctness, documentation, and formal reasoning.
>
> If I knew that Landin did indeed mean having a precise & tractable denotation, I’d happily adopt his “denotative” in place of my “denotational”. Hm.
- "Can functional programming be liberated from the von Neumann paradigm?", http://conal.net/blog/posts/can-functional-programming-be-liberated-from-the-von-neumann-paradigm

##### Quoted + Paraphrased
- https://github.com/agentm/project-m36/blob/master/docs/reaching_out_of_the_tarpit.markdown
> "According to the paper, the ideal language would minimize mutable state (such as in functional programming) and eliminate unintended order-of-execution by providing declarative instead of imperative constructs"
- https://twitter.com/GabriellaG439/status/1520111092688560128
> Purely functional programming, or as I like to call it: what you see is what you get

##### Research Stage
- https://old.reddit.com/r/CategoryTheory/comments/zr3rv0/immutability_is_overrated_or_is_it/j11uabk/?context=3
> Immutability isn't really the goal; referential transparency is. The idea is that I can always replace f(x, y) with x + y or vice versa, replace x + y with f(x, y). There is no distinction between the name and the body of the function.
>
> But this isn't true when statefulness is around. If I have g(x) { global += x; return global; }, I now need to be very careful about how I reason. For example, given h(x) = x + x, what is the result of h(g(5))? Do I expand h first and get g(5) + g(5)? Or do I run g(5) first and then double its answer via h? These give vastly different answers, and make my job as a programmer much harder because now I need to run a simulation of the machine's semantics in my head to have any chance of writing code properly the first time around.
- https://iagoleal.com/posts/recursion-schemes/
- "Functional Programming is Terrible", https://www.youtube.com/watch?v=hzf3hTUKk8U&t=1390s
> Compositionality is the property that your software can be understood as a whole by understanding it's parts and rules governing it's composition.

### Ideas over Implementation Details

##### Footnotes
- http://comonad.com/reader/2014/letter-to-a-young-haskell-enthusiast/
- https://en.wikipedia.org/wiki/Streetlight_effect
- Dan Bentley on Build Systems a la Carte [PWL NYC], https://www.youtube.com/watch?v=NMuKo_Y7w3A&t=1475s
> There's a drunk guy whose on his hands and knees under a lamp post, and a guy comes up and says:
> "Oh what are you doing?"
> Drunk: "I'm looking for my keys!"
> "Oh I'll help you out. Did you lose them around here?"
> Drunk: "No, I lost them over there. But here's where the light is."
##### Research Stage
- John Backus’ 1977 Turing Award Lecture, “Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs”
> Conventional programming languages are growing ever more enormous, but not stronger. Inherent defects at the most basic level cause them to be both fat and weak: their primitive word-at-a-time style of programming inherited from their common ancestor--the von Neumann computer, their close coupling of semantics to state transitions, their division of programming into a world of expressions and a world of statements, their inability to effectively use powerful combining forms for building new programs from existing ones, and their lack of useful mathematical properties for reasoning about programs.
- https://jelv.is/blog/Haskell-Monads-and-Purity/#why
> This system **separates evaluation and execution**: calculating a value and performing an action are now different. Haskell does not have a hard notion of “now” strung throughout the code, because the order of evaluation does not have visible effects. We’re no longer constrained in writing our definitions in the order they need to be evaluated; instead, we’re free to organize our code, even at a very local level, based on how we want it to be read. This extra notion of “now” and an environment that changes over time (ie mutable state) is not necessary in most code; getting rid of it limits cognitive load.
>
> In essence, we move evaluation below our level of abstraction. Instead of being an omnipresent facet of every line we write, evaluation now happens largely in the background.
- https://leebriggs.co.uk/blog/2022/07/20/nobody-knows-what-declarative-is
- "YOW! Lambda Jam 2016 George Wilson - When Less is More and More is Less: Trade-Offs in Algebra", https://www.youtube.com/watch?v=VXl0EEd8IcU
- LambdaConf 2015 - The Abstract Method, In General Gershom Bazerman, https://www.youtube.com/watch?v=MKog0cd4rJI&t=7s

### Constraints Liberate
##### Inline
- https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
- https://kowainik.github.io/posts/haskell-mini-patterns#phantom-type-parameters

##### Quoted + Paraphrased
- Constraints liberate, Liberties constrain, https://youtu.be/GqmsQeSzMdw
> "Freedom at one level leads to restriction at another. A constraint at one level leads to freedom and power at another level."

##### Research Stage
- https://celery1124.github.io/memory-consistence-and-memory-order/
- https://blog.developer.atlassian.com/programming-with-algebra/
- https://iagoleal.com/posts/algebraic-path/

## Fearless in Practice
https://www.heneli.dev/blog/fearless-tinkering-is-functional#fearless-in-practice

##### Quoted + Paraphrased
- Platform as a Reflection of Values, https://vimeo.com/230142234
> Beyond the right tool for the job, it is the right values for the job… and then the right software for the values.

#### Footnotes
- https://github.com/NorfairKing/haskell-WAT

### Nix & NixOS
##### Inline
##### Quoted + Paraphrased
- https://twitter.com/mycoliza/status/1573415208076582912?s=46&t=FGNKzjqbM_RreiOZSIPCYA
> “it’s not a package manager, it’s a declarative, purely functional language for describing a reproducible system configuration.”
>
> “okay, it’s not a package manager. so how do i install a package?”
>
> “you write a Nix expression that describes a system with that package installed.”
##### Research Stage
- https://www.youtube.com/watch?v=2L2qHfNnXB4

#### Road to Reproducibility
##### Inline
- Sandboxing and Workload Isolation, https://fly.io/blog/sandboxing-and-workload-isolation/
- Malicious Compliance: Reflections on Trusting Container... - Coldwater, Cooley, Geesaman, McCune, https://www.youtube.com/watch?v=9weGi0csBZM
- Deploying NixOS using Terraform, https://nix.dev/tutorials/nixos/build-and-deploy/deploying-nixos-using-terraform
- Nix and Containers: why not both?, https://floxdev.com/blog/flox-and-containers

##### Quoted + Paraphrased
- Matthew Croughan - Use flake.nix, not Dockerfile - MCH2022, https://www.youtube.com/watch?v=0uixRE8xlbY
##### Research Stage
- https://leebriggs.co.uk/blog/2022/07/20/nobody-knows-what-declarative-is
- https://blog.container-solutions.com/is-it-imperative-to-be-declarative
- The Container Revolution: Reflections After the First Decade, https://youtu.be/xXWaECk9XqM
> “Docker allows us as developers to think operationally in the software we deploy. We generate what are effectively static binaries called a container, and can now run in production the same thing that we’re running on our laptops”
- https://mitchellh.com/writing/nix-with-dockerfiles
- https://www.pulumi.com/what-is/what-is-infrastructure-as-code/
- https://blog.netwrix.com/2022/06/30/what-is-configuration-drift/
- https://coder.com/blog/what-is-configuration-drift
- https://nimbleindustries.io/2020/01/31/dependency-drift-a-metric-for-software-aging/
- https://libyear.com/
- https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform
- https://grahamc.com/blog/nix-and-layered-docker-images/
- https://lewo.abesis.fr/posts/nix-build-container-image/
- https://news.ycombinator.com/item?id=35690349
> Once you build a docker image, you can distribute that artifact reliably. But building docker images is highly error prone, at the mercy of non-determinism, various failure modes of package managers, and mutable state from web servers you don't control. In practice, you can't depend on it working without active maintenance and disciplined usage.
>
> With Nix, if it built once, it will build again, consistently and deterministically. It reduces fear of changing things because it just works. You don't have to cross your fingers and hope the build succeeds this time.”
- https://twitter.com/gabriellag439/status/1408181256160903170?s=46&t=FGNKzjqbM_RreiOZSIPCYA
- https://grahamc.com/blog/erase-your-darlings/


#### Nix: A Minimal Primer
##### Inline
- https://zero-to-nix.com/concepts/derivations
- https://books.google.ca/books?id=gP2kAAAACAAJ
- https://reproducible-builds.org/docs/definition/
- https://www.microsoft.com/en-us/research/uploads/prod/2018/03/build-systems.pdf
- [The Topological and Logical Structure of Concurrency and Dependency via Distributive Lattices](https://arxiv.org/abs/2004.05688)
##### Quoted + Paraphrased
- https://www.seas.upenn.edu/~cis1940/fall16/lectures/06-io-and-monads.html
> What do you have? A cake? No, you have some instructions for how to make a cake, just a sheet of paper with some writing on it.
>
> Not only do you not actually have a cake, merely being in possession of the recipe has no effect on anything else whatsoever. Simply holding the recipe in your hand does not cause your oven to get hot or flour to be spilled all over your floor or anything of that sort. To actually produce a cake, the recipe must be followed (causing flour to be spilled, ingredients mixed, the oven to get hot, etc.).

##### Research Stage
- https://twitter.com/dfacastro/status/939129108369432577?s=46&t=FGNKzjqbM_RreiOZSIPCYA
> There's a subtle but important diff between executing side effects and working with models of effects. E.g it's safe to refactor `[readLn, readLn]` to `x = readLn; [x, x]`, because IO is referentially transparent. `readLn` is just another object.
-  Content-addressed distributed data structures [SpeakeasyJS], https://www.youtube.com/watch?v=VtzpJU4Cns8
- content addressed derivations - NixCon, https://www.youtube.com/watch?v=Zl6JBaoGtDc
- Gabriella Gonzalez, "How to Write a Nix Derivation", https://www.youtube.com/watch?v=bbW6kgB5F2M&
- Nix × IPFS, https://www.youtube.com/watch?v=fFeDYIM_OAo
- Functional programming and Nix - Brian McKenna, https://youtu.be/RtqWE5lgaCg
- An Invitation to Order-Theoretic Models of Package Dependencies - Gershom Bazerman | PackagingCon, https://youtu.be/ssgq26w4nFs
- Gershom Bazerman: Idempotent Distributive Lattice Completion, https://www.youtube.com/watch?v=IqlpQ06wuSE&t=17s
- The Semantics of Package Management via Event Structures, https://arxiv.org/abs/2107.01542
- A Mathematical Model of Package Management Systems -- from General Event Structures to Antimatroids, https://arxiv.org/abs/2302.05417

#### Fearless Environments
##### Inline
##### Quoted + Paraphrased
- "Building Haskell Programs with Fused Effects" by Patrick Thomson, https://www.youtube.com/watch?t=145&v=vfDazZfxlNs&feature=youtu.be
> The <u>world</u> is all that is the case. A <u>computation</u> is any action taken by a programmable device. An <u>environment</u> is the set of all past and present worlds that a computation can observe. An <u>effect</u> is a computation that depends on or changes the program’s environment. We run programs to produce effects in the world around us.
- Purely Functional Configuration Management with Nix and NixOS, Eelco Dolstra
> Nix ensures a transactional semantics: builds can always safely be interrupted, restarted, or run in parallel.
##### Research Stage
- https://nixos.org/manual/nix/unstable/package-management/profiles.html
- https://twitter.com/SusanPotter/status/1617723312993603584
- https://zero-to-nix.com/concepts/provenance
- The Secure Supply Chain, https://www.youtube.com/watch?v=JC-xCXcyNXI

#### Fearless Sharing
##### Inline
- https://www.microsoft.com/en-us/research/uploads/prod/2018/03/build-systems.pdf
- https://grahamc.com/blog/nix-and-layered-docker-images/
- https://nix-bazel.build/
- https://zero-to-nix.com/concepts/hermeticity
##### Quoted + Paraphrased
- "From Nix to Docker - Everything You Need to Know About Polygot Package Management", https://youtu.be/onBQhwuPOAc?t=231
##### Research Stage

## To Be Continued...
##### Inline
##### Quoted + Paraphrased
##### Research Stage
