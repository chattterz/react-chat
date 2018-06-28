import { fromWebSocket, toWebSocket } from 'most-w3msg'

export const wsUrl = 'ws://10ac6e2c.ngrok.io/ws'

export const conn = new WebSocket(wsUrl)

export const socketStream = fromWebSocket(conn, conn.close.bind(conn))
