import type { ReactNode } from 'react'
import './TaskMenu.css'
import { OsAppStore } from '@configs/osAppStore'
import { useWindowManagementStore } from '@configs/windowManagementStore'

type TaskMenuProps = {
    onClose: () => void
}

const TaskMenu = ({ onClose }: TaskMenuProps): ReactNode => {
    const AppsArray = Object.entries(OsAppStore)
    const { addWindow } = useWindowManagementStore()
    return (
        <>
            <div
                id="task-menu-div"
            >
                <div id='task-menu'>
                    <div
                        id='task-menu-grid'>
                        {AppsArray.map(([id, app]) => {
                            return <button
                                key={id}
                                className='menu-button'
                                onClick={() => {
                                    onClose()
                                    addWindow({
                                        id: id,
                                        name: app.name,
                                        icon: app.icon,
                                        iframeUrl: app.endPoint,
                                        active: true,
                                        windowState: 'maximised'
                                    })
                                }
                                }
                            >
                                <img className="menu-btn-img" src={app.icon} />
                                {app.name}
                            </button>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskMenu