import { comments } from "@/data/comments.js";
export async function POST(req,res) {
    try {
        const {data} = await req.json()
        const newComment = {
            id: comments.length + 1,  
            text: data || 'No text provided',
        };

        comments.push(newComment);

        return new Response(JSON.stringify(newComment), {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Invalid JSON data' }), {
            status: 400, 
        });
    }
}