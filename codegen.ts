import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://172.16.23.50:7030/graphql/",
  documents: ["src/GraphQL/**/*.ts","src/**/*.tsx", "src/**/*.gql"],
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
    "./generated-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
