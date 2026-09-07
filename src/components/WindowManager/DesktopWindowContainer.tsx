import { useWindowManagementStore } from '@configs/windowManagementStore'
import AppWindowNR from './AppWindowNR'

const DesktopWindowContainer = () => {

  const { activeWindows, setActiveWindow, setWindowState, removeWindow } = useWindowManagementStore()

  return (
    <div style={{ position: "relative" }}>
      {activeWindows.map(window => (<AppWindowNR
        key={window.id}
        title={window.name}
        isActive={window.active}
        icon={window.icon}
        onActive={() => setActiveWindow(window.id)}
        onMinimise={() => setWindowState(window.id, 'minimised')}
        onClose={() => { removeWindow(window.id) }}
        windowState={window.windowState}
      >{window.isSystem ? window.systemComponent : 
      "not system"
      }
      </AppWindowNR>))}</div>
  )
}

export default DesktopWindowContainer