const ContentLayout = ({ children }) => {
    return (
        <div className="content-layout flex flex-col bg-darkgreen px-8 pt-8 justify-between">
            {children}
        </div>
    )
}

export default ContentLayout
