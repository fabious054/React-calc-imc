export const levels = [
    {title:'magreza', color:"#96a3ab",icon:'down',imc:[0,18.5] },
    {title:'normal', color:"#0ead69",icon:'up',imc:[18.6,24.9] },
    {title:'sobrepeso', color:"#e2b036",icon:'down',imc:[25,30] },
    {title:'obeso', color:"#c3423f",icon:'down',imc:[30.1,99] },
];

export const calculateImc = (height,weight)=>{

        const imc  = weight / (height * height);
        console.log(imc);

        for(let i in levels){

            if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1] ){
                
                return levels[i];

            }
        }
        return null;
}