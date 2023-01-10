import KutyaView from "./KutyaView.js";

class KutyakView
{
    constructor(tomb, szuloElem)
    {
        console.log("kutyak view");
        szuloElem.html(`<div id="tartalom">
        <div id="gomb"><button id="hozzaad">Hozzáad</button></div>
        </div>`);
        
        this.divElem = szuloElem.children("div:last-child");
        
        tomb.forEach(adat =>
        {
            const adatom = new KutyaView(adat, this.divElem);
        })
    }
}

export default KutyakView;