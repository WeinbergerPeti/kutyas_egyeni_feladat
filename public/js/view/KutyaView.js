class KutyaView
{
    #elem
    constructor(elem, szuloElem)
    {
        this.#elem=elem;
        szuloElem.append(`<div class="elem">
        <h2>${elem.név}</h2>
        <p>${elem.kor} év</p>
        <p>${elem.súly} kg</p>
        <p>${elem.méret} cm</p>
        <button>Töröl</button>
        <button>Módosít</button>
        </div>`);

        this.sorElem= szuloElem.children("div:last-child");
    }
}

export default KutyaView;