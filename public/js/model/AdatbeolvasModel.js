class AdatbeolvasModel
{
    #adatokTomb=[];

    constructor(token)
    {
        console.log("modell");
        this.token=token
    }
    
    adatBe(vegpont, myCallback)
    {
        console.log(vegpont);
        fetch(vegpont, 
        {
            method:"GET",
            headers:
            {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.token,
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            this.#adatokTomb=data;
            console.log(this.#adatokTomb);
            myCallback(this.#adatokTomb);
        })
        .catch((error) =>{
            console.error("Error: ", error);
        })
    }
        
}
export default AdatbeolvasModel;