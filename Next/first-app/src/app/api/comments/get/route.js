
import { comments } from "../../../../data/comments.js";
export async function GET(req) {
    console.log(req.method);  

    // const comments = [
    //     { id: 1, text: "This is comment 1" },
    //     { id: 2, text: "This is comment 2" },
    //     { id: 3, text: "This is comment 3" },
    //     { id: 4, text: "This is comment 4" },
    //     { id: 5, text: "This is comment 5" }
    // ];

    return new Response(JSON.stringify(comments), {
        status: 200,
    });
}
