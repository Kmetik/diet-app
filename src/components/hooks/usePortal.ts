import {useRef, useEffect} from 'react'

export default function usePortal(){
    const root = useRef(document.createElement('div'))
    root.current.className = ('modal show d-block')
    function setupParent(){
        const parent = document.querySelector('#modal-root')
        parent?.appendChild(root.current)
        document.body.classList.add('modal-open')
    }
    function remove(){
        document.body.classList.remove('modal-open')
        root.current.remove()
    }

    useEffect(()=>{
        setupParent()
        return ()=>remove()
    })

    return root.current
}