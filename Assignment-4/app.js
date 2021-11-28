const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const company = require("./company");
const seller = require("./seller");
const product = require("./product");

//ADD
app.post("/addCompany",(req,res) => {
    const companyid = req.body.companyId;
    const name = req.body.name;
    const productid = req.body.productId;
    
    const cname = company.filter((c)=> c.name === name);
    if(cname.length === 0)
    {
        return res.json({ data:"Company Information added successfully",companyId:companyid,name:name,productId:productid});
    }
    else
    {
        return res.json({ data:"Company Information already exist!!!"});
    }
});

app.post("/addSeller",(req,res) => {
    const sellerid = req.body.sellerId;
    const name = req.body.name;
    const productid = req.body.productId;
    
    const sname = seller.filter((sel) => sel.name === name);
    if(sname.length === 0)
    {
        return res.json({ data:"Seller Information added successfully",sellerId:sellerid,name:name,productId:productid});

    }
    else
    {
        return res.json({ data:"Seller Information already exist!!!"});
    }
});

app.post("/addProduct",(req,res) => {
    const sellerid = req.body.sellerId;
    const name = req.body.name;
    const title = req.body.title;
    const price = req.body.price;
    const category = req.body.category;
    const companyid = req.body.companyId;
    const productid = req.body.productId;
    
    const pname = product.filter((sel) => sel.title === name);
    if(pname.length === 0)
    {
        return res.json({ data:"Product Information added successfully",sellerId:sellerid,name:name,productId:productid,title:title,price:price});
    }
    else
    {
        return res.json({ data:"Product Information already exist!!!"});
    }
});

//Retrieve
app.post("/retrieveCompany",(req,res) => {
    const name = req.body.title;

    const pname = product.filter((p)=> (p.title === name));
    if(pname.length === 1)
    {
        const companyid = pname[0].companyId;
        const comp = company.filter((c)=> c.companyId === companyid);
        if(comp.length === 1)
        {
            return res.json({ data:"Company Information",ProductName:name,CompanyId:companyid,CompanyName:comp[0].name,ProductId:comp[0].productId});
        }
    }
    else
    {
        return res.json({ data:"No Such Company Exist!!!"});
    }
});

app.post("/retrieveSeller",(req,res) => {
    const name1 = req.body.title;

    const pname = product.filter((p)=> (p.title === name1));
    
    if(pname.length === 1)
    {
        const seller_id = pname[0].sellerId;
        const sell = seller.filter((s)=> (s.sellerId == seller_id));
        if(sell.length === 1)
        {
            return res.json({ data:"Company Information",ProductName:name1,SellerId:seller_id,SellerName:sell[0].name,ProductId:sell[0].productId});
        }
    }
    else
    {
        return res.json({ data:"No Such Seller Exist!!!"});
    }
});

app.post("/retrieveProduct",(req,res) => {
    const name = req.body.name;
    
    const cname = company.filter((c)=> (c.name === name));
    if(cname.length === 1)
    {
        const productid = cname[0].productId;
        const prod = product.filter((p)=> p.productId == productid);
        if(prod.length === 1)
        {
            return res.json({ data:"Company Information",CompanyName:name,ProductId:productid,ProductName:prod[0].title,ProductPrice:prod[0].price});
        }
    }
    else
    {
        return res.json({ data:"No Such Company Exist!!!"});
    }
});

//update
app.post("/updateCompany",(req,res) => {
    const companyid = req.body.companyId;
    const productid = req.body.productId;
    
    const cname = company.filter((c)=> c.companyId === companyid);
    if(cname.length === 1)
    {
        return res.json({ data:"Company Products updated successfully",companyId:companyid,ProductId:productid});
    }
    else
    {
        return res.json({ data:"Updation Failed!!!"});
    }
});

app.post("/updateSeller",(req,res) => {
    const sellerid = req.body.sellerId;
    const productid = req.body.productId;
    
    const sname = seller.filter((s)=> s.sellerId === sellerid);
    if(sname.length === 1)
    {
        return res.json({ data:"Seller Products updated successfully",sellerId:sellerid,ProductId:productid});
    }
    else
    {
        return res.json({ data:"Updation Failed!!!"});
    }
});

app.post("/updateProduct",(req,res) => {
    const category = req.body.category;
    const productid = req.body.productId;
    
    const pname = product.filter((s)=> s.productId === productid);
    if(pname.length === 1)
    {
        return res.json({ data:"Products Category updated successfully",Category:category,ProductId:productid});
    }
    else
    {
        return res.json({ data:"Updation Failed!!!"});
    }
});

//delete
app.post("/deleteCompany",(req,res) => {
    const companyid = req.body.companyId;
    
    const cname = company.filter((c)=> c.companyId === companyid);
    if(cname.length === 1)
    {
        return res.json({ data:"Company Information deleted successfully",DeletedCompany:cname[0].name});
    }
    else
    {
        return res.json({ data:"Deletion Failed!!!"});
    }
});

app.post("/deleteSeller",(req,res) => {
    const sellerid = req.body.sellerId;
    
    const sname = seller.filter((s)=> s.sellerId === sellerid);
    if(sname.length === 1)
    {
        return res.json({ data:"Seller Information deleted successfully",DeletedSeller:sname[0].name});
    }
    else
    {
        return res.json({ data:"Deletion Failed!!!"});
    }
});

app.post("/deleteProduct",(req,res) => {
    const productid = req.body.productId;
    
    const pname = product.filter((s)=> s.productId === productid);
    if(pname.length === 1)
    {
        return res.json({ data:"Product Information deleted successfully",DeletedProduct:pname[0].title});
    }
    else
    {
        return res.json({ data:"Deletion Failed!!!"});
    }
});

app.listen(port,()=>console.log("App runing on port 5000"));