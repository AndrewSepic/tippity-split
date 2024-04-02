const SessionInfo = ({ inputHandler, sessionInfo }) => {
    const { session_name, session_total_tips, session_notes } = sessionInfo

    return (
        <div className="w-1/2 flex flex-col justify-start mr-16">
            <div className="block">
                <h2 className="text-white py-2 text-xl font-bold">
                    Session Name
                </h2>
                <input
                    size="50"
                    className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                    placeholder="Put a name or Pay period here"
                    value={session_name}
                    onChange={(e) =>
                        inputHandler({
                            ...sessionInfo,
                            session_name: e.target.value,
                        })
                    }
                ></input>
            </div>

            <div className="block mt-8">
                <h2 className="text-white py-2 text-xl font-bold">
                    Total Tips
                </h2>
                <span className="text-white py-2 text-xl font-bold">
                    ${' '}
                    <input
                        size="6"
                        type="number"
                        step="0.01"
                        className="bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                        placeholder="0.00"
                        value={session_total_tips}
                        onChange={(e) =>
                            inputHandler({
                                ...sessionInfo,
                                session_total_tips: parseFloat(e.target.value),
                            })
                        }
                    ></input>
                </span>
            </div>

            <div className="block mt-8">
                <h2 className="text-white py-2 text-xl font-bold">Notes:</h2>

                <textarea
                    size="6"
                    className="w-full bg-inputbg mr-4 text-white font-bold p-2 placeholder-darkgreen border-emerald-300 border-b-2 focus:outline-none focus:ring focus:ring-emerald-300/75"
                    placeholder="Add notes for later reference. (optional)"
                    value={session_notes}
                    onChange={(e) =>
                        inputHandler({
                            ...sessionInfo,
                            session_notes: e.target.value,
                        })
                    }
                ></textarea>
            </div>
        </div>
    )
}

export default SessionInfo
