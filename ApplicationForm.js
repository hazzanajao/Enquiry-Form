    const myExpress =  require("express")
    let myServer = myExpress()

    myServer.use(myExpress.urlencoded({ extended : false}))

    /**
    *  Implementing get() Method ! "
    ** */
    myServer.get('/', function (req, res){

    res.send(`
    <div class="form-container" 
    style=" width:100%;
    background-color: lightgrey;
    box-shadow: 0 0 4px #5555;"
    >
    <div class="form-body" >  
    
    <div class="form-header"
    style="
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    "
    >
     <br><br>
    <div>A simple survey form</div>
    <br><br>
    Fill this form for your evaluation
    <br><br> 
    </div>
    
    
    <div style=" display: inline-flex; text-align: left; border : 1px groove black; margin: 25px">
    
    <div>
    <form action = "/response-page1" method="post" style="margin: 15px; margin-top:25px; ">
    
    <p> 1. Do you have experience in javascript programing ? <br><br>
       <input name="javascript" type = "text" autocomplete="off" ><br><br>
    </p> 
      
    <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
     <form action = "/response-page2" method="post" style="margin: 15px; margin-top:25px;">  
    <p> 2. Is your programming skill above 2 years ? <br><br>
       <input name="experience" type = "text" autocomplete = "off"><br><br>
    </p>
        <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form> 
      <form action = "/response-page3" method="post" style="margin: 15px; margin-top:25px;">   
    <p> 3. Have you worked with Nodejs/Express libraries before ? <br><br>
       <input name="library" type = "text" autocomplete = "off"><br><br>
    </p>
       <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    </div>
    
     <div>
    
    <form action = "/response-page1" method="post" style="margin: 15px; margin-top:25px; ">
    
    <p> 1. Do you have experience in javascript programing ? <br><br>
       <input name="javascript" type = "text" autocomplete="off" ><br><br>
    </p> 
      
    <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
     <form action = "/response-page2" method="post" style="margin: 15px; margin-top:25px;">  
    <p> 2. Is your programming skill above 2 years ? <br><br>
       <input name="experience" type = "text" autocomplete = "off"><br><br>
    </p>
        <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form> 
      <form action = "/response-page3" method="post" style="margin: 15px; margin-top:25px;">   
    <p> 3. Have you worked with Nodejs/Express libraries before ? <br><br>
       <input name="library" type = "text" autocomplete = "off"><br><br>
    </p>
       <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
    </div>
    
    
     <div>
    
    <form action = "/response-page1" method="post" style="margin: 15px; margin-top:25px; ">
    
    <p> 1. Do you have experience in javascript programing ? <br><br>
       <input name="javascript" type = "text" autocomplete="off" ><br><br>
    </p> 
      
    <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
     <form action = "/response-page2" method="post" style="margin: 15px; margin-top:25px;">  
    <p> 2. Is your programming skill above 2 years ? <br><br>
       <input name="experience" type = "text" autocomplete = "off"><br><br>
    </p>
        <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form> 
      <form action = "/response-page3" method="post" style="margin: 15px; margin-top:25px;">   
    <p> 3. Have you worked with Nodejs/Express libraries before ? <br><br>
       <input name="library" type = "text" autocomplete = "off"><br><br>
    </p>
       <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
    </div> 
    
     <div>
    
    <form action = "/response-page1" method="post" style="margin: 15px; margin-top:25px; ">
    
    <p> 1. Do you have experience in javascript programing ? <br><br>
       <input name="javascript" type = "text" autocomplete="off" ><br><br>
    </p> 
      
    <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
     <form action = "/response-page2" method="post" style="margin: 15px; margin-top:25px;">  
    <p> 2. Is your programming skill above 2 years ? <br><br>
       <input name="experience" type = "text" autocomplete = "off"><br><br>
    </p>
        <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form> 
      <form action = "/response-page3" method="post" style="margin: 15px; margin-top:25px;">   
    <p> 3. Have you worked with Nodejs/Express libraries before ? <br><br>
       <input name="library" type = "text" autocomplete = "off"><br><br>
    </p>
       <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Submit </button>
    </form>
    
    </div> 
    
    </div>
     </div>
     <br> <br> <br> 
     
     <footer>
     <p style="text-align: center"> ©2021 Ajao.H All rights reserved.</p>
     </footer>
     <br> <br>
   </div>
    
    `)
})






/**
 *  Implementing post() Method ! This will send our data through this page called "response-page"
 ** */
    myServer.post( '/response-page1', function (req, res) {

        if (req.body.javascript.toUpperCase() == "YES") {
            res.send(`
            <p > 
            1. Correct Answer !. Please proceed to Q2.
               <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> next </button></a>
            </p>
            `)
        }else {
            res.send(`
            <p > 
            1. Wrong Answer ! Please proceed to Q2.
             <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> next </button></a>
            </p>
            `)
        }


    }

    )

    myServer.post( '/response-page2', function (req, res) {
   if (req.body.experience.toUpperCase() == "YES") {

                res.send(`
            <p> 
            2. Good !. Please proceed to Q3.
            <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> next </button></a>
            </p>
            `)
            } else {
                res.send(`
            <p>
            2. Sorry you need to gain more years of experience!.
               <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> next </button></a>
            </p>
            `)
            }

    })

    myServer.post( '/response-page3', function (req, res) {
        if (req.body.library.toUpperCase() == "YES") {
            res.send(`
            <p> 
            3. Correct Answer !.
            <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Back </button></a>
            </p>
            `)
        }

        else {
            res.send(`
            <p> 
            Sorry please apply for next batch !
             <a href="/"> <button style=" padding: 10px; border: hidden; background-color: green; color: white; border-radius: 5px; margin-bottom: 15px"> Back </button></a>
            </p> 
            `)
        }
    })



    myServer.listen(5000)
