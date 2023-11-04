import { NextResponse } from "next/server"


export const GET = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return NextResponse.json({message: 'Usuarios Encontrados', status: 200, data})
}

export const POST = () => {
    return NextResponse.json({message: "Creando Datos"})
}

export const PUT = () => {
    return NextResponse.json({message: "Actualizando Datos"})
}

export const DELETE = () => {
    return NextResponse.json({message: "Eliminando Datos"})
}


//API HANDLERS (Este es el bueno para Next 13 y 14 )

//API ROUTE (Next 12 hacia abajo)
