// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, MantineProvider } from '@mantine/core';
import './app.css';
export function Header() {
  return (
    <>
      <div>
        Header component
      </div>
      <MantineProvider>
        <Button>header mantine </Button>
      </MantineProvider>
    </>

  );
}

export default Header;
