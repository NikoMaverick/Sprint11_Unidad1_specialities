const express = require('express')
const app = express()
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
// Almacenamos en la variable los usuarios según su departamento
  let marketing=[];
  let developers=[];
  let qas=[];
  let ventas=[];
  let productos=[];
  let consulting=[];
  
  // Se añade al array los que coincidan con el departamento
  usersData.forEach(user => {
   if(user.specialty == "marketing"){
      marketing.push(user);
   }
  });

  usersData.forEach(user => {
   if(user.specialty == "developers"){
      developers.push(user);
   }
  });

  usersData.forEach(user => {
   if(user.specialty == "QAs"){
      qas.push(user);
   }
  });

  usersData.forEach(user => {
   if(user.specialty == "ventas"){
      ventas.push(user);
   }
  });

  usersData.forEach(user => {
   if(user.specialty == "productos"){
      productos.push(user);
   }
  });

  usersData.forEach(user => {
   if(user.specialty == "consulting"){
      consulting.push(user);
   }
  });

  let dataUsers = '';
  


// Creamos las rutas
 app.get ('/', (req, res) => {
    res.send(
        `<h1>Inicio</h1>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="">Contactanos</a>`      
    )
    
 })

 app.get('/marketing', (req, res) => {
    res.send(
        `<h2>Marketing</h2>
        <a href="/">Inicio</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })

 app.get('/developers', (req, res) => {
    res.send(
        `<h2>Developers</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })

 app.get('/qas', (req, res) => {
    res.send(
        `<h2>QAs</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })

 app.get('/ventas', (req, res) => {
    res.send(
        `<h2>Ventas</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })

 app.get('/productos', (req, res) => {
    res.send(
        `<h2>Productos</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })

 app.get('/consulting', (req, res) => {
    res.send(
        `<h2>Consulting</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/contactanos">Contactanos</a>`  
    )
    
 })
/* Elimino esta ruta para que me genere error 404.
 app.get('/contactanos', (req, res) => {
    res.send(
        `<h2>Contactanos</h2>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>`  
    )
        console.log(req.pach);
 })*/

 app.use((req, res) => {
    res.status(404).send(`<h2>404</h2><h3>Página encontrada, vuelve a Inicio</h3>
        <a href="/">Inicio</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="qas">QAs</a>
        <a href="/ventas">Ventas</a>
        <a href="/productos">Productos</a>
        <a href="/consulting">Consulting</a>
        <a href="/contactanos">Contactanos</a>`)
 })

 app.listen(3000, () =>{
    console.log('http://localhost:3000')
 })

 
    