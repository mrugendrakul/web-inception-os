import type { ReactNode } from "react"

export type WindowState = "minimised"|"maximised"

export type ActiveWindow={
    id:string,
    name:string,
    icon:string,
    active:boolean,
    windowState:WindowState,
    iframeUrl?:string,
    isSystem?:boolean,
    systemComponent:ReactNode
}