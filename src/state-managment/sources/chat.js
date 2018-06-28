import { fromWebSocket, toWebSocket } from 'most-w3msg'

export const wsUrl = 'ws://96720b14.ngrok.io/ws'

export const conn = new WebSocket(wsUrl)

export const socketStream = fromWebSocket(conn, conn.close.bind(conn))

