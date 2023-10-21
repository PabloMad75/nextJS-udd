import Link from 'next/link'

export const metadata = {
    title: 'Tienda UDD'
}

const ShopLayout = ({ children }) => {
    return (
        <>
            <nav>

                <h3>Bienvenido a la Tienda</h3>

                <li>
                    <Link href='/shop/products'>Productos</Link>
                </li>

            </nav>

            {children}
        </>
    )
}

export default ShopLayout