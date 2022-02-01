//const saveAs = require("./FileSaver");

const generatePDF = async(name)=>{
   
    const {PDFDocument, rgb}=PDFLib;
    const exBytes = await fetch("./certificate.pdf").then((res)=>{return res.arrayBuffer()});
    
    const exFont=await fetch("./Lato-Light.ttf").then((res)=>{
        return res.arrayBuffer();
    });
    
   

    const pdfDoc=await PDFDocument.load(exBytes);
    pdfDoc.registerFontkit(fontkit);
    const myFont=await pdfDoc.embedFont(exFont); 

    const pages=pdfDoc.getPages();
    const firstPg=pages[0]
    firstPg.drawText(name,{
        x:350,
        y:300,
        size:40,
        font:myFont,
        color:rgb(1,1,1)
    })

    const uri=await pdfDoc.saveAsBase64({dataUri:true})
    saveAs(uri,"Certificate.pdf",{autoBom:true})
    document.querySelector("#mypdf").src=uri;
};
const submitButton=document.getElementById("submit")
const inputVal=document.querySelector("#name")
submitButton.addEventListener("click",()=>{
    const val=inputVal.value
    generatePDF(val);
})


