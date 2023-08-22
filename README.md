1. `pnpm build; pnpm start`
2. Browse [localhost:3333](localhost:3333)
3. You should run into the following runtime error:

```
Uncaught error: de.default.div is not a function
http://localhost:3333/static/sanity-36aff67c.js:4224:40135
TypeError: de.default.div is not a function
    at http://localhost:3333/static/sanity-36aff67c.js:4224:40135
    at http://localhost:3333/static/sanity-36aff67c.js:6947:53991
```

To check whether this is a fluke:
1. `git checkout without-sanity-typed-types; pnpm build; pnpm start`
2. Browse [localhost:3333](localhost:3333)
3. You shouldn't get a runtime error
