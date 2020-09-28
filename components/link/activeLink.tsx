import { useRouter } from 'next/router'

type styleType = {
    marginRight: number,
    color: string,
    fontSize: number,
    fontWeight: number
}

function ActiveRouter({ children, href }) {
    const router = useRouter()
    const style : styleType = {
        marginRight: 40,
        color: '#2E2E2E',
        fontSize: 16,
        fontWeight: router.pathname === href ? 500 : 350
    }

    const handleClick = e => {
        e.preventDefault()
        router.push(href)
    }
    
    return (
        <a 
            href={href}
            onClick={handleClick} 
            style={style}
        >
            {children}
        </a>
    )
}

export default ActiveRouter