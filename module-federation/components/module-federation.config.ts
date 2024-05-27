import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'components',
  library: { type: 'var', name: 'components' },
  exposes: {
    './Module': './src/remote-entry.ts',
    './solicitudes': './src/index.ts',
  },
};
export default config;
