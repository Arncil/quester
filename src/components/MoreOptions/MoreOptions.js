import { useState } from "react"
export default function MoreOptions(props) {
    const [isSortActive, setIsSortAcitive] = useState(false)

    const finnishAllQuests = props.finnishAllQuests
    const deleteAllQuests = props.deleteAllQuests
    const sortOption = props.sortOption
    const setSortOption = props.setSortOption

    const sortOptionsButton =
        isSortActive ?
            <footer>
                <button
                    onClick={() => setSortOption('All')}
                    style={sortOption !== 'All' ? { opacity: 0.5 } : {}}
                >All</button>
                <button
                    onClick={() => setSortOption('In Progress')}
                    style={sortOption !== 'In Progress' ? { opacity: 0.5 } : {}}
                >In Progress</button>
                <button
                    onClick={() => setSortOption('Checked')}
                    style={sortOption !== 'Checked' ? { opacity: 0.5 } : {}}
                >Checked</button>
            </footer> : null

    return (
        <div style={{display: 'grid', rowGap: '1vmin'}}>
            <footer>
                {sortOptionsButton}
            </footer>
            <footer>
                <button onClick={finnishAllQuests}>✔️ All Quests</button>
                <button onClick={() => setIsSortAcitive(!isSortActive)}>
                    {isSortActive ? 'Hide Sort' : 'Show Sort'}
                </button>
                <button onClick={deleteAllQuests}>✖️ All Quests</button>
            </footer>
        </div>
    )
}
