// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, MantineProvider } from '@mantine/core';
import './app.css';
export function ClientItem() {

  return (
    <>
      <MantineProvider>
        <Button>solicitudes</Button>
      </MantineProvider>
    </>
  );
}

export default ClientItem;