import { ComponentChildren } from 'preact'
import Navbar from './navbar/Navbar'

interface ChildrenProps {
    children?: ComponentChildren
}

const Header = ({ children }: ChildrenProps) => {
    return (
        <header className="p-4 dark:bg-my-background dark:text-gray-100">
            <Navbar />
            {children}
        </header>
    )
}

export default Header
