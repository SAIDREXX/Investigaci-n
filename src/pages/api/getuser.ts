import { type APIRoute } from "astro";
import { getUser } from "../../../database/client";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const user = await getUser(data);
        if (user) {
            return new Response(JSON.stringify({ message: "Inicio de sesión exitoso" }), { status: 200 });
        }
    } catch (error) {
        return new Response(JSON.stringify("Error en la autenticación"), {
            status: 400,
        });
    }
    return new Response(JSON.stringify({ message: "Credenciales incorrectas" }), { status: 400 });
};
