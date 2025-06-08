const CloseButton=({setDisplay})=>{
    return(
        <>
        <button
                  className="btn btn-sm btn-danger position-absolute"
                  style={{ top: '10px', right: '10px', borderRadius: '50%' }}
                  onClick={() => setDisplay(null)}
                >
                  &times;
        </button>
        </>
    )
}

export default CloseButton