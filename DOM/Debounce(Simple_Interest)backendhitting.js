<html>
    <script>
        let timeout;
        function debouncePopulateDiv(){
            clearTimeout(timeout)
            setTimeout(function(){
                populateDiv()   
            },1000);
            }
       async function calculateinterest(){
            const p=document.getElementById("Amount").value;
            const r=document.getElementById("Rate").value;
            const t=document.getElementById("Time").value;
            const response = await fetch("https://sum-server.100xdevs.com/interest?p="+p+"&r="+r+"&t="+t)
            const ans = await response.text()
            document.getElementById("answer").innerHTML = ans;

        }
    </script>
    <title>
        <head>Simple Intrest</head>
    </title>
    <body>
        <input id="Amount" type='text' placeholder="Principal amount"><br>
        <input id="Rate" type = 'text' placeholder="Rate of interest"><br>
        <input id="Time" type = 'text' placeholder="Time in years"><br>
        <button onclick="calculateinterest" >Calculate </button>
        <div id="answer"></div>

    </body>
</html>
