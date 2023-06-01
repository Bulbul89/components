import Accordion from "../components/Accordion";
function AccordionPage () {
    const items = [
        {
            id:"ddfsfd",
            label:'can i use react on a project???',
            content:'you can use '
        },
        {
            id:"yreyrufsj",
            label:'can i use javascript on a project???',
            content:'you can use '
        },
        {
            id:"eiejfhgyf",
            label:'can i use css on a project???',
            content:'you can use '
        },
    ]
     return <Accordion items={items}/>
}

export default AccordionPage;