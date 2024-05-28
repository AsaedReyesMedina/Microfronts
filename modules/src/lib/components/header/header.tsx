// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, MantineProvider } from '@mantine/core';
import './app.css';
export function Header() {
  return (
    <>
      <MantineProvider>
        <Button>Components header</Button>
      </MantineProvider>
    </>

  );
}

export default Header;
