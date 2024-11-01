function createDivs(size=16){
    for (let i = 0; i < size; i++)
    {
        let sizeX = size;
        const divSize = container.clientWidth / size;
        for (let j = 0; j < sizeX; j++)
        {
            let aDiv = document.createElement("div");
            aDiv.setAttribute("class", "grid")
            
            aDiv.style.width = `${divSize}px`;
            aDiv.style.height = `${divSize}px`;
            container.appendChild(aDiv);
        }
    }
    console.log("divs created")
}
function removeDivs()
{
    childDiv = container.lastElementChild;
    while(childDiv)
    {
        container.removeChild(childDiv);
        childDiv = container.lastElementChild;
    }
}
function randomNumber(max)
{
    let choice =  Math.floor (Math.random() * max);
    return choice;
}
var container = document.querySelector("#container");
function main()
{
    const range = document.querySelector("#sizeGrid");
    document.querySelector("#printSize").textContent = `${range.value}`
    createDivs(range.value);
    containerChild = document.querySelectorAll(".grid")
    range.addEventListener('change', () =>{
        document.querySelector("#printSize").textContent = `${range.value}`;
        removeDivs();
        createDivs(range.value);
    });

    containerChild.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        })
        
    });
}

main();