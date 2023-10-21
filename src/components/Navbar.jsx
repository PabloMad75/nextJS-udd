import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
          <nav className='navbar py-5'>
          <h3 className='text-3xl font-bold text-red-400'>Navbar</h3>
          <ul>
            <li>
              <Link href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about'>
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href='/shop'>
                Tienda
              </Link>
            </li>
            <li>
              <Link href='/posts'>
                Publicaciones
              </Link>
            </li>
          </ul>
        </nav>
        </>
    )
}

export default Navbar