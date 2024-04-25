import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://fearless-service.onrender.com/graphql',
  documents: ['src/core/graphql/schema/*.graphql'],
  generates: {
    'src/core/graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        scalars: {
          DateTime: 'Date',
        },
      },
    },
  },
};

export default config;
