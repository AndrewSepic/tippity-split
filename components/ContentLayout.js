const ContentLayout = ({ isLoggedIn, children }) => {
    return (
        <div className={isLoggedIn ? 
						'content-layout flex flex-col bg-darkgreen px-8 pt-8 justify-between' : 
						'flex bg-darkgreen p-8 justify-center items-center h-full' }>
            {children}
        </div>
    )
}

export default ContentLayout
