// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ButtonIcon, ChevronLeftIcon, UserAvatarIcon } from '@kds/kdsr';
import './app.css';
import ClientItem, { ClientItemListProps } from './components/ClientItem';



export function App() {
  const clientItems: ClientItemListProps[] = [
    { label: "Nombre", content: "Asaed Reyes Medina" },
    { label: "Fecha y hora de solicitud", content: "2021-09-30 12:00:00" },
    { label: "No. de solicitud", content: "83757" },
    { label: "No. de prospecto", content: "86475" },
    { label: "Monto solicitado", content: "$ 100,000" },
    { label: "Tipo de crédito", content: "ADD" },
    { label: "Descripción del crédito", content: "Crédito Adicional" },
    { label: "Etapa/ sub-etapa", content: "Solicitud / Identificación oficial" },
  ]
  return (
    <div className='pu-client-item-container'>
      <ButtonIcon variant="outline" Icon={<ChevronLeftIcon />} />
      <UserAvatarIcon fill='#000' />
      <ClientItem clientItems={clientItems} />
    </div>
  );
}

export default App;
