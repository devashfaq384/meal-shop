
import { Pool } from "pg";

export const pool = new Pool({
    user : process.env.USER_NAME,
    host : process.env.HOST_NAME,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    port : process.env.PORT_NUMBER

})

export async function dbConnect(){
    await pool.connect((err, client , release)=>{
        if(err){
            return console.log('There is an error in the connection' , err.stack)
        }
        client.query("SELECT NOW()" , (err, result)=>{
            release()
            if(err){
                return console.log("Error in exceting the query" , err.stack)
            }
            console.log("Connected to database", result.rows)
        })
    })
}