
export function getUrlQueryByParams(params: Record<string, string>) {
    return '?' + new URLSearchParams(params).toString()
}

export function getUrlByPathAndParams(path: string, params: Record<string, string>) {
    return path + getUrlQueryByParams(params)
}

// export const BACKEND_URL = `http://${window.location.hostname}:8000/`
export const BACKEND_URL = `https://proct.iitu.edu.kz/`
export const WS_HOST = `ws://${window.location.hostname}:8000/ws/`
export const RECORD_URL = `http://${window.location.hostname}:8083/`
export const WS_RECORD_HOST = `ws://${window.location.hostname}:8083/ws/`

const MICROSOFT_TENANT = '70c1157a-941c-4b39-98e6-a0634f2759e7'
export const OPENID_AUTH_URL = getUrlByPathAndParams(
    `https://login.microsoftonline.com/${MICROSOFT_TENANT}/oauth2/v2.0/authorize`,
    {
        client_id: '16a93265-c960-4a56-b2e8-f770f2bab72c',
        redirect_uri: `${BACKEND_URL}microsoft/callback/`,
        response_type: 'code',
        response_mode: 'query',
        scope: 'openid email offline_access',
    }
)

