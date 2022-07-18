export const RandomImage = () => {
  const imageList = [
    "https://upload.wikimedia.org/wikipedia/commons/3/32/Wikipedia_space_ibiza%2803%29.jpg",
    "https://static01.nyt.com/images/2020/04/02/us/politics/00convention-delayHFO/00convention-delayHFO-videoSixteenByNineJumbo1600.jpg",
    "https://www.sportcal.com//Images/News/Insight/2018/Apr/FeatureDetail/Q8Q8F092AFJ0JAD.jpg",
    "https://evanevanstours.com/blog/wp-content/uploads/2019/06/music-festival-scaled.jpg",
    "https://www.kerbfood.com/wp-content/uploads/2019/07/UPDATED-CATERS-WEBSTE-PICSCopy-of-190621_KERB_NaturalHistoryMuseum_JakeDavis_@hungryvisuals-6406-1024x682.jpg",
    "https://static.designmynight.com/uploads/2020/01/nye-gherkin-london-1200x799-optimised.jpg",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
  ];
  return imageList[Math.floor(Math.random() * 8)]
};
