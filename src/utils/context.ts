import { createContext } from 'preact'
import { MessageState } from './types'

export interface SignalType {
    signal: string
}

// export const CategoryContext = createContext<SignalType>({ signal: '' })
export const MessageContext = createContext<MessageState>([
    '',
    () => {}
] as MessageState)
