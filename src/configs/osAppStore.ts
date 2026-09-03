import fileExplorer from '@assets/file-explorer.svg'
import viteIcon from '@assets/favicon.svg'

export type StoreApp={
    id:string,
    name:string,
    icon:string,
    description:string,
    endPoint:string
}

export const OsAppStore:Record<string,StoreApp>={
    "1":{
        id:"1",
        name:"File Explorer",
        icon:fileExplorer,
        description:"Hand Made Browser based basic file explorer",
        endPoint:""
    },
    "2":{
        id:"2",
        name:"Vite something",
        icon:viteIcon,
        description:"Somthign related to vite",
        endPoint:""
    }
} as const