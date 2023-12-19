import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://172.16.23.50:7030/graphql/",
  documents: ["src/GraphQL/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      // plugins: [
      //   "typescript",
      // ],
      // config:{
      //   withHooks: true,
      // }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
