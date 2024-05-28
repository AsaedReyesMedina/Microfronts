import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'solicitudes',

  exposes: {
    './Module': './src/remote-entry.ts',
    './components': './../../modules/src/lib/solicitudes/index.ts',
  },
};

export default config;
