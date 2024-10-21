I am now completely at a loss. According to the commits, nothing has changed, so this is now a tooling problem that I don't understand.

Here's how to replicate this:

- `git clone` the repo.
- `pnpm install`
- Create yourself a postgresql database - neon will work just fine for this, as will local if you have it installed already. Grab the connection string.
- Create: `apps/cms/.env` with the following:
```
PAYLOAD_PUBLIC_SERVER_URL="http://localhost:3000/"
PAYLOAD_SECRET="123456789012345678901234"
DATABASE_URI=`your connection string goes here`
GOOGLE_ID="qwerty"
GOOGLE_SECRET="qwerty"
NEXT_PUBLIC_SERVER_URL="http://localhost:3000/"
```
- `pnpm payload migrate:create initial`

On my install, this explodes with a package subpath not existing. I think this is a tooling problem for me, and I need help to understand that.
