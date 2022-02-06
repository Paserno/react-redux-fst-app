

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://earthsky.org/upl/2021/05/polaris-iss-Robert-Watcher-Seaforth-Ontario-CN-may17-2021-e1621341479646.jpeg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Ut excepteur ea qui occaecat dolore. Duis amet amet culpa proident excepteur. 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>25</h4>
            </div>


        </div>
    )
};
