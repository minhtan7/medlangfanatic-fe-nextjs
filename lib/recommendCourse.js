

const recommendations = {
    "medical english": ["how-to-learn-medical-vocabulary", "combo-vocabulary", "communication-with-patients-101"],
    "tips": ["how-to-learn-medical-vocabulary", "combo-vocabulary"],
    "learning.how.to.learn": ["how-to-learn-medical-vocabulary", "combo-vocabulary"],
    "medical vocabulary": ["mavl", "how-to-learn-medical-vocabulary", "medical-terminology", "combo-vocabulary"],
    "jargon": ["mavl", "how-to-learn-medical-vocabulary", "medical-terminology", "combo-vocabulary"],
    "speaking": ["communication-with-patients-101", "clinical-case-presentation"],
    "communication": ["communication-with-patients-101", "clinical-case-presentation"],
    "listening": ["listening-skills"],
}



export const recommendedCourse = ({ topic, courseListContent, recommendedSlugs }) => {
    const reSlug = {}
    const reCourseList = {}
    if (recommendedSlugs) {
        recommendedSlugs.forEach(slug => reCourseList[slug] = courseListContent[slug])
    } else {
        topic.map(t => recommendations[t.name])
            .forEach(nameArr => {
                nameArr.forEach(name => reSlug[name] = reSlug[name] ? reSlug[name]++ : 0)
            })
        const sortedSlugArr = Object.entries(reSlug).sort((a, b) => a[1] - b[1]).map(el => el[0])
        sortedSlugArr.forEach(slug => reCourseList[slug] = courseListContent[slug])
    }
    return reCourseList
}