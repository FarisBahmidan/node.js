import express, { Response } from "express";
import path from "path";

const htmlPublic = (res: Response, htmldir: string, file_name: string = "index.html") => {
    return res.sendFile(path.join(__dirname, `public/${htmldir}/${file_name}`))
}

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.redirect('/index')

})

app.listen(443, () => {
    console.log("servar satrting in port 443");

})
