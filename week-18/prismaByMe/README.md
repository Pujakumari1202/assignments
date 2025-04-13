## Steps to install and run prisma

# Initialize an empty Node.js project
```bash
npm init -y
```

# Add Dependencies
```bash
npm install prisma typescript ts-node @types/node --save-dev
```

## Initialize typescript
```bash
npx tsc --init
Change `rootDit` to `src`
Change `outDir` to `dist`
```

## Initialize a fresh prisma project
```bash
npx prisma init
```

## Migration of prisma file
```bash
npx prisma migrate dev
```

