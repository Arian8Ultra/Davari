import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://172.16.23.50:7030/graphql/",
  documents: ["./src/**/*.graphql","./src/**/*.gql","src/**/*.tsx","src/GraphQL/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config:{
        withHooks: true,
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection", "schema-ast"]
    }
  }
};

export default config;
