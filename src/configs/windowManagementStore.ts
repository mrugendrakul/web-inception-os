import type { ActiveWindow, WindowState } from '@components/WindowManager/Types'
import { create } from 'zustand'

export interface taskbarItem {
    id: number,
    icon: string,
    name: string,
}

interface WindowMangementStore {
    activeWindows: ActiveWindow[],
    addWindow: (win: ActiveWindow) => void,
    removeWindow: (id: string) => void,
    setActiveWindow: (id: string) => void,
    setWindowState: (id: string, winState: WindowState) => void,
}

export const useWindowManagementStore = create<WindowMangementStore>((set) => ({
    activeWindows: [],
    addWindow: (win) => set(state => {
        const randomId = Math.random()*10000
        const updatedWindows: ActiveWindow[] = state.activeWindows.map(windo => ({ ...windo, active: false }))
        return { activeWindows: [...updatedWindows, { ...win,id:`${randomId}`, active: true }] }
    }),
    removeWindow:(id)=>set(state=>({
        activeWindows:state.activeWindows.filter(window=>window.id !==id)
    })),
    setActiveWindow:(id)=>set(state=>({
        activeWindows:state.activeWindows.map(win=>{
            if(win.id === id){
                return {...win,active:true}
            }
            return {...win,active:false}
        })
    })),
    setWindowState:(id,winState)=>set(state=>({
        activeWindows:state.activeWindows.map(win=>{
            if(win.id===id){
                return {...win, windowState:winState}
            }
            return win
        })
    }))
}))