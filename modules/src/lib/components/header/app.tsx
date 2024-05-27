// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.css';
import { Chip, KuboLogoIcon, SearchIcon, Typography } from '@kds/kdsr';
import Tabs, { TabsItemsProps } from './components/tabs/tabs';
import Goal from './components/goal/goal';
export interface HeaderProps {
  title?: "Inicio" | "Solicitudes" | "Reportes";
}
export function App({ title = "Inicio" }: HeaderProps) {
  const TabsItems: TabsItemsProps[] = [
    { title: 'Inicio' },
    { title: 'solicitudes', badge: '12' },
    { title: 'Reportes' }
  ]
  return (
    <>
      <div className='pu-header-container'>
        <div className='pu-header-left-section'>
          <KuboLogoIcon />
          <Typography className='pu-title-left-section' category="title-small" >Pantalla única</Typography>
        </div>
        <div className='pu-header-tabs'>
          <Tabs TabsItems={TabsItems} />
        </div>
        <div>
          <Goal value={70} total={100} />
        </div>
      </div>
      <div className='pu-header-secundary-container'>
        <div>
          <Typography category="headline-small">{title}</Typography>
        </div>
        {
          title != "Inicio" ?
            <div className='pu-header-secundary-actions'>
              <div style={{paddingRight: "12px"}}>
                <div>
                  <Chip type="assist" size="small" id="chip-header" label="Ordenar" />
                </div>
              </div>
              <div className='pu-header-secundary-input'>
                <div>
                  <SearchIcon fill='#258026' />
                </div>
                <div>
                  <input type="text" placeholder="Buscar por ID" />
                </div>
              </div>
            </div>

            : null
        }

      </div>
    </>

  );
}

export default App;
