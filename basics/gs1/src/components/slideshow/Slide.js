

const Slide =({slideNumber,slideHeader,slideBody})=>(<div>
    <h1>{slideHeader}</h1>
    <p>
        {slideBody}
    </p>
    <footer>#{slideNumber}</footer>
</div>)

export default Slide;