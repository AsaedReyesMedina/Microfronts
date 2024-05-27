import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'components',
  library: { type: 'var', name: 'components' },
  exposes: {
    './Module': './src/remote-entry.ts',
    './solicitudes': './../../modules/src/lib/solicitudes/index.ts',
    './components': './../../modules/src/lib/components/index.ts',
  },
};
export default config;
