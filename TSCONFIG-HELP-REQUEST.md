# What is all this?
I'm trying to make a clonable skeleton monrepo for Payload 3.0 (beta) CMS with a separate Next.js frontend, packages for the UI elements, and some testing framework.

I followed the advice from turborepo, and have a package for tsconfig.json which other packages/apps can extend. Payload, notably, has an entirely separate one.

The apps are Payload (in /apps/cms) and an unstarted frontend (in /apps/nextjs). The

# Whats the problem?
app/cms/src/payload.config.ts, line 194 has a problem:
```
Type 'typeof sharp' is not assignable to type 'SharpDependency'.
  Types of parameters 'options' and 'input' are incompatible.
    Type 'string | ArrayBuffer | Buffer | Float32Array | Float64Array | Int8Array | Int16Array | Int32Array | ... 4 more ... | undefined' is not assignable to type 'SharpOptions | undefined'.
      Type 'string' has no properties in common with type 'SharpOptions'.
```

I am the only one having this issue. Nobody on the Payload Discord has this problem.

I *suspect* that the problem is that I've caused some kind of issue with the tsconfig inheritance stuff that I don't understand. I suspect this, because I have never touched it before. Or monorepos. Or turborepo. In fact, this is my first actual typescript project, while I'm learning things. I'm not new to programming, but I'm new to typescript.

I don't want to just blindly start changing tsconfig options and hope, because I don't know what knock-on effects it'll have. I also don't know if that's actually the problem.

# Why do I think that it's something I've done?
If I create a new Payload project with `npx create-payload-app@beta --use-pnpm`, choosing the website template and postgres adapter, then go look at the payload.config.ts file, I don't get the error. It's the same file.
