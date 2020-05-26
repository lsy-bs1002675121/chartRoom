function send () {
    const PORT = 9000
    const host = 'localhost'
    const serverURL = `ws://${host}:${PORT}`
    return new WebSocket(serverURL)
}
export default send


