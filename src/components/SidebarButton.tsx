import { useSidebarStore } from '../store/sidebarStore';
import { Menu, PanelRightClose } from 'lucide-react';

function SidebarButton() {
  const { isOpen, onToggle } = useSidebarStore();

  return (
    <button onClick={() => onToggle()} className='cursor-pointer'>
      {
        isOpen ? <PanelRightClose /> : <Menu />
      }
    </button>
  )
}

export default SidebarButton 
