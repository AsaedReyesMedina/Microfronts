import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'components',
  exposes: {
    './Module': './src/remote-entry.ts',
    './all': './../../modules/src/index.ts',
    './solicitudes': './../../modules/src/lib/solicitudes/index.ts',
    './components': './../../modules/src/lib/components/index.ts',
  },
};
export default config;
