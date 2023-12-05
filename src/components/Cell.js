import '../styles/Cell.css'

function Cell(props)
{
    return(
        props.gagne ?
            (<button id = {props.id} data-testid={props.data} key={props.ref} className={['cellule', props.couleur, props.jouable === true ? 'jouable' : ''].join(' ')}> </button>)
            :
            (<button id = {props.id} data-testid={props.data} key={props.ref} className={['cellule', props.couleur, props.jouable === true ? 'jouable' : ''].join(' ')} onClick={props.onClick}> </button>)
    )
}

export default Cell;