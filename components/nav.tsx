import Link from 'next/link'
import { stringify } from 'querystring'
import ActiveLink from '../components/link/activeLink'

export default function Nav() {
    
    return (
        <nav>
            <ActiveLink href="/new">
                New
            </ActiveLink>
            <ActiveLink href="/top">
                Top Stories
            </ActiveLink>
            <ActiveLink href="/best">
                Best Stories
            </ActiveLink>
            <ActiveLink href="/ask">
                Ask
            </ActiveLink>
            
            <ActiveLink href="/jobs">
                Jobs
            </ActiveLink>
            <ActiveLink href="/show">
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