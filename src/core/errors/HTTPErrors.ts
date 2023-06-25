
export interface SerializedError {
    name?: string
    message?: string
    stack?: string
    code?: string
}

export const HTTP403: SerializedError = {
    name: "403 Forbidden",
    message: "Access to resource was forbidden",
    code: "403"
}