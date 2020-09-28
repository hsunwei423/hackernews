import Link from 'next/link'
import ActiveLink from '../components/link/activeLink'


export default function Nav() {
    return (
        <nav>
            <ActiveLink href="/new" as={process.env.BACKEND_URL + '/new'}>
                New
            </ActiveLink>
            <ActiveLink href="/top"as={process.env.BACKEND_URL + '/top'}>
                Top Stories
            </ActiveLink>
            <ActiveLink href="/best" as={process.env.BACKEND_URL + '/best'}>
                Best Stories
            </ActiveLink>
            <ActiveLink href="/ask" as={process.env.BACKEND_URL + '/ask'}>
                Ask
            </ActiveLink>
            
            <ActiveLink href="/jobs" as={process.env.BACKEND_URL + '/jobs'}>
                Jobs
            </ActiveLink>
            <ActiveLink href="/show" as={process.env.BACKEND_URL + '/show'}>
                Show
            </ActiveLink>
        <style jsx>{`
            nav {
                height: 2rem;
                position: sticky;
                top: 0px;
                z-index: 99;
                background-color: #FFF;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            @media (max-width: 600px) {
                nav {
                    overflow-x: scroll;
                }
              }
        `}</style>
        </nav>
    )
}