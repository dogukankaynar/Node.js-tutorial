import { readFile, writeFile, appendFile, unlink, mkdir, rmdir } from "node:fs";

//Dosya Okuma
readFile("password.txt","utf8",(err,data)=>{
    if(err){console.log("Bir Hata Oluştu ",err)};
    console.log(data)
    console.log("dosya okundu")
})

//Dosya Yazma
writeFile('message.txt', 'Yeni js Oluşturma', 'utf8', (err)=>{
    if(err){console.log("Bir Hata Oluştu "),err}
    console.log("Dosya Oluştu ")
});

//Veri Eklemek
appendFile('message.txt', '\n Yeni Data', (err) => {
    if (err) throw err;
    console.log('Yeni Veri Eklendi');
  });

//Veri Silme
unlink("message.txt",(err)=>{
    if(err) throw err
    console.log("Dosya Başarıyla Silindi");
})

//Klasör Oluşturma
mkdir("deneme",{recursive:true},(err)=>{
    if(err) throw err
})

//Klasör Silme
rmdir("deneme", { recursive: true }, (err) => {
  if (err) throw err;
});
