import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/team">Home</CustomLink>
        <CustomLink to="/team/posts">Blog</CustomLink>
        <CustomLink to="/team/about">About</CustomLink>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="container">&copy; ReactRouter Tutorials 2021</footer>
    </>
  )
}

export { Layout }
