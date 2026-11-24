function r(e){return e.papel==="GESTOR"||e.papel==="ADMIN"?"QUALQUER":e.papel==="TECNICO"&&(e.aberturaOs==="QUALQUER"||e.aberturaOs==="PROATIVO")?e.aberturaOs:null}export{r as p};
