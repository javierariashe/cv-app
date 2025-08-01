import Input from "./Input";
import Description from "./Description";
import getDate from "../utils/getDate";
import handleDropdown from "../utils/handleDropdown";

function AchievementForm({
    achievement,
    handleChange,
    handleDelete,
    achievement_id,
}) {
    return (
        <div className="form">
            <div className="form-header opposite" onClick={handleDropdown}>
                {" "}
                {achievement.name.value == ""
                    ? "New Achievement"
                    : achievement.name.value}
                <span>▼</span>
            </div>
            <div>
                {Object.entries(achievement).map(([key, field]) => {
                    if (key === "id") return;
                    return (
                        <Input
                            name={key}
                            label={field.label}
                            value={field.value}
                            onChange={(e) => handleChange(e, achievement_id)}
                            type={field.type}
                            key={key}
                        />
                    );
                })}
                <button onClick={() => handleDelete(achievement.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

function AchievementPreview({ achievements }) {
    return (
        <>
            <div className="cv-header">Achievements</div>
            <hr />
            {achievements.map((achievement) => {
                return (
                    <div
                        className="achievement-item cv-details"
                        key={achievement.id}
                    >
                        <div className="opposite">
                            <span>
                                <b>{achievement.name.value}</b>
                            </span>
                            <span>{getDate(achievement.date)}</span>
                        </div>
                        <Description
                            description={achievement.description.value}
                        />
                    </div>
                );
            })}
        </>
    );
}

export { AchievementForm, AchievementPreview };
