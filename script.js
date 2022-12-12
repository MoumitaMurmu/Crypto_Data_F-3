      const myApiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false" //API url stroed in variable
      const myApiFunction = async () =>{
      const response = await fetch(myApiUrl) //data is in json format
      var data = await response.json(); //converted to object
      console.log(data)
    
    
        //same data fetching using .then
        /*
            fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((data)=>{return data.json()})
        */
    
      let tableData = ""
         data.map((values)=>{
         tableData += `<tr>
         <td><img src="${values.image}"</td>
         <td style="padding-left:22px">${values.name}</td>
         <td>${values.symbol.toUpperCase()}</td>
         <td>$${values.current_price.toLocaleString()}</td>
         <td>$${Number(values.total_supply).toLocaleString()}</td>
         <td id =${values.id} style="color:red">${Math.round(values.price_change_percentage_24h*100)/100}%</td>
         <td>Mkt cap: $${Number(values.fully_diluted_valuation).toLocaleString()}</td>
        </tr>`
      })
   
        
      document.getElementById("table_body").innerHTML=tableData //rendering the data to the  html table
      }
         myApiFunction()
    