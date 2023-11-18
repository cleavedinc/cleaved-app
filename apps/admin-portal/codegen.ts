import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "src/**/*.ts",
  generates: {
    "src/generated-types/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
