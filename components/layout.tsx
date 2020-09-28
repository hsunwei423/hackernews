import Nav from "./nav"
import style from '../components/layout.module.scss'

export function Layout({ children }) {
    return (
        <div className={style.container}>
            <Nav/>
            <div className={style.title}>Hacker News</div>
            <div className={style.content}>{children}</div>
        </div>
    )
}

export default Layout