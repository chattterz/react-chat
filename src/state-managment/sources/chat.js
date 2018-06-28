import { fromWebSocket, toWebSocket } from 'most-w3msg'

export const wsUrl = 'ws://496ae7d6.ngrok.io/ws'

export const conn = new WebSocket(wsUrl)

export const socketStream = fromWebSocket(conn, conn.close.bind(conn))
