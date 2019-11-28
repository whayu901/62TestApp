import { useEffect, useState, useCallback } from 'react'
import { NetInfo } from 'react-native'
export default () => {
    function useNetInfo() {
        const [netInfo, setNetInfo] = useState(false)
        
        onChange = (newState) => {
            setNetInfo(newState)
        }

        useEffect(() => {
            NetInfo.isConnected.fetch().then((connectionInfo) => {
                setNetInfo(connectionInfo)
            })
            NetInfo.isConnected.addEventListener('connectionChange', onChange)

            return () => {
                NetInfo.isConnected.removeEventListener('connectionChange', onChange)
            }
        }, [])
        return netInfo
    }

    return [useNetInfo];
}
