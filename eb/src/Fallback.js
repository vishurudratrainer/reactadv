
const Fallback=({error,resetErrorBoundary})=>{
    return(<div>
        <p>Something went wrong</p>
        <pre style={{color:"red"}}>{error.message}</pre>
    </div>)

}


export default Fallback