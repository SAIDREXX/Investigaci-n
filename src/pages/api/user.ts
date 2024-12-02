import { type APIRoute } from "astro";
import { addUser } from "../../../database/client";

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        await addUser(data);
        return new Response("OK", { status: 200 });
    } catch (error) {
        return new Response("Error", { status: 400 });
    }

}