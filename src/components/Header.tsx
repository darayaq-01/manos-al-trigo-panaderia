import { ComponentChildren } from 'preact'
// import Navbar from './navbar/Navbar'

interface ChildrenProps {
  children?: ComponentChildren
}

const Header = ({ children }: ChildrenProps) => {
  return (
    <header className="p-4  font-extrabold font-fbase  ">
      {/* <Navbar /> */}
      {children}
    </header>
  )
}

export default Header
