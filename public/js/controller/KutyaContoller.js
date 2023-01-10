import AdatbeolvasModel from "../model/AdatbeolvasModel.js";
import KutyakView from "../view/Kutyakview.js";

class KutyaContoller
{
    constructor()
    {
        console.log("controller")
        const token = $(`meta[name="csrf-token"]`).attr("content");
        const adatbeolvasModel = new AdatbeolvasModel(token);

        this.vegpont="/kutyak";
        // this.vegpont="localhost:8000/kutyak";

        adatbeolvasModel.adatBe(this.vegpont, this.kutyaAdatok)
    }

    kutyaAdatok(tomb)
    {
        const szuloElem=$("article");
        new KutyakView(tomb, szuloElem);
    }

    ujKutya(adat)
    {
        
    }
}

export default KutyaContoller