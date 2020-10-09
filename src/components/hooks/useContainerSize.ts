//@ts-nocheck
import { useRef, useState, useEffect, Ref } from "react";
import {debounce} from 'lodash'

interface ContainerSize {
    width: number
    height: number
}

export function useContainerSize():[Ref<HTMLDivElement>, ContainerSize]{
    const container = useRef((null as unknown) as HTMLDivElement)
    const [size, setSize] = useState<ContainerSize>({
        width: 280,
        height: 280
    })
    useEffect(()=>{
        function setContainerSize() {
            setSize(()=>{
                if(container.current) return ({
                    width: container.current.clientWidth,
                    height: container.current.clientHeight
                })
            })
        }
        setContainerSize()

        const handleResize = debounce(()=>setContainerSize(),250)
        window.addEventListener('resize', handleResize)

        return ()=> window.removeEventListener('resize',handleResize)
    },[container])

    return [container,size]

}