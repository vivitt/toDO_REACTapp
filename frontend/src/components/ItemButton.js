function ItemButton({text, color, handler}) {
    return (<button onClick={handler} style={{backgroundColor: color}}>{text}</button>)
}



export default ItemButton;