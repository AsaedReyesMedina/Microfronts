// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, MantineProvider } from '@mantine/core';
import './app.css';
export function ClientItem() {

  return (
    <>
      <div>
        client item component
      </div>
      <MantineProvider>
        <Button>client item mantine </Button>
      </MantineProvider>
    </>
  );
}

export default ClientItem;
