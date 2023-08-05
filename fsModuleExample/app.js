import { writeFile, readFile ,appendFile,unlink} from "node:fs";

//yazma
writeFile(
  "employees.json",
  '{"name":"Employee 1 Name","salary":2000}',
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("JSON Dosyası başarılı bir şekilde oluşturuldu");
  }
);

//okuma
readFile("employees.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log("data:", data);
});


//güncelleme
appendFile("employees.json",',{"name":"Dogukan","salary":20000}',(err)=>{
    if(err) throw err;
    console.log("Veri Eklendi");
})


//silme
unlink("employees.json",(err)=>{
    if(err) throw err
    console.log("Dosya Başarıyla Silindi");
})