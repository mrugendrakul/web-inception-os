import fileExplorer from '@assets/file-explorer.svg'
import settingIcon from '@assets/setting.svg'
import type { ReactNode } from 'react'
import SystemSetting from '../systemApps/SystemSetting/SystemSetting'

export type StoreApp={
    id:string,
    name:string,
    icon:string,
    description:string,
    endPoint?:string,
    isSystemApp:boolean,
    systemComponent?:ReactNode,
}

export const OsAppStore:Record<string,StoreApp>={
    "1":{
        id:"1",
        name:"File Explorer",
        icon:fileExplorer,
        description:"Hand Made Browser based basic file explorer",
        endPoint:"",
        isSystemApp:false,
    },
    "2":{
        id:"2",
        name:"System Setting",
        icon: settingIcon,
        description:"System Setting and some basic things",
        isSystemApp:true,
        systemComponent:SystemSetting()
    }
} as const