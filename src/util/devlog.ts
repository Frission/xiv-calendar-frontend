
export const devlog = (...messages: Parameters<typeof console.log>) => {
    if(process.env.NODE_ENV == "development")
    return console.log(messages)
}
