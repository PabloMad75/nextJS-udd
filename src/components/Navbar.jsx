import Link from 'next/link'

const Navbar = () => {
    return (
        <>
             <nav>
          <h3>Navbar</h3>
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
          </ul>
        </nav>
        </>
    )
}

export default Navbar