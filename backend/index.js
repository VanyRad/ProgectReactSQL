import express from "express";
import mysql from "mysql"

const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"S1mka2019",
    database:"new"
})

app.get("/",(req,res)=>{
    res.json("Привет, это сервер, как твои дела? Как поживает твой код?")
})

app.get("/catalog",(req,res)=>{
  
        const q = "SELECT * FROM new.`new-table`;";
        db.query(q,(err,data)=>{
            if(err) return res.json(err)
            return res.json(data)
    })
})


app.post("catalog", (req,res)=>{
    const q = "INSERT INTO new.table (`price`,`title`,`desc`,`img`)  values (?)"
    const values =['price','title','desc','img']
    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})


app.listen(8800, ()=>{
    console.log("Подключено к backend")
})
