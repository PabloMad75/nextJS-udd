import Link from 'next/link'

const NotFound = () => {
    return (
        <>
            <h1>404</h1>
            <p>No pudimos encontrar la página que buscas :c</p>
            <Link href='/'>
                Volver a la página principal
            </Link>
        </>
    )
}

export default NotFound