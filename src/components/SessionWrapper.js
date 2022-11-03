const SessionWrapper = ({}) => {
    return(
        <div className="w-1/2">

            <div className="block">
                <h2 className="text-white py-2 text-xl font-bold">Session Name</h2>
                <input size="50" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="Put a name or Pay period here"></input>
            </div>

            <div className="block">
                <h2 className="text-white py-2 text-xl font-bold">Total Tips</h2>
                <span className="text-white py-2 text-xl font-bold">
                    $ <input size="6" className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75" placeholder="0.00"></input>
                </span>
            </div>
            
        </div>
    )
}

export default SessionWrapper;