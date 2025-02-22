
function Sidebar({ handleSectionChange }) {
    return (
        <div id="Sidebar">
            <button onClick={() => handleSectionChange(0)}>Personal</button>
            <button onClick={() => handleSectionChange(1)}>Education</button>
            <button onClick={() => handleSectionChange(2)}>Experience</button>
            <button onClick={() => handleSectionChange(3)}>Projects</button>
            <button onClick={() => handleSectionChange(4)}>Skills</button>
            <button onClick={() => handleSectionChange(5)}>Achievements</button>
        </div>
    )
}

export default Sidebar;
