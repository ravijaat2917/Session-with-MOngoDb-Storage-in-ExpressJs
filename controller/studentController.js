class StudentController {
    static session_example =(req,res)=>{
        req.session.device = 'Mobile'
        if(req.session.count){
            req.session.count++
        }else{
            req.session.count = 1
        }
        res.send(`Count : ${req.session.count}`)
    }
}

export default StudentController;